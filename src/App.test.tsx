import React from 'react';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import '@testing-library/jest-dom'

import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import assetOrder from './assets/order.json'

import {
  Order,
} from './Models';


describe('App Component', () => {
  let json:any;
  let parseOrder:((json:any) => Order)
  
  beforeEach(() => {
    json = assetOrder;
    parseOrder = (json) => {
      return {
        id: json.id,
        orderAt: new Date(json.orderAt),
        amount: json.amount,
        shippings: json.shippings
      } as Order
    };
    
  });
  
  const setup = () => {
    return render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
  
  it('App 컴포넌트를 랜더한다.', () => {
    const utils = setup();
    expect(utils.container).toBeInTheDocument();
  });

  describe('Progress Component', () => {
    it('화면을 랜더하면 Loading 을 보여준다.', async () => {
      setup();
      const loadingElement = screen.getByText(/Loading/i);
      expect(loadingElement).toBeInTheDocument();
    });

    it('Loading 이 끝나면 주문 내역을 보여준다.', async () => {
      setup();
      const loadingElement = screen.getByText(/Loading/i);
      waitForElementToBeRemoved(loadingElement).then(async () => {

        const orderElement = await screen.findByText(/주문번/i);
        expect(orderElement).toBeInTheDocument();
        
        const shippingsElement = await screen.findAllByText(/송장번호/i);
        expect(shippingsElement.length).toBeGreaterThan(0);

        const productsElement = await screen.findAllByText(/상품명/i);
        expect(productsElement.length).toBeGreaterThan(0);
        
      })
    });
  });
  

  describe('Order', () => {
    it('json을 Order로 파싱한다.', () => {
        const order: Order = parseOrder(json);
        expect(order).toMatchObject({
          id: expect.any(Number),
          orderAt: expect.any(Date),
          amount: expect.any(Number),
          shippings: expect.any(Array)
        });
    });
    
    it('Order 내 여러개의 배송정보들(Shipping[])이 있다.', () => {
      const order: Order = parseOrder(json);
      expect(order.shippings.length).toBeGreaterThan(0);
      expect(order.shippings[0]).toMatchObject({
        id: expect.any(Number),
        trackingNumber: expect.any(String),
        shippingFee: expect.any(Number),
        address: expect.any(String),
        post: expect.any(String),
        message: expect.any(String),
        products: expect.any(Array),
      });
    });
    
    it('하나의 배송정보 안에 상품 목록(Products[])이 들어있다.', () => {
      const order: Order = parseOrder(json);
      expect(order.shippings[0].products.length).toBeGreaterThan(0);
      expect(order.shippings[0].products[0]).toMatchObject({
        id: expect.any(Number),
        name: expect.any(String),
        price: expect.any(Number),
        imageUrls: expect.any(Array),
        stock: expect.any(Object),
      });
    });

  });

}); 
