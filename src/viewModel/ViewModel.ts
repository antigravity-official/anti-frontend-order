import { fetchMyOrder } from '../api/fetchMyOrder';
import assetOrder from '../assets/order.json';

export interface ViewData {
  id: number;
  label: string;
  data: string | number | [];
}

export const parseOrder = async () => {
  const json = await fetchMyOrder(assetOrder);

  const jsonArray = Object.entries(json);

  const parseArray = (arr: object[]) => {
    return arr.forEach((obj) => parseObject(obj));
  };

  const parseObject = (obj: any) => {
    const entry = Object.entries(obj);

    return entry.map(([key, value], i) => ({
      id: i,
      label: key,
      data: value,
    }));
  };

  const primitiveData: ViewData[] = jsonArray
    .filter(([key, value]) => typeof value !== 'object')
    .map(([key, value], i) => {
      return {
        id: i,
        label: key,
        data: value,
      };
    });

  return [...primitiveData];
};
