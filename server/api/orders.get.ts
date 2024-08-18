import { Order } from "~/types";

export default defineEventHandler(async (event) => {
  const query: Order.ListReq = { ...getQuery(event) };
  const url = process.env.BASE_API_URL + "/orders";

  return $fetch<Order.ListRes>(url, {
    query,
  });
});
