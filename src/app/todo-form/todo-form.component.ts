import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { TodoService } from '../services/todo-service.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  private id: string
  private todo: any
  private create: boolean
  public todoForm: any

  constructor(private route: ActivatedRoute, private todoService: TodoService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.queryParams.id
    if(this.id) {
      this.getTodoData(this.id)
      this.create = false
    } else {
      this.create = true
    }

    this.todoForm = new FormGroup({
      title: new FormControl(''),
      text: new FormControl(''),
      date: new FormControl(''),
      done: new FormControl('')
    })
  }

  private getTodoData(id: string){
    this.todoService.getOne(id).then(res => res ? this.fillForm(res) : null)
  }

  public onSubmit(){
    if(this.create){
      this.createTodo()
    } else {
      this.editTodo()
    }
  }

  private createTodo(){
    let formValues = this.todoForm.value
    let todo = {
      title: formValues.title,
      text: formValues.text,
      done: formValues.done ? true : false,
      date: formValues.date
    }
    if(formValues.title && formValues.text && formValues.date)
    this.todoService.createTodo(todo)
  }

  private editTodo(){
    let formValues = this.todoForm.value
    let todo = {
      title: formValues.title,
      text: formValues.text,
      done: formValues.done ? true : false,
      date: formValues.date
    }
    if(formValues.title && formValues.text && formValues.date) {
      this.todoService.editTodo(this.id, todo)
    }
  }

  private fillForm(todo){
    this.todo = todo
    this.todoForm.setValue({
      title: todo.title,
      text: todo.text,
      done: todo.done,
      date: todo.date.substring(0,10)
    })
  }

}
