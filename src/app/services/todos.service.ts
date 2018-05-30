import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Task } from '../models/task';


@Injectable({
  providedIn: 'root'
})
export class TodosService {
private _todos: Subject<Task> = new Subject<Task>();
  constructor() { 

  }
  
}

