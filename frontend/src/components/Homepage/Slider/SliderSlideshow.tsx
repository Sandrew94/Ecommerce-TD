import * as React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import sofa from "../../../../public/images/sofa.png";
import sofa_big from "../../../../public/images/sofa_big.png";
import santa from "../../../../public/images/santa.png";
import squareActive from "../../../../public/images/square_active.png";
import squareDeactivated from "../../../../public/images/square_deactivated.png";
import SliderComponents from "./SliderComponets";
import { SquareImgBool } from "../style/SliderComponents";
import "../style/styleDotsSlider.css";

const items = [
  <SliderComponents img={sofa_big} data-value="1" alt="sofa_big" />,
  <SliderComponents img={sofa} data-value="2" alt="armadio" />,
  <SliderComponents img={santa} data-value="3" alt="santa" />,
];

const SliderSlidershow: React.FunctionComponent = () => {
  const renderDotsItem = ({ isActive }: { isActive: boolean }) => {
    return isActive ? (
      <SquareImgBool src={squareActive} alt="rectangle-slider-active" />
    ) : (
      <SquareImgBool
        src={squareDeactivated}
        alt="rectangle-slider-deactivated"
      />
    );
  };
  return (
    <AliceCarousel
      animationType="slide"
      animationDuration={800}
      disableButtonsControls
      renderDotsItem={renderDotsItem}
      infinite
      items={items}
      mouseTracking
      autoPlay
      autoPlayStrategy="all"
      autoPlayInterval={3000}
    />
  );
};

export default SliderSlidershow;
