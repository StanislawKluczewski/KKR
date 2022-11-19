import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../task.service';
import { AuthService } from 'src/app/auth/auth.service';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  constructor(private taskService: TaskService, private authService: AuthService) { }

  taskList!: Task[];
  title: string = 'Lista zadań';
  workers: Worker[] = [];
  isLogged!: boolean;
  token!: any;
  orderWay: boolean = true;
  sortedTaskList!: Task[]

  ngOnInit(): void {
    this.getTaskList();
    this.token = this.authService.getToken();
    this.isLogged = this.authService.getAuthStatus(this.token);
  }

  deleteTask(taskName: string): void {
    this.taskService.deleteTask(taskName)
      .subscribe(result => {
        console.log(result);
        this.getTaskList();
      })
  }

  getTaskList(): void {
    this.taskService.getTaskList()
      .subscribe(result => {
        this.taskList = result.taskList;
      })
  }
}
