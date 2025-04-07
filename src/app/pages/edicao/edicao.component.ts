import { Component, OnInit } from '@angular/core';
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
export class EdicaoComponent implements OnInit {
  contato: Contato = { id: 0, nome: '', numero: '' };
  contatoOriginal!: Contato;

  constructor(
    private contatoService: ContatoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (!id || isNaN(id)) {
      console.error('ID inválido');
      return;
    }

    this.carregarContato(id);
  }

  carregarContato(id: number): void {
    this.contatoService.listarContatos().subscribe({
      next: (contatos) => {
        const contatoEncontrado = contatos.find((c) => c.id === id);
        if (contatoEncontrado) {
          this.contato = contatoEncontrado;
          this.contatoOriginal = { ...contatoEncontrado }; // cópia para comparação
        } else {
          console.error('Contato não encontrado.');
        }
      },
      error: (err) => console.error('Erro ao carregar contato:', err),
    });
  }

  foiEditado(): boolean {
    return (
      this.contato.nome.trim() !== this.contatoOriginal.nome.trim() ||
      this.contato.numero.trim() !== this.contatoOriginal.numero.trim()
    );
  }

  formatarNome(nome: string): string {
    return nome
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  aplicarMascara(numero: string): string {
    return numero.replace(/^(\d{2})(\d{2})(\d{5})(\d{4})$/, '+$1 ($2) $3-$4');
  }

  editarContato(): void {
    if (!this.contato.nome || !this.contato.numero) {
      console.error('Nome e número são obrigatórios');
      return;
    }

    this.contato.nome = this.formatarNome(this.contato.nome);
    this.contato.numero = this.aplicarMascara(this.contato.numero);

    this.contatoService.listarContatos().subscribe(contatos => {
      const numeroExiste = contatos.some(c => 
        c.numero === this.contato.numero && c.id !== this.contato.id
      );

      if (numeroExiste) {
        alert('Erro: Já existe um contato com esse número!');
        return;
      }

      this.contatoService.editarContato(this.contato.id!, this.contato).subscribe({
        next: () => {
          this.router.navigate(['/'], {
            state: { mensagem: 'Contato editado com sucesso!' }
          });
        },
        error: (err) => {
          console.error('Erro ao atualizar contato:', err);
          window.alert('Erro ao editar o contato. Tente novamente.');
        },
      });
    });
  }
}
