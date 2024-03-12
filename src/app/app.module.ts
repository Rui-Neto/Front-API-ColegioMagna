import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ProfessoresComponent } from './components/professores/professores.component';
import { CadastroProfessoresComponent } from './components/cadastro-professores/cadastro-professores.component';
import { DeletaProfessoresComponent } from './components/deleta-professores/deleta-professores.component';
import { AtualizaProfessoresComponent } from './components/atualiza-professores/atualiza-professores.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProfessoresComponent,
    CadastroProfessoresComponent,
    DeletaProfessoresComponent,
    AtualizaProfessoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
