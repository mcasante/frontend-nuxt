import { Seller } from "~/types";

export default defineEventHandler(async (event) => {
  const url = process.env.BASE_API_URL + "/sellers";

  return $fetch<Seller.ListRes>(url);
});
