import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  public todos$: BehaviorSubject<any>
  private todoSub: Subscription

  constructor(private http: HttpClient, private router: Router) { 
    this.todos$ = new BehaviorSubject(null)
  }

  public async getTodos() {
    this.http.get('/backend/todos/all').subscribe(val => {
      this.setTodos(val)
    })
  }

  public getOne(id: string){
    const url = '/backend/todos/' + id
    return this.http.get(url).toPromise()
  }

  public async createTodo(todo){
    this.http.post('/backend/todos/create', todo).toPromise().then(res => {
      if(res) { 
        this.getTodos()
        this.router.navigate(['/'])
      }
    }).catch(err => console.log('Error in creating Todo ', err))
  }

  public async editTodo(id: string, todo: any){
    this.http.post('/backend/todos/edit/' + id, todo).toPromise().then(res => {
      if(res) { 
        this.getTodos()
        this.router.navigate(['/'])
      }
    }).catch(err => console.log('Error in editing Todo ', err))
  }

  public async deleteTodo(id: string){
    const url = '/backend/todos/delete/' + id
    console.log('delete todo: ', url)
    this.http.get(url).toPromise().then(res => {
      if(res) this.getTodos()
    }).catch(err => console.log('Error in deleting Todo ', err))
  }

  private setTodos(todos: any): void {
    this.todos$.next(todos)
  }

}
