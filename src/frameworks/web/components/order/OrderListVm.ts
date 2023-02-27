import {makeAutoObservable} from "mobx";
import di from '@di';
import {OrderDto} from "@domains/dto/OrderDto";

class OrderListVm {
  private _orderList: Array<OrderDto>;

  constructor() {
    makeAutoObservable(this);
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

export const orderListVm = new OrderListVm();
