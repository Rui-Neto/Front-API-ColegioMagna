import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProfessoresComponent } from './components/professores/professores.component';
import { CadastroProfessoresComponent } from './components/cadastro-professores/cadastro-professores.component';
import { DeletaProfessoresComponent } from './components/deleta-professores/deleta-professores.component';
import { AtualizaProfessoresComponent } from './components/atualiza-professores/atualiza-professores.component';

const routes: Routes = [
  {
    path:"",
    redirectTo: "home",
    pathMatch: 'full'
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "professores",
    component: ProfessoresComponent
  },
  {
    path: "professores/cadastro",
    component: CadastroProfessoresComponent
  },
  {
    path: "professores/deleta",
    component: DeletaProfessoresComponent
  },
  {
    path: "professores/atualiza",
    component: AtualizaProfessoresComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
