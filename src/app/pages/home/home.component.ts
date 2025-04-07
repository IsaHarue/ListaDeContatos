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

    // Verifica se veio uma mensagem via navegação
    const nav = window.history.state;
    const mensagem = nav?.mensagem;

    if (mensagem) {
      setTimeout(() => {
        window.alert(mensagem);
      }, 500);
      
    }
  }

  carregarContatos(): void {
    console.log('Carregando contatos...');
    this.contatoService.listarContatos().subscribe({
      next: (data) => {
        if (Array.isArray(data)) {
          this.contatos = data
            .filter((contato) => contato.id !== undefined) // Filtra contatos com ID válido
            .sort((a, b) => (a.id! - b.id!)); // Ordena por ID crescente
          console.log('Contatos carregados e ordenados:', this.contatos);
        } else {
          console.error('Erro: O retorno não é um array:', data);
        }
      },
      error: (err) => console.error('Erro ao carregar contatos:', err),
    });
  }
  

  confirmarExclusao(id: number): void {
    // Exibe o prompt de confirmação
    const confirmacao = window.confirm(
      'Tem certeza que deseja excluir este contato?'
    );

    if (confirmacao) {
      this.excluirContato(id); // Exclui o contato se o usuário confirmar
    }
  }

  excluirContato(id: number): void {
    this.contatoService.excluirContato(id).subscribe({
      next: () => {
        console.log(`Contato com ID ${id} excluído com sucesso.`);
        this.carregarContatos(); // Atualiza a lista após excluir
        setTimeout(() => {
          window.alert('Contato excluído com sucesso!'); // Mostra a mensagem após a atualização da lista
        }, 500); // Tempo de espera de 500ms para garantir que a página tenha sido recarregada
      },
      error: (err) => {
        console.error('Erro ao excluir contato:', err);
        window.alert('Erro ao excluir o contato. Tente novamente.'); // Mensagem de erro
      },
    });
  }

  aplicarMascara(numero: string): string {
    return numero.replace(/^(\d{2})(\d{2})(\d{5})(\d{4})$/, '+$1 ($2) $3-$4');
  }
}
