export type OrderData = {
    id: number;
    orderAt: string;
    amount: number;
    products: Array<ProductType>;
    shipping: ShippingType;
    shippings?: ShippingType & Array<ProductType>;
};

export type ProductType = {
    id: number;
    name: string;
    price: number;
    imageUrls: string[];
    stock: StockType;
};

export type ShippingType = {
    id: number;
    trackingNumber: string;
    shippingFee: number;
    address: string;
    post: string;
    message: string;
};

export type StockType = {
    color: string;
    band: string;
    cup: string;
    quantity: number;
};
