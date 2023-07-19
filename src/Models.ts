export interface Order {
  id: number;
  orderAt: Date;
  amount: number;
  shippings: Shipping[];
}

export interface OrderProduct {
  id: number;
  name: string;
  price: number;
  imageUrls: string[];
  stock: Stock;
}

export interface Stock {
  color: string;
  band: string;
  cup: string;
  quantity: number;
}

export interface Shipping {
  id: number;
  trackingNumber: string;
  shippingFee: number;
  address: string;
  post: string;
  message: string;
  products: OrderProduct[];
}

export const parseOrder = (json: any, onCompleted: (order: Order) => void) => {
  setTimeout(() => {
    const order: Order = {
      id: json.id,
      orderAt: new Date(json.orderAt),
      amount: json.amount,
      shippings: json.shippings.map((shipping: any) => {
        return {
          id: shipping.id,
          trackingNumber: shipping.trackingNumber,
          shippingFee: shipping.shippingFee,
          address: shipping.address,
          post: shipping.post,
          message: shipping.message,
          products: shipping.products.map((product: any) => {
            return {
              id: product.id,
              name: product.name,
              price: product.price,
              imageUrls: product.imageUrls,
              stock: {
                color: product.stock.color,
                band: product.stock.band,
                cup: product.stock.cup,
                quantity: product.stock.quantity,
              },
            };
          }),
        };
      }),
    };
    onCompleted(order);
  }, 500);
};
