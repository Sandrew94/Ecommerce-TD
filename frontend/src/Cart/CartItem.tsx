import * as React from "react";

import { CartContainer, ProductImage } from "./style/CartItem.style";

interface ICartItemProps {
  item: any;
}

const CartItem: React.FunctionComponent<ICartItemProps> = ({ item }) => {
  const { name, image, price, quantity, totalPrice, brand } = item;

  return (
    <CartContainer>
      <div>
        <span>{name}</span>
        <ProductImage src={image} alt={brand} />
      </div>
      <div>
        <h1>$ {price}</h1>
      </div>
      <div>
        <div>
          <button>+</button>
          <span>{quantity}</span>
          <button>-</button>
        </div>
      </div>
      <div>
        <div>
          <h2> $ {Math.trunc(totalPrice)}</h2>
        </div>
      </div>
    </CartContainer>
  );
};

export default CartItem;
