import * as React from "react";
import {
  CartTitle,
  ContainerCartTotals,
  ContainerDivider,
  Wrapper,
} from "./style/CartComp.style";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

interface ICartCompProps {}

const CartComp: React.FunctionComponent<ICartCompProps> = (props) => {
  const { items, totalAmount, totalQuantity } = useSelector(
    (state: any) => state.cart
  );

  const cartData = items.map((item: any) => {
    const { _id } = item;
    return <CartItem key={_id} item={item} />;
  });

  return (
    <Wrapper>
      <ContainerDivider>
        <CartTitle>
          <h1>Product</h1>
          <h1>Price</h1>
          <h1>Quantity</h1>
          <h1>Total</h1>
        </CartTitle>
        {cartData}
      </ContainerDivider>
      <ContainerCartTotals>
        <h1>Cart Totals</h1>
        <h2>Total: $ {totalAmount}</h2>
        <h2>Total Quantity: {totalQuantity}</h2>
      </ContainerCartTotals>
    </Wrapper>
  );
};

export default CartComp;
