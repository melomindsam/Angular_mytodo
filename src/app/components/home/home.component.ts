import { Component, OnInit } from '@angular/core';
import { ToastrService} from 'ngx-toastr';
import {Task} from '../../models/task';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';





@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private task : Task;
  public taskForm : FormGroup;
  constructor(private toastr : ToastrService, private builder : FormBuilder, private httpClient : HttpClient) {
    this.showSuccess();
   }
  showSuccess() {
    this.toastr.success('Compte crée!', 'Félicitations!');
  }
  

  ngOnInit() {
    this.taskForm = this.builder.group({
      task:['', Validators.required],
      debut:['', Validators.required],
      fin : ['', Validators.required]
    }) 
  }

  public onFormSubmit(): void {
    console.log(this.taskForm.value);
    if(this.taskForm.valid) {
      this.httpClient.post(
        'http://localhost:3000/Todos',
        this.taskForm.value
      ).subscribe((datas:any)=>{

    });
    }else{

    }
  }

}
