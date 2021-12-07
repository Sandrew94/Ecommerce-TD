import * as React from "react";
import LeatestProducts from "./LeatestProducts/LeatestProducts";
import SliderSlideshow from "./Slider/SliderSlideshow";

interface IHomepageCompProps {}

const HomepageComp: React.FunctionComponent<IHomepageCompProps> = (props) => {
  return (
    <>
      <SliderSlideshow />
      <LeatestProducts />
    </>
  );
};

export default HomepageComp;
