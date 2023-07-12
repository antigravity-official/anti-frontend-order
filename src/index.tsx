import ReactDOM from 'react-dom/client';
import App from './App';
import { OrderProvider } from './context/OrderProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <OrderProvider>
    <App />
  </OrderProvider>
);
