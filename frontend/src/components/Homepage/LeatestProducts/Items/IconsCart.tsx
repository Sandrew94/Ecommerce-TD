import * as React from "react";
import { CartIconPosition, IconInteractive } from "../../style/Items.style";
import cartIcon from "../../../../assets/images/icons/cart-icon.svg";
import heartIcon from "../../../../assets/images/icons/heart-icon.svg";
import increaseImage from "../../../../assets/images/icons/increase-image.svg";

interface IIconsCartsProps {}

const IconsCarts: React.FunctionComponent<IIconsCartsProps> = (props) => {
  return (
    <CartIconPosition>
      <IconInteractive src={cartIcon} alt="cart" />
      <IconInteractive src={heartIcon} alt="wishlist" />
      <IconInteractive src={increaseImage} alt="biggerimage" />
    </CartIconPosition>
  );
};

export default IconsCarts;
