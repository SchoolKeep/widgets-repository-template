import { ref, onMounted, onUnmounted } from "vue";
import type { Country } from "../types";
import { CONNECTOR_PERMALINK, TOP_COUNTRIES_COUNT } from "../constants";

export const useCountries = () => {
  const countries = ref<Country[]>([]);
  const loading = ref(true);
  const error = ref<string | null>(null);
  let cancelled = false;

  onUnmounted(() => { cancelled = true; });

  onMounted(async () => {
    try {
      const raw = await new window.WidgetServiceSDK().connectors.execute({
        permalink: CONNECTOR_PERMALINK,
        method: "GET",
      });
      if (cancelled) return;
      countries.value = raw
        .toSorted((a, b) => b.population - a.population)
        .slice(0, TOP_COUNTRIES_COUNT)
        .map((c) => ({
          name: c.name.common,
          capital: c.capital?.[0] ?? "N/A",
          population: c.population,
          flag: c.flags.png,
          region: c.region,
        }));
    } catch (e) {
      if (cancelled) return;
      error.value = e instanceof Error ? e.message : "Failed to load country data";
    } finally {
      if (!cancelled) loading.value = false;
    }
  });

  return { countries, loading, error };
};
