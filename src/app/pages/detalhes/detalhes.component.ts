import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { Contato, ContatoService } from '../../services/contato.service';
import { CommonModule, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-detalhes',
  standalone: true,
  imports: [RouterModule, CommonModule, NgIf],
  templateUrl: './detalhes.component.html',
  styleUrl: './detalhes.component.css',
    providers: [provideNgxMask()]
  
})
export class DetalhesComponent {
  contato: Contato | null = null; // Agora armazena apenas um contato

  constructor(
    private contatoService: ContatoService,
    private route: ActivatedRoute // Para capturar o ID da URL
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id')); // Captura o ID da URL
    if (!id || isNaN(id)) {
      console.error('ID inválido');
      return;
    }

    this.carregarContato(id);
  }

  carregarContato(id: number): void {
    console.log('Buscando contato com ID:', id);
    this.contatoService.listarContatos().subscribe({
      next: (contatos) => {
        const contatoEncontrado = contatos.find((c) => c.id === id);
        if (contatoEncontrado) {
          this.contato = contatoEncontrado;
          console.log('Contato encontrado:', this.contato);
        } else {
          console.error('Contato não encontrado.');
        }
      },
      error: (err) => console.error('Erro ao carregar contato:', err),
    });
  }
}
