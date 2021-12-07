import * as React from "react";
import { useParams } from "react-router-dom";

interface ISingleProductsCompProps {}

const SingleProductsComp: React.FunctionComponent<ISingleProductsCompProps> = (
  props
) => {
  const { id } = useParams();
  return <h1>{id}</h1>;
};

export default SingleProductsComp;
