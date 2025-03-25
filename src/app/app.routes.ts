import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { EdicaoComponent } from './pages/edicao/edicao.component';
import { DetalhesComponent } from './pages/detalhes/detalhes.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Página de home
  { path:'cadastro', component: CadastroComponent},
  {path:'edicao/:id', component: EdicaoComponent},
  {path:'detalhes/:id', component: DetalhesComponent}
];
