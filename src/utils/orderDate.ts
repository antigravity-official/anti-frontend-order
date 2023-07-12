import { format } from "date-fns";

const orderDate = (date: string) => {
  const newOrderDate = format(new Date(date), `yyyy년 MM월 dd일 HH시 mm분`);
  return newOrderDate;
};

export { orderDate };
