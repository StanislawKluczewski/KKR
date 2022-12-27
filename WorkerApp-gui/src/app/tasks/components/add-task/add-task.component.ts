import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Worker } from 'src/app/workers/models/worker.model';
import { TaskService } from '../../task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  title: string = 'Dodaj zadanie';
  workers: Worker[] = [];
  newTask = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    workerResponsible: new FormControl('', Validators.required),
    dateOfRegistration: new FormControl('', Validators.required)
  });

  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit(): void {
    this.taskService.getWorkerList()
      .subscribe(result => {
        this.workers = result.workerList
      })

  }

  addTask(newTask: FormGroup): void {
    this.taskService.addTask(newTask.value)
      .subscribe(result => {
        console.log(result);
        this.router.navigateByUrl('/tasks');
      })
  }
}
