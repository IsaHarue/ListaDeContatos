import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'app-detalhes',
  standalone: true,
  imports: [RouterModule, NgxMaskDirective],
  templateUrl: './detalhes.component.html',
  styleUrl: './detalhes.component.css',
    providers: [provideNgxMask()]
  
})
export class DetalhesComponent {

}
