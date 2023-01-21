import { rest } from 'msw';
import orderFixture from '../fixtures/order.json';

const orderProductsHandlers = [
  rest.get('/api/v1/orders/:orderId/products', (req, res, ctx) => {
    const { orderId } = req.params;
    if (orderId === '100') {
      return res(ctx.json(orderFixture.products));
    }
    return res(ctx.status(404));
  }),
];

export default orderProductsHandlers;
