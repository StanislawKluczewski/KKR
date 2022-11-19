import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Order } from '../../models/order.model';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../../order.service';
import { WorkerService } from 'src/app/workers/worker.service';
import { Worker } from 'src/app/workers/models/worker.model';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.scss']
})
export class EditOrderComponent implements OnInit {

  searchOrderName: string = '';
  searchOrder!: Order;
  editOrder!: FormGroup;
  workers!: Worker[];

  constructor(private acitvateRoute: ActivatedRoute, private formBuilder: FormBuilder,
    private orderService: OrderService, private workerService: WorkerService, private router: Router) { }

  ngOnInit(): void {

    this.editOrder = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      principal: new FormControl('', Validators.required),
      deadline: new FormControl('', Validators.required)
    })

    this.acitvateRoute.params.subscribe(params => {
      this.searchOrderName = params['name'];
    })

    this.orderService.getOrder(this.searchOrderName).subscribe(result => {
      this.searchOrder = result;
      this.editOrder.patchValue(result);
      console.log(result);
    })

    this.workerService.getWorkerList().subscribe(result => {
      this.workers = result.workerList;
    })

  }
  updateOrder(order: FormGroup, orderName: string): void {
    this.orderService.editOrder(order.value, orderName).subscribe(result => {
      console.log(result);
    })
    this.router.navigateByUrl('/orders');
  }
}
