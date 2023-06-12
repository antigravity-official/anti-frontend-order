import React, {
  Fragment
} from 'react';
import OrderInfoLine from './row/OrderInfoLine'

type OrderInfoProps = {
  orderInfo:string[]
}

function OrderInfo({ orderInfo }: OrderInfoProps) {
  const nodes = orderInfo.map((
    line:string, index:number
  ) => <OrderInfoLine key={`line-${index}`} line={line} />);
  
  return (
    <Fragment>
      {nodes}
    </Fragment>
  )
}

export default OrderInfo;
