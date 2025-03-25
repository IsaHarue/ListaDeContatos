import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { Contato } from '../../../../backend/entities/contato.entity';
import { ContatoService } from '../../services/contato.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [RouterModule, NgxMaskDirective, FormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css',
  providers: [provideNgxMask()]
})
export class CadastroComponent {
  contato: Contato = { id: 0, nome: '', numero: '' };

  constructor(private contatoService: ContatoService, private router: Router) {}

  criarContato(): void {
    this.contatoService.criarContato(this.contato).subscribe({
      next: (data) => {
        console.log('Contato criado com sucesso:', data);
        this.router.navigate(['/']); // Redireciona para a página inicial
      },
      error: (err) => console.error('Erro ao criar contato:', err),
    });
  }
}