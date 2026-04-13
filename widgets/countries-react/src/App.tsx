import { useCountries } from "./hooks/useCountries";
import { CountryCard } from "./CountryCard";
import { TOP_COUNTRIES_COUNT } from "./constants";
import type { AppProps } from "./types";

const SKELETON_KEYS = Array.from({ length: TOP_COUNTRIES_COUNT }, (_, i) => i);

export const App = ({ header }: AppProps) => {
  const { countries, loading, error } = useCountries();

  return (
    <section className="react-widget-section">
      <p className="widget-framework-header">{header}</p>
      {loading && (
        <ul role="status" aria-label="Loading country data" className="country-list">
          {SKELETON_KEYS.map((i) => (
            <li key={i} className="country-item country-item--skeleton">
              <div className="country-flag country-flag--skeleton" />
              <div className="country-details">
                <div className="country-skeleton-line country-skeleton-line--name" />
                <div className="country-skeleton-line country-skeleton-line--meta" />
              </div>
            </li>
          ))}
        </ul>
      )}
      {!loading && error && (
        <div role="alert" className="country-error">
          <p>{error}</p>
        </div>
      )}
      {!loading && !error && (
        <ul className="country-list">
          {countries.map((c) => (
            <CountryCard key={c.name} country={c} />
          ))}
        </ul>
      )}
    </section>
  );
};
