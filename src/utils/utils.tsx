import { Order } from '../Models';

const fetchMyOrder = (assetOrder: any): Promise<object> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(assetOrder);
        }, 1000);
    });
};

const parseOrder = (json: any): Promise<Order> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const order: Order = {
                id: json.id,
                orderAt: json.orderAt,
                amount: json.amount,
                products: json.products,
                shipping: json.shipping,
            };
            resolve(order);
        }, 500);
    });
};

export { fetchMyOrder, parseOrder };