"use client";

import { useEffect } from "react";
import { useCustomerStore } from "@/services/store/customerStore";

export default function CustomerStoreHydrator({ data }) {
  const setCustomerData = useCustomerStore((s) => s.setCustomerData);
  console.log("fetch data",data);
  useEffect(() => {
    if (data) setCustomerData(data);
  }, [data, setCustomerData]);

  return null;
}


