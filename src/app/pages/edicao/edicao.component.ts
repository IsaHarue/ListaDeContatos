import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { Contato, ContatoService } from '../../services/contato.service';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edicao',
  standalone: true,
  imports: [RouterModule, NgxMaskDirective, NgIf, FormsModule],
  templateUrl: './edicao.component.html',
  styleUrl: './edicao.component.css',
  providers: [provideNgxMask()],
})
export class EdicaoComponent {
  contato: Contato = { id: 0, nome: '', numero: '' }; // Agora armazena apenas um contato

  constructor(
    private contatoService: ContatoService,
    private route: ActivatedRoute, // Para capturar o ID da URL
    private router: Router // Para redirecionar para a tela inicial
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
  editarContato(): void {
    if (!this.contato.nome || !this.contato.numero) {
      console.error('Nome e número são obrigatórios');
      return;
    }
  
    this.contatoService.editarContato(this.contato.id!, this.contato).subscribe({
      next: () => {
        console.log('Contato atualizado com sucesso!');
        this.router.navigate(['/']); // Redireciona para a tela inicial
      },
      error: (err) => console.error('Erro ao atualizar contato:', err),
    });
  }
}
