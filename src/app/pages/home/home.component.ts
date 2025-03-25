import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Contato, ContatoService } from '../../services/contato.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  contatos: Contato[] = [];

  constructor(private contatoService: ContatoService) {}

  ngOnInit(): void {
    console.log('HomeComponent inicializado.');
    this.carregarContatos();
  }

  carregarContatos(): void {
    console.log('Carregando contatos...');
    this.contatoService.listarContatos().subscribe({
      next: (data) => {
        this.contatos = data;
        console.log('Contatos carregados:', this.contatos);
      },
      error: (err) => console.error('Erro ao carregar contatos:', err),
    });
  }

  excluirContato(id: number): void {
    this.contatoService.excluirContato(id).subscribe({
      next: () => {
        console.log(`Contato com ID ${id} excluído com sucesso.`);
        this.carregarContatos(); // Atualiza a lista após excluir
      },
      error: (err) => console.error('Erro ao excluir contato:', err),
    });
  }
}