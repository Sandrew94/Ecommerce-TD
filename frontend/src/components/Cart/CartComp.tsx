import * as React from "react";
import {
  CartTitle,
  ContainerCartTotals,
  ContainerDivider,
  TitleSections,
  Wrapper,
} from "./style/CartComp.style";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { getTotalAmount, SingleItemType } from "../../store/reducer/cartSlice";
import { RootState } from "../../store";

const CartComp: React.FunctionComponent = () => {
  const { items, totalQuantity } = useSelector(
    (state: RootState) => state.cart
  );

  const totalItemPrice = useSelector(getTotalAmount);

  const cartData = items.map((item: SingleItemType) => {
    const { _id } = item;
    return <CartItem key={_id} item={item} />;
  });

  return (
    <Wrapper>
      <ContainerDivider>
        <CartTitle>
          <TitleSections>Product</TitleSections>
          <TitleSections>Price</TitleSections>
          <TitleSections>Quantity</TitleSections>
          <TitleSections>Total</TitleSections>
        </CartTitle>
        {cartData}
      </ContainerDivider>
      <ContainerCartTotals>
        <TitleSections>Cart Totals</TitleSections>
        <h2>Total: $ {totalItemPrice}</h2>
        <h2>Total Quantity: {totalQuantity}</h2>
      </ContainerCartTotals>
    </Wrapper>
  );
};

export default CartComp;
