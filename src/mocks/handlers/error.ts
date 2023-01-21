import { rest } from 'msw';

const errorHandlers = [
  rest.all('/api/*', (req, res, ctx) => {
    return res(ctx.status(404));
  }),
];

export default errorHandlers;
