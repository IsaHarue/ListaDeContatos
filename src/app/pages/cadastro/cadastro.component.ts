import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { Contato } from '../../../../backend/entities/contato.entity';
import { ContatoService } from '../../services/contato.service';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [RouterModule, NgxMaskDirective, FormsModule, NgIf],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css',
  providers: [provideNgxMask()]
})
export class CadastroComponent {
  contato: Contato = { id: 0, nome: '', numero: '' };

  constructor(private contatoService: ContatoService, private router: Router) {}

  formatarNome(nome: string): string {
    return nome
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  salvarContato(): void {
    this.contato.nome = this.formatarNome(this.contato.nome);
    this.contato.numero = this.aplicarMascara(this.contato.numero);
  
    this.contatoService.listarContatos().subscribe(contatos => {
      const numeroExiste = contatos.some(c => c.numero === this.contato.numero);
  
      if (numeroExiste) {
        alert('Erro: Já existe um contato com esse número!');
        return;
      }
  
      this.contatoService.criarContato(this.contato).subscribe({
        next: () => {
          console.log('Contato salvo com sucesso!');
          this.router.navigate(['/'], {
            state: { mensagem: 'Contato criado com sucesso!' }
          });
        },
        error: (err) => console.error('Erro ao salvar contato:', err),
      });
    });
  }
  
  
  criarContato(): void {
    this.contatoService.criarContato(this.contato).subscribe({
      next: (data) => {
        console.log('Contato criado com sucesso:', data);
        this.router.navigate(['/']); // Redireciona para a página inicial
      },
      error: (err) => console.error('Erro ao criar contato:', err),
    });
  }

  aplicarMascara(numero: string): string {
    return numero.replace(/^(\d{2})(\d{2})(\d{5})(\d{4})$/, '+$1 ($2) $3-$4');
  }
}