import axios from "axios";
import * as React from "react";
import Items from "./Items/Items";
import { ProductsType } from "./Items/Products.type";

interface ILeatestProductsProps {}

const LeatestProducts: React.FunctionComponent<ILeatestProductsProps> = (
  props
) => {
  const [products, setProducts] = React.useState<ProductsType>([]);

  const productFetch = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/products");
      setProducts(data);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message);
      }
    }

    //handle errors e loading
  };

  React.useEffect(() => {
    productFetch();
  }, []);

  return (
    <>
      <h1>Leatest Products</h1>
      <Items products={products} />
    </>
  );
};

export default LeatestProducts;
