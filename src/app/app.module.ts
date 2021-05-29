import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormacaoComponent } from './formacao/formacao.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { IdiomaComponent } from './idioma/idioma.component';
import { HabilidadeComponent } from './habilidade/habilidade.component';
import { InicioComponent } from './inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    FormacaoComponent,
    ExperienciaComponent,
    IdiomaComponent,
    HabilidadeComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
