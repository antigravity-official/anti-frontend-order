import Product from '@/types/Product';

type OrderProduct = Pick<Product, keyof Product>;

export default OrderProduct;
