import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router'
import { SignupformComponent } from '../../components/signupform/signupform.component';
import { HomeComponent } from '../../components/home/home.component';
import {AuthguardService} from '../../services/authguard.service'

const routes : Routes = [
  {path:'', redirectTo: 'signup', pathMatch: 'full'}, // à l'adresse localhost (path = '') et cette
  // page redirige sur l'adresse localhost:4200/signup
  
  {path:'signup', component: SignupformComponent}, // à l'adresse localhost:4200/signup sera affichée le composant
  //signUpForm et exécution de AuthGuardService donc vérification de la création de compte
  {path: 'home', component: HomeComponent }  //à l'adresse localhost:4200/home 
  //composant homeComponent et exécution de AuthGuardService donc vérification de la création de compte
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  declarations: []
})


export class RoutingModule { }
