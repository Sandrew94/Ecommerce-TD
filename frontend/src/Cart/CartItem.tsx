import * as React from "react";
import test from "../assets/images/playstation.jpg";
import { CartContainer, ProductImage } from "./style/CartItem.style";

interface ICartItemProps {}

const CartItem: React.FunctionComponent<ICartItemProps> = (props) => {
  return (
    <CartContainer>
      <div>
        <ProductImage src={test} alt="demoImage" />
      </div>
      <div>
        <h1>$100</h1>
      </div>
      <div>
        <div>
          <button>+</button>
          <span>State</span>
          <button>-</button>
        </div>
      </div>
      <div>
        <div>
          <h2>Price: $state</h2>
        </div>
      </div>
    </CartContainer>
  );
};

export default CartItem;
