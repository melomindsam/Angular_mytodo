import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router'
import { SignupformComponent } from '../../components/signupform/signupform.component';
import { HomeComponent } from '../../components/home/home.component';

const routes : Routes = [
  {path:'', redirectTo: 'signup', pathMatch: 'full'}, // à l'adresse localhost (path = '') et cette
  // page redirige sur l'adresse localhost:4200/signup
  
  {path:'signup', component: SignupformComponent}, // à l'adresse localhost:4200/signup sera affichée le composant
  //signUpForm
  {path: 'home', component: HomeComponent} // à l'adresse localhost:4200/home composant homeomponent
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  declarations: []
})


export class RoutingModule { }
