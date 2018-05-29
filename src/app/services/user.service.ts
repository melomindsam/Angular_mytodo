import { Injectable } from '@angular/core';
import {User} from '../models/user'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { 

  }

  public makeUser() {
    //permet de récupérer les informations de l'utilisateur à partir du
    //local storage et d'en faire un objet user!
    let user : User;
    user = new User (JSON.parse(localStorage.getItem('user')));
    return user;
  }

  public saveUser (user:User) {
    return new Promise((resolve) =>{
      //convertir l'objet user en fichier JSON et le stocker dans le local storage
      localStorage.setItem('user', JSON.stringify(user));
      //message qui sera affiché si la promesse est tenue
      resolve({'message': 'Bienvenue dans ma ToDoList'});
    });
    
    
  }
}
