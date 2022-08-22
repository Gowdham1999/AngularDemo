import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Sm01LoginPageComponent } from './sm01-login-page/sm01-login-page.component';
import { Sm02HomePageComponent } from './sm02-home-page/sm02-home-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Sm01LoginPageComponent },
  { path: 'home', component: Sm02HomePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
