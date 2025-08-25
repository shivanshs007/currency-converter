import { useEffect, useState } from "react";

const useCurrencyInfo = (currency) => {
  const [data, setData] = useState({});

  useEffect(() => {
    if (!currency) return; // optional: guard against empty input

    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2025.8.23/v1/currencies/${currency}.json`
    )
      .then((res) => res.json()) // <- fixed here
      .then((res) => setData(res[currency]))
      .catch((err) => console.error("Error fetching currency data:", err));
  }, [currency]);

  console.log(data);
  return data;
};

export default useCurrencyInfo;
