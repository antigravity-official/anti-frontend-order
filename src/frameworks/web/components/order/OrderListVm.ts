import {makeAutoObservable} from "mobx";

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

export const orderList = new OrderListVm();
