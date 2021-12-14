import React, { useMemo } from "react";

export function useQuery() {
  const query = useMemo(() => new URLSearchParams(window.location.search), []);
  const valueByKey = (key: string) => query?.get(key) || "";
  console.log("query", query);
  return { query, valueByKey };
}
