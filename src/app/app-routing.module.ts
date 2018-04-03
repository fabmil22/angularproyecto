import { MostrartecnicosComponent } from './components/mostrartecnicos/mostrartecnicos.component';
import { MostrarsuspensoComponent } from './components/mostrarsuspenso/mostrarsuspenso.component';
import { MostrarMatematicasComponent } from './components/mostrar-matematicas/mostrar-matematicas.component';
import { AddbooksComponent } from './components/addbooks/addbooks.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';



const routes: Routes = [
  { path: '',  component: HomeComponent},
  { path: 'home',  component: HomeComponent},
  { path: 'add',  component: AddbooksComponent},
  { path: 'matematica',  component: MostrarMatematicasComponent},
  { path: 'novela',  component: MostrarsuspensoComponent},
  { path: 'tecnico',  component: MostrartecnicosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
