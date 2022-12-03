export interface ProductsProps {
  cat: string;
  filters: object;
  sort: string;
}

export type pricetype = {
  price: string;
};

export interface ProductsState {
  id: Number;
  imgUrl: string;
  name: string;
  price: Number;
  size: Array<string>;
  colors: string[];
  categories: string[];
}
