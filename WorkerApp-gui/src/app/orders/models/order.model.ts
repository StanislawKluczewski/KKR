import { Worker } from "src/app/workers/models/worker.model";

export interface OrderList {
  orderList: Order[]
}

export interface Order {
  name: string,
  principal: Worker,
  deadline: Date
}
