import { useOrder } from './context/OrderProvider';
import { OrderView } from './components/OrderView';
import { ProductsView } from './components/ProductsView';
import { ShippingView } from './components/ShippingView';

function App() {
  const { isLoading } = useOrder();

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          [주문정보]
          <OrderView />
          ---------------------------- <br />
          [상품목록]
          <ProductsView />
          ---------------------------- <br />
          [배송정보]
          <ShippingView />
        </>
      )}
    </>
  );
}

export default App;
