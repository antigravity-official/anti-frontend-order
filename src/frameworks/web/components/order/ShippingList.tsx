import * as React from 'react';
import ShippingItem, {ShippingItemInfo} from "@frameworks/web/components/order/ShippingItem";

interface ShippingListProps {
  shippingItemList: Array<ShippingItemInfo>;
}

const ShippingList: React.FC<ShippingListProps> = ({ shippingItemList }: ShippingListProps) => {
  // @ts-ignore
  return (
    <div>
      { shippingItemList &&
        shippingItemList.map((item, index) => {
          const itemInfo: ShippingItemInfo = {
            address: item.address,
            message: item.message,
            post: item.post,
            shippingFee: item.shippingFee,
            trackingNumber: item.trackingNumber,
            orderProductList: item.orderProductList
          };

          return (
            <ShippingItem
              key={index}
              address={itemInfo.address}
              message={itemInfo.message}
              post={itemInfo.message}
              shippingFee={itemInfo.shippingFee}
              trackingNumber={itemInfo.trackingNumber}
              orderProductList={itemInfo.orderProductList}
            />
          );
        })
      }
    </div>
  )
}

export default ShippingList;
