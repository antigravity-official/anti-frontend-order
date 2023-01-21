import RootLayout from '@/layouts/RootLayout';
import Error404Page from '@/pages/Error404';
import HomePage from '@/pages/Home';
import OrdersPage from '@/pages/Orders';
import { Route } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Route element={<RootLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/orders" element={<OrdersPage />} />
      </Route>
      <Route path="*" element={<Error404Page />} />
      {/* Enable to add another path below here; Nested paths are allowed*/}
    </>
  );
}
