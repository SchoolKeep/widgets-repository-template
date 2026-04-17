import { useMemo, useState, useEffect } from "react";
import type { WidgetSDK, WidgetProps } from "./types";
import { usePokemonList } from "./hooks";
import { PokemonCard } from "./PokemonCard";

const SKELETON_KEYS = Array.from({ length: 8 }, (_, i) => i);

export function App({ sdk }: { sdk: WidgetSDK }) {
  const [props, setProps] = useState<WidgetProps>(sdk.getProps());
  const [query, setQuery] = useState("");
  const { pokemon, loading, error } = usePokemonList();

  useEffect(() => sdk.on("propsChanged", setProps), [sdk]);

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return pokemon;
    return pokemon.filter((p) => p.name.includes(needle));
  }, [pokemon, query]);

  return (
    <section className="pokemon-widget">
      <header className="pokemon-header">
        <h3 className="pokemon-title">{props.title ?? "Pokémon Search"}</h3>
        {props.description && (
          <p className="pokemon-description">{props.description}</p>
        )}
      </header>

      <label className="pokemon-search">
        <span className="pokemon-search-label">Search by name</span>
        <input
          className="pokemon-search-input"
          type="search"
          placeholder="pikachu, charizard, ..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          autoComplete="off"
        />
      </label>

      {loading && (
        <ul className="pokemon-list" aria-label="Loading Pokémon">
          {SKELETON_KEYS.map((i) => (
            <li key={i} aria-hidden="true" className="pokemon-item pokemon-item--skeleton">
              <div className="pokemon-sprite pokemon-sprite--skeleton" />
              <div className="pokemon-details">
                <div className="pokemon-skeleton-line pokemon-skeleton-line--id" />
                <div className="pokemon-skeleton-line pokemon-skeleton-line--name" />
              </div>
            </li>
          ))}
        </ul>
      )}

      {!loading && error && (
        <div role="alert" className="pokemon-error">
          <p>{error}</p>
        </div>
      )}

      {!loading && !error && filtered.length === 0 && (
        <p className="pokemon-empty">No Pokémon match &ldquo;{query}&rdquo;.</p>
      )}

      {!loading && !error && filtered.length > 0 && (
        <ul className="pokemon-list">
          {filtered.map((p) => (
            <PokemonCard key={p.id} pokemon={p} />
          ))}
        </ul>
      )}

      {!loading && !error && (
        <footer className="pokemon-footer">
          Showing {filtered.length} of {pokemon.length} Pokémon
        </footer>
      )}
    </section>
  );
}
