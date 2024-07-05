import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodolistComponent } from './todolist/todolist.component';
import { CommonModule } from '@angular/common';

export const routes: Routes = [
    { path: 'todolist', component: TodolistComponent },
    { path: '', redirectTo: '/todolist', pathMatch: 'full'} 
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule,CommonModule,]
  })
  export class AppRoutingModule { }