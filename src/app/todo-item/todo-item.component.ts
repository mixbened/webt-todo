import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from '../services/todo-service.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: any

  constructor(private router: Router, private todoService: TodoService) { }

  ngOnInit(): void {
    this.todo.date = new Date(this.todo.date)
  }

  public deleteTodo(): void {
    const id = this.todo._id
    this.todoService.deleteTodo(id)
  }

  public editTodo(): void {
    const id = this.todo._id
    this.router.navigate(['/edit'], {queryParams: {id}})
  }

  public checkTodo(val: boolean): void {
    const id = this.todo._id
    this.todo.done = !this.todo.done
    this.todoService.editTodo(id, this.todo)
  }

}
