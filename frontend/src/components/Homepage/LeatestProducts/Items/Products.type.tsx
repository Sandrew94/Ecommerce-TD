export type ProductsType = {
  brand: string;
  category: string;
  countInStock: number;
  createdAt: Date;
  description: string;
  image: string;
  name: string;
  numReviews: number;
  price: number;
  rating: number;
  reviews: string[];
  updatedAt: Date;
  user: string;
  _id: string;
}[];

export type SingleProductsType = {} & ProductsType[0];
