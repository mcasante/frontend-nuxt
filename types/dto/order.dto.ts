import { Seller } from "./seller.dto";

export type SortBy = "orderId" | "product" | "seller" | "country" | "price";
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
}

export type ListRes = IOrder[];

export * as Order from "./order.dto";
