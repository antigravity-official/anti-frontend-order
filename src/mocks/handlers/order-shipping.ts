import { rest } from 'msw';
import orderFixture from '../fixtures/order.json';

const orderShippingHandlers = [
  rest.get('/api/v1/orders/:orderId/shippings', (req, res, ctx) => {
    const { orderId } = req.params;
    if (orderId === '100') {
      return res(ctx.json(orderFixture.shippings));
    }
    return res(ctx.status(404));
  }),
];

export default orderShippingHandlers;
