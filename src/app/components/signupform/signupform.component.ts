import { Component, OnInit } from '@angular/core';
import {Civilite} from "../../models/civilite";
import {User} from "../../models/user";
import {FormControl, FormGroup, Validators,} from '@angular/forms';
import { UserService } from '../../services/user.service';
import {Router} from '@angular/router'
//import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-signupform',
  templateUrl: './signupform.component.html',
  styleUrls: ['./signupform.component.scss']
})
export class SignupformComponent implements OnInit {
  
  public civilite: Civilite[]; //tableau des civilités à afficher dans le formulaire
  private user: User; //instance du modèle user
  public signUpForm : FormGroup; //instance du modèle 
 // public home : HomeComponent;


  constructor(private userService: UserService, private router: Router) { 
    this.civilite= new Array;
    this.civilite.push({ id: 1, libelle: "Mademoiselle"});
    this.civilite.push({id: 2, libelle: "Madame"});
    this.civilite.push({id: 3, libelle: "Monsieur"});
  }

  public get nom() {
    return this.signUpForm.controls.nom
  }
  public get prenom() {
    return this.signUpForm.controls.prenom
  }
  public get email() {
    return this.signUpForm.controls.email
  }

  public get password() {
    return this.signUpForm.controls.password
  }
  
    public onFormSubmit() : void{
      
      if (this.signUpForm.valid) {
        this.user = new User(this.signUpForm.value)//création d'un objet user lorsqu'on crée un compte
        console.log("Le formulaire est valide! " + JSON.stringify(this.signUpForm.value));
        this.userService.saveUser(this.user).then((datas) => {
            //traitement terminé
            this.router.navigate(['home']);
        });
        
        console.log(this.user)
        
      }
      else {
        console.log("Try again");
      }
    }
  
  ngOnInit() {
    this.signUpForm = new FormGroup({ //on définit comment va se comporter le formulaire
      nom:new FormControl('', Validators.required), //le champs "nom" doit être rempli
      prenom:new FormControl('', Validators.required),
      email:new FormControl('', [Validators.required, Validators.email]), 
      password:new FormControl('', Validators.required,),
      civilite:new FormControl('', Validators.required),
      cgu:new FormControl('', Validators.required)
    });
  }

}
