import { NgModule } from "@angular/core";
import { TaskListComponent } from "./components/task-list/task-list.component";
import { AddTaskComponent } from "./components/add-task/add-task.component";
import { EditTaskComponent } from "./components/edit-task/edit-task.component";
import { TableModule } from 'primeng/table';
import { RouterModule } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DropdownModule } from 'primeng/dropdown';


@NgModule({
  declarations: [
    TaskListComponent,
    AddTaskComponent,
    EditTaskComponent
  ],
  imports: [
    RouterModule,
    TableModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    DropdownModule
  ],
  exports: []

})
export class TaskModule { }
