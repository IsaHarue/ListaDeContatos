import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'app-edicao',
  standalone: true,
  imports: [RouterModule, NgxMaskDirective],
  templateUrl: './edicao.component.html',
  styleUrl: './edicao.component.css',
  providers: [provideNgxMask()]
})
export class EdicaoComponent {

}
