import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PacotesComponent } from './pacotes/pacotes.component';
import { FormularioComponent } from './formulario/formulario.component';

const routes: Routes = [
  {path: '', component: PacotesComponent},
  {path: 'pacote', component: PacotesComponent},
  {path: 'formulario', component: FormularioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
