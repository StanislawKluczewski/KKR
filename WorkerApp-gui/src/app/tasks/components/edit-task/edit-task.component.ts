import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Worker } from 'src/app/workers/models/worker.model';
import { Task } from '../../models/task.model';
import { TaskService } from '../../task.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit {

  searchName!: string;
  task!: Task;
  newTask!: FormGroup;
  workers: Worker[] = [];

  constructor(private taskService: TaskService, private activatedRoute: ActivatedRoute, private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.newTask = this.formBuilder.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      workerResponsible: ['', Validators.required],
      dateOfRegistration: ['', [Validators.required]]
    });

    this.activatedRoute.params
      .subscribe(params => {
        this.searchName = params['name'];
      });

    this.taskService.getTask(this.searchName)
      .subscribe(result => {
        this.task = result;
        this.newTask.patchValue(result);
        console.log(this.newTask.value);
      })

    this.taskService.getWorkerList()
      .subscribe(result => {
        this.workers = result.workerList
      });
  }

  editTask(task: FormGroup, taskName: string): void {
    this.taskService.editTask(taskName, task.value).subscribe();
    this.router.navigateByUrl('/tasks');
  }
}
