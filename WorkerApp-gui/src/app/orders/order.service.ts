import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Order, OrderList } from "./models/order.model";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor(private http: HttpClient) { }

  addOrder(order: Order): Observable<void> {
    return this.http.post<void>(environment.url + '/orders/add-order', order);
  }

  getOrders(): Observable<OrderList> {
    return this.http.get<OrderList>(environment.url + '/orders');
  }

  getOrder(orderName: string): Observable<Order> {
    return this.http.get<Order>(environment.url + '/orders/' + orderName);
  }

  editOrder(order: Order, orderName: string): Observable<void> {
    return this.http.put<void>(environment.url + '/orders/edit-order/' + orderName, order);
  }

  deleteOrder(orderName: string): Observable<void> {
    return this.http.delete<void>(environment.url + '/orders/delete-order/' + orderName);
  }
}
