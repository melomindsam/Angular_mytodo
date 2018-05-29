import { Injectable } from '@angular/core';
import {UserService} from '../services/user.service';
import {Router, CanActivate} from '@angular/router' 


@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate{

  constructor(private userService: UserService, private router: Router) {

   }

   public canActivate(): boolean { //cette méthode permet ou refuse la poursuite de la navigation
     let user = this.userService.makeUser();
     if (user.hasOwnProperty('nom')) { //vérifie si l'utilisateur a été créé
        this.router.navigate(['home']); //si oui redirection vers home (la page d'acceuil)
        return true;
     }
     
     return false;
        
   }
}
