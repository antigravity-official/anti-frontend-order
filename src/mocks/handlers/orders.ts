import { rest } from 'msw';
import orderFixture from '../fixtures/order.json';

const ordersHandlers = [
  rest.get('/api/v1/orders', (req, res, ctx) => {
    return res(ctx.json([orderFixture]));
  }),
  rest.get('/api/v1/orders/:id', (req, res, ctx) => {
    const { id } = req.params;
    if (id === '100') {
      return res(ctx.json(orderFixture));
    }
    return res(ctx.status(404));
  }),
  // rest.post('/api/v1/orders', (req, res, ctx) => {}),
  // rest.patch('/api/v1/orders/:id', (req, res, ctx) => {}),
  // rest.get('/api/v1/orders/:id', (req, res, ctx) => {}),
];

export default ordersHandlers;
