import { useState, useEffect } from "react";
import type { Country } from "../types";
import { CONNECTOR_PERMALINK, TOP_COUNTRIES_COUNT } from "../constants";

export const useCountries = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    new window.WidgetServiceSDK().connectors
      .execute({ permalink: CONNECTOR_PERMALINK, method: "GET" })
      .then((raw) => {
        if (signal.aborted) return;
        const top5 = raw
          .toSorted((a, b) => b.population - a.population)
          .slice(0, TOP_COUNTRIES_COUNT)
          .map((c) => ({
            name: c.name.common,
            capital: c.capital?.[0] ?? "N/A",
            population: c.population,
            flag: c.flags.png,
            region: c.region,
          }));
        setCountries(top5);
        setLoading(false);
      })
      .catch((err: unknown) => {
        if (signal.aborted) return;
        setError(err instanceof Error ? err.message : "Failed to load countries");
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { countries, loading, error };
};
