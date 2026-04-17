import type { Pokemon } from "./types";

export const PokemonCard = ({ pokemon }: { pokemon: Pokemon }) => (
  <li className="pokemon-item">
    <img
      className="pokemon-sprite"
      src={pokemon.spriteUrl}
      alt={pokemon.name}
      loading="lazy"
    />
    <div className="pokemon-details">
      <span className="pokemon-id">#{String(pokemon.id).padStart(3, "0")}</span>
      <span className="pokemon-name">{pokemon.name}</span>
    </div>
  </li>
);
