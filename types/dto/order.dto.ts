import { Seller } from "./seller.dto";

export type SortBy =
  | "orderId"
  | "product"
  | "seller.name"
  | "country"
  | "price";
export type SortOrder = "ASC" | "DESC";

export interface IOrder {
  orderId: string;
  product: string;
  seller: Seller.ISeller;
  country: string;
  price: number;
}

export interface ListReq {
  page: number;
  limit: number;
  sort: SortBy;
  order: SortOrder;
  "sellerIds[]"?: number[];
}

export type ListRes = {
  data: IOrder[];
  total: number;
  page: number;
  limit: number;
};

export * as Order from "./order.dto";
