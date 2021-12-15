import * as React from "react";
import { CartIconPosition, IconInteractive } from "../../style/Items.style";
import cartIcon from "../../../../../public/images/icons/cart-icon.svg";
import heartIcon from "../../../../../public/images/icons/heart-icon.svg";
import increaseImage from "../../../../../public/images/icons/increase-image.svg";

interface IIconsCartsProps {
  handleAddToCart: () => void;
}

const IconsCarts: React.FunctionComponent<IIconsCartsProps> = ({
  handleAddToCart,
}) => {
  return (
    <CartIconPosition>
      <IconInteractive src={cartIcon} alt="cart" onClick={handleAddToCart} />
      <IconInteractive src={heartIcon} alt="wishlist" />
      <IconInteractive src={increaseImage} alt="biggerimage" />
    </CartIconPosition>
  );
};

export default IconsCarts;
