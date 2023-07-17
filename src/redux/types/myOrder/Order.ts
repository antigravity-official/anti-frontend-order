import { Shipping } from './Shipping';

export interface Order {
  id: number;
  /** dummy 데이터는 문자열로 저장되어 있음 */
  orderAt: string;
  /** TODO : 서버로부터 데이터를 받아올 때 사용 */
  // orderAt: Date;
  amount: number;
  shippings: Shipping[];
}
