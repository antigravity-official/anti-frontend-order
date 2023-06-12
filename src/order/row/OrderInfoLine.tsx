import React, {
  Fragment
} from 'react';

type OrderInfoLineProps = {
  line: string,
}

function OrderInfoLine({ line }: OrderInfoLineProps) {
  return (
    <Fragment>
    {line === '' ? (
      <br />
    ) : (
      <div>{line}</div>
    )}
    </Fragment>
  )
}

export default OrderInfoLine;
