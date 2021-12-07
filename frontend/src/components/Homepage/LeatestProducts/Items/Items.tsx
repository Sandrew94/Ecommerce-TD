import * as React from "react";
import { ProductsType, SingleProductsType } from "./Products.type";
import { v4 as uuidv4 } from "uuid";
import mouse from "../../../../assets/images/mouse.jpg";
import {
  ImgProduct,
  TextActualPrice,
  TextName,
  TextPreviousPrice,
  WrapperItems,
  WrapperSingleItem,
  WrapperTextProduct,
} from "../../style/Items.style";

import IconsCarts from "./IconsCart";

interface IItemsProps {
  products: ProductsType;
}

const Items: React.FunctionComponent<IItemsProps> = ({ products }) => {
  const itemUI = products.map((item: SingleProductsType, idx: number) => {
    const { name, price, _id } = item;

    return (
      <WrapperSingleItem key={uuidv4()} id={_id}>
        <IconsCarts />
        <ImgProduct src={mouse} alt={name} />
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
