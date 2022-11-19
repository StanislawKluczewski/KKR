import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Order } from '../../models/order.model';
import { OrderService } from '../../order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  title: string = "Lista zamówień";
  isLogged: boolean = false;
  token!: any;
  orders: Order[] = [];

  constructor(private orderSevice: OrderService, private authService: AuthService) { }

  ngOnInit(): void {
    this.getOrderList();

    this.token = this.authService.getToken();
    this.isLogged = this.authService.getAuthStatus(this.token);
  }

  getOrderList(): void {
    this.orderSevice.getOrders().subscribe(result => {
      this.orders = result.orderList;
    })
  }

  deleteOrder(orderName: string): void {
    console.log(orderName);
    this.orderSevice.deleteOrder(orderName).subscribe(result => {
      console.log(result);
    })
    this.getOrderList();
  }

}
