import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo-service.service'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  // fields specified in component classes are available in according html
  title = 'Organice Your TODOs';
  response_array = [];

  constructor(private todo: TodoService) {}

  ngOnInit(){
    this.todo.todos$.subscribe(val => {
      if(val) this.response_array = val
    })
    this.todo.getTodos()
  }
}
