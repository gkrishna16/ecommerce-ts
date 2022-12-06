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
  img: string;
  title: string;
  price: Number;
  size: String;
  color: string;
  categories: string[];
}
