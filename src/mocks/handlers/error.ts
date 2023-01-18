import { rest } from 'msw';

const errorHandlers = [
  rest.all('*', (req, res, ctx) => {
    return res(ctx.status(404));
  }),
];

export default errorHandlers;
