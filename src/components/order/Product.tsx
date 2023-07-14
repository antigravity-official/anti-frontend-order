import React, { useEffect, useState } from "react";
import { ProductType } from "../../types/order";

type propTypes = {
    props: ProductType;
};

function Product({ props }: propTypes) {
    const { id, name, price, imageUrls, stock } = props;
    return (
        <div className="product-box" data-id={id}>
            <div className="thumbnail">
                <img src={imageUrls[0]} alt={`${name} 썸네일 사진`} />
            </div>
            <ul>
                <li>
                    <strong>상품명 :</strong>
                    <span>{name}</span>
                </li>
                <li>
                    <strong>가격 :</strong>
                    <span>{price}원</span>
                </li>
                <li>
                    <strong>주문정보 :</strong>
                    <span>
                        {stock.color}/{stock.band}/{stock.cup}/{stock.quantity}
                    </span>
                </li>
            </ul>
        </div>
    );
}

export default Product;
