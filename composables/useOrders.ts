import type { Order } from "~/types";
import type { TableSort } from "~/types";

type OrderTableSort = TableSort<Order.SortBy, Lowercase<Order.SortOrder>>;

export function useOrders() {
  const sort = ref<OrderTableSort>({
    column: "orderId",
    direction: "asc",
  });

  const page = ref(1);
  const pageCount = ref(5);
  const total = ref(0);
  const sellerIds = ref<number[] | undefined>(undefined);

  const listOrdersQuery = computed<Order.ListReq>(() => {
    return {
      page: page.value,
      limit: pageCount.value,
      sort: sort.value.column as Order.SortBy,
      order: sort.value.direction.toUpperCase() as Order.SortOrder,
      "sellerIds[]": sellerIds.value,
    };
  });

  const { status, data: response } = useLazyFetch<Order.ListRes>(
    "/api/orders",
    {
      query: listOrdersQuery,
    }
  );

  const orders = computed(() => response.value?.data);
  const pending = computed(() => status.value === "pending");

  watch(orders, () => {
    total.value = response.value?.total ?? 0;
  });

  return {
    sort,
    page,
    sellerIds,
    pageCount,
    total,
    orders,
    pending,
  };
}
