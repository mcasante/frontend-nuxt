export interface ISeller {
  id: number;
  name: string;
  totalSales: number;
}

export type ListRes = ISeller[];

export * as Seller from "./seller.dto";
