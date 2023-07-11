import { useEffect, useState } from 'react';
import './App.css';
import { Order } from './Models';
import assetOrder from './assets/order.json';

// utils
import { fetchMyOrder, parseOrder } from './utils/utils';

// components
import OrderInfo from './components/OrderInfo';

function App() {
    const [isLoading, setLoading] = useState(false);
    const [order, setOrder] = useState<Order | null>(null);

    useEffect(() => {
        loadOrder();

        // 콘솔창에 eslint warning이 없애기 위해 추가
        // eslint-disable-next-line
    }, []);
    

    // useEffecth 내부 코드를 loadOrder로 분리, async/await를 사용하여 비동기 처리
    const loadOrder = async () => {
        showProgress();
        const json = await fetchMyOrder(assetOrder);
        const order = await parseOrder(json);
        hideProgress();
        setOrder(order);
    };

    const showProgress = () => setLoading(true);
    const hideProgress = () => setLoading(false);

    return (
        <div>
            {isLoading && <div>Loading...</div>}
            {order && <OrderInfo order={order} />}
        </div>
    );
}

export default App;