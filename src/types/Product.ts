import Stock from '@/types/Stock';

type Product = {
  id: number;
  name: string;
  price: number;
  imageUrls: string[];
  stock: Stock;
};

export default Product;
