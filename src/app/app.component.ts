import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true, // Garantir que este componente seja standalone, se necessário
  imports: [RouterOutlet, RouterModule], // Corrigido para estar no array de imports
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ListaDeContatos';
}
