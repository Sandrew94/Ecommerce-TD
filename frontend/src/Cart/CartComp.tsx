import * as React from "react";
import {
  CartTitle,
  ContainerCartTotals,
  ContainerDivider,
  Wrapper,
} from "./style/CartComp.style";
import CartItem from "./CartItem";

interface ICartCompProps {}

const CartComp: React.FunctionComponent<ICartCompProps> = (props) => {
  return (
    <Wrapper>
      <ContainerDivider>
        <CartTitle>
          <h1>Product</h1>
          <h1>Price</h1>
          <h1>Quantity</h1>
          <h1>Total</h1>
        </CartTitle>
        <CartItem />
      </ContainerDivider>
      <ContainerCartTotals>
        <h1>Cart Totals</h1>
        <h2>Total: state</h2>
      </ContainerCartTotals>
    </Wrapper>
  );
};

export default CartComp;
