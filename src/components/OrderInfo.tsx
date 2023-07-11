import { OrderProduct } from "../Models";

const OrderInfo = ({ order }: any) => {

    const renderProductList = () =>
        order.products.map((p: OrderProduct, index: number) => (
            <div key={index}>
                상품명: {p.name}
                <br />
                가격: {p.price}원
                <br />
                주문정보: {p.stock.color}/{p.stock.band}/{p.stock.cup}{" "}
                {p.stock.quantity}개
                <br />
                <br />
            </div>
        ));
        
    return (
        <div>
            주문번호: {order.id}
            <br />
            주문일: {order.orderAt}
            <br />
            총 결제금액: {order.amount}원
            <br />
            <br />
            ----------------------------
            <br />
            [상품목록]
            <br />
            <br />
            {renderProductList()}
            ----------------------------
            <br />
            [배송정보]
            <br />
            송장번호: {order.shipping.trackingNumber}
            <br />
            배송료: {order.shipping.shippingFee}원
            <br />
            주소: [{order.shipping.post}] {order.shipping.address}
            <br />
            메시지: {order.shipping.message}
        </div>
    );
};

export default OrderInfo;