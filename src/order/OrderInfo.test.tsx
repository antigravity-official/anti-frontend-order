import React from 'react';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import '@testing-library/jest-dom'
import OrderInfo from './OrderInfo';
import { printOrder } from './printer';
import { Order } from '../Models';
import assetOrder from '../assets/order.json';


describe('<OrderInfo />', () => {
  
  it('스냅샷과 일치하는지 확인한다.', () => {
    const json = assetOrder
    const order: Order = {
      id: json.id,
      orderAt: new Date(json.orderAt),
      amount: json.amount,
      shippings: json.shippings
    }
    const orderInfo = printOrder(order)
    const utils = render(<OrderInfo orderInfo={orderInfo} />);
    expect(utils.container).toMatchSnapshot();
  })
})