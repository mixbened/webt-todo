import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { TodoFormComponent } from './todo-form/todo-form.component';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';

const routes: Routes = [
    { path: '', component: TodoListComponent },
    { path: 'edit', component: TodoFormComponent }
]; 


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }