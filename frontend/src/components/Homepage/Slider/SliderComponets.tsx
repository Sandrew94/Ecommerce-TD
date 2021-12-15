import * as React from "react";
import {
  ImgLeft,
  ImgRight,
  WrapperBackgroud,
  WrapperLeftImg,
  WrapperRightImg,
  Text,
  RedText,
  TitleText,
  DescriptionText,
} from "../style/SliderComponents";
import lamp from "../../../../public/images/lampadario.png";
import { ButtonStyle } from "../../../styles-global/button";
import { useNavigate } from "react-router-dom";

interface ISliderComponentsProps {
  img: string;
  alt: string;
}

const SliderComponents: React.FunctionComponent<ISliderComponentsProps> = ({
  img,
  alt,
}) => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    return navigate("/products");
  };

  return (
    <WrapperBackgroud>
      <WrapperLeftImg>
        <ImgLeft src={lamp} alt="lamp" />
      </WrapperLeftImg>
      <Text>
        <RedText>Best Forniture For Your Castle....</RedText>
        <TitleText>New Forniture Collection Trends in 2021</TitleText>
        <DescriptionText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est
          adipiscing in phasellus non in justo.
        </DescriptionText>
        <ButtonStyle isActivePadding={false} onClick={handleRedirect}>
          Shop Now
        </ButtonStyle>
      </Text>
      <WrapperRightImg>
        <ImgRight src={img} alt={alt} />
      </WrapperRightImg>
    </WrapperBackgroud>
  );
};

export default SliderComponents;
