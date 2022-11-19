import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { WorkerService } from 'src/app/workers/worker.service';
import { OrderService } from '../../order.service';
import { Worker } from 'src/app/workers/models/worker.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.scss']
})
export class AddOrderComponent implements OnInit {

  title: string = 'Dodaj zamówienie';
  workers: Worker[] = [];
  newOrder = new FormGroup({
    name: new FormControl('', Validators.required),
    principal: new FormControl('', Validators.required),
    deadline: new FormControl('', Validators.required)
  });

  constructor(private orderService: OrderService, private workerService: WorkerService,
    private router: Router) { }


  ngOnInit(): void {
    this.workerService.getWorkerList().subscribe(result => {
      this.workers = result.workerList
    })
  }

  addOrder(order: FormGroup): void {
    this.orderService.addOrder(order.value).subscribe(result => {
      console.log(result)
      this.router.navigateByUrl('/orders');
    })
  }

}
