import {makeAutoObservable} from "mobx";
import di from '@di';
import {OrderDto} from "@domains/dto/OrderDto";

class OrderListVm {
  private _orderList: Array<OrderDto>;

  private constructor() {
    this._orderList = Array<OrderDto>();
    makeAutoObservable(this);
  }

  private static instance: OrderListVm;

  public static getInstance() {
    if(!OrderListVm.instance) {
      this.instance = new OrderListVm();
    }
    return OrderListVm.instance;
  }

  get orderList(): Array<OrderDto> {
    return this._orderList;
  }

  async getOrderList() {
     di.orderList.getOrderList()
      .then(list => {
        this._orderList = list;
      })
      .catch(e => {
        alert('error!' + e);
      })
  }
}

export const orderListVm = OrderListVm.getInstance();
