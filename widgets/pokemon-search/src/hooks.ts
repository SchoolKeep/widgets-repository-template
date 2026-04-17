import { useEffect, useState } from "react";
import type { Pokemon, RawPokemonListEntry } from "./types";

const SPRITE_BASE =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon";

const extractId = (url: string): number | null => {
  const match = url.match(/\/pokemon\/(\d+)\/?$/);
  return match ? Number(match[1]) : null;
};

const toPokemon = (entry: RawPokemonListEntry): Pokemon | null => {
  const id = extractId(entry.url);
  if (id === null) return null;
  return {
    id,
    name: entry.name,
    spriteUrl: `${SPRITE_BASE}/${id}.png`,
  };
};

export const usePokemonList = () => {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    new window.WidgetServiceSDK().connectors
      .execute({ permalink: "pokemon-search-list", method: "GET" })
      .then((raw) => {
        if (cancelled) return;
        const mapped = raw.results
          .map(toPokemon)
          .filter((p): p is Pokemon => p !== null);
        setPokemon(mapped);
        setLoading(false);
      })
      .catch((err: unknown) => {
        if (cancelled) return;
        setError(err instanceof Error ? err.message : "Failed to load Pokémon");
        setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return { pokemon, loading, error };
};
