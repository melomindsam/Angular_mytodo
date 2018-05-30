
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Subscription} from 'rxjs';
import {TodosService} from '../../services/todos.service';


@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {
  public todos : any [];
  public sTodo : Subscription;
  constructor(private http: HttpClient, private todoService: TodosService) { 
    this.http.get<any>('http://localhost:3000/Todos').subscribe((datas)=>{

      this.todos = datas;
  
      });
  }

  ngOnInit() {
      

    }
}