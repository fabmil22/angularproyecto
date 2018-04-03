import { AddbooksComponent } from './components/addbooks/addbooks.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';



const routes: Routes = [
  { path: '',  component: HomeComponent},
  { path: 'home',  component: HomeComponent},
  { path: 'add',  component: AddbooksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
