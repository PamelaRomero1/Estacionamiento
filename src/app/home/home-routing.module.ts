import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { BuscarPage } from '../buscar/buscar.page';
import { LoginPage } from '../login/login.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },

  {
    path: 'buscar',
    component: BuscarPage,
  }, 
  {
    path: 'login',
    component: LoginPage,
  }, 
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
