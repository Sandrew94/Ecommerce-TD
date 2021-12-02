import * as React from "react";
import SliderSlideshow from "./Slider/SliderSlideshow";

interface IHomepageCompProps {}

const HomepageComp: React.FunctionComponent<IHomepageCompProps> = (props) => {
  return (
    <>
      <SliderSlideshow />
      Products comp
    </>
  );
};

export default HomepageComp;
