import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormacaoComponent } from './formacao/formacao.component';
import { InicioComponent } from './inicio/inicio.component';
import { IdiomaComponent } from './idioma/idioma.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { HabilidadeComponent } from './habilidade/habilidade.component';

const routes: Routes = [
  {path:'', component: InicioComponent},
  {path:'formacao', component: FormacaoComponent},
  {path:'Idioma', component: IdiomaComponent},
  {path:'Experiencia', component: ExperienciaComponent},
  {path:'Habilidade', component: HabilidadeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
