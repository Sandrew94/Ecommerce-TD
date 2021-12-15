import * as React from "react";
import { ProductsType, SingleProductsType } from "./Products.type";
import { v4 as uuidv4 } from "uuid";
import {
  ImgProduct,
  TextActualPrice,
  TextName,
  TextPreviousPrice,
  WrapperItems,
  WrapperSingleItem,
  WrapperTextProduct,
} from "../../style/Items.style";
import { useNavigate } from "react-router-dom";

import IconsCarts from "./IconsCarts";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../../../store/actions/cartAction";

interface IItemsProps {
  products: ProductsType;
}

const Items: React.FunctionComponent<IItemsProps> = ({ products }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const state = useSelector((state: any) => state.cart);
  console.log(state); //ONLY FOR TESTING PURPOSE

  const handleRedirectSingleProduct = (_id: string): void => {
    navigate(`/products/${_id}`);
  };

  const itemUI = products.map((item: SingleProductsType) => {
    const { name, price, _id, image, brand } = item;

    const handleAddToCart = () => {
      dispatch(addToCart({ name, price, _id, image, brand }));
    };

    return (
      <WrapperSingleItem key={uuidv4()} id={_id}>
        <IconsCarts handleAddToCart={handleAddToCart} />

        <ImgProduct
          src={`${image}`}
          alt={name}
          onClick={() => handleRedirectSingleProduct(_id)}
        />
        <WrapperTextProduct>
          <TextName>{name}</TextName>
          <div>
            <TextActualPrice>$ {price}</TextActualPrice>
            <TextPreviousPrice>
              $ {Math.trunc((price * 20) / 100 + price)}.00
            </TextPreviousPrice>
          </div>
        </WrapperTextProduct>
      </WrapperSingleItem>
    );
  });

  return <WrapperItems>{itemUI}</WrapperItems>;
};

export default Items;
