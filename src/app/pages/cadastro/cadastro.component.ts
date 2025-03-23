import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';


@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [RouterModule, NgxMaskDirective],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css',
  providers: [provideNgxMask()]
})
export class CadastroComponent {

}
