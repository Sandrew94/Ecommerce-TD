import * as React from "react";
import { useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCart,
  saveCartLocalStorage,
} from "../../store/actions/cartAction";
import { SingleItemType } from "../../store/reducer/cartSlice";

import {
  ButtonStyle,
  CartContainer,
  PriceTextStyle,
  ProductImage,
  ProductSection,
  QuantityContainer,
  TextQuantityStyle,
} from "./style/CartItem.style";

interface ICartItemProps {
  item: SingleItemType;
}

const CartItem: React.FunctionComponent<ICartItemProps> = ({ item }) => {
  const { name, image, price, quantity, totalPrice, brand, _id } = item;
  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    dispatch(removeFromCart(_id));
    dispatch(saveCartLocalStorage());
  };

  const handleAddItem = () => {
    dispatch(addToCart({ price, quantity, _id }));
    dispatch(saveCartLocalStorage());
  };

  return (
    <CartContainer>
      <ProductSection>
        <span>{name}</span>
        <ProductImage src={image} alt={brand} />
      </ProductSection>
      <div>
        <PriceTextStyle>{`$${price}`}</PriceTextStyle>
      </div>
      <div>
        <QuantityContainer>
          <ButtonStyle onClick={handleRemoveItem}>-</ButtonStyle>
          <TextQuantityStyle>{quantity}</TextQuantityStyle>
          <ButtonStyle onClick={handleAddItem}>+</ButtonStyle>
        </QuantityContainer>
      </div>
      <div>
        <div>
          <PriceTextStyle>{`$${Math.trunc(totalPrice)}`}</PriceTextStyle>
        </div>
      </div>
    </CartContainer>
  );
};

export default CartItem;
