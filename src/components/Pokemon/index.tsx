"use client";

import styles from "./pokemon.module.css";
import { useEffect, useState } from "react";

export default function Pokemon({ name }: { name: string }) {
  const [loading, setLoading] = useState(false);
  const [pokemon, setPokemon] = useState<any>(null);

  const loadData = async () => {
    if (!name) return;
    setLoading(true);

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const newData = await response.json();
    setLoading(false);
    setPokemon(newData);
  };

  useEffect(() => {
    // pokemon.sprites?.other['official-artwork']?.front_default
    loadData();
  }, []);

  if (loading) return <div>Loading</div>;

  if (!pokemon) return <div>404</div>;

  return (
    <div className={styles.root}>
      <div className={styles.image_block}>
        <img
          className={styles.image}
          src={pokemon?.sprites?.other["official-artwork"]?.front_default}
          alt=""
        />
      </div>
      <div className={styles.info}>
        <div className={styles.main_info}>
          <p className={styles.name}>{pokemon.name}</p>
          <p className={styles.generation}>Generation 1</p>
          <div className={styles.id}>{pokemon.id}</div>
        </div>

        {!!pokemon.abilities && (
          <div className={styles.info_block}>
            <span>Abilities:</span>
            <ol className={styles.abilities}>
              {pokemon.abilities.map((el: any, i: number) => (
                <li key={i}>{el.ability.name}</li>
              ))}
            </ol>
          </div>
        )}
        <div className={styles.info_block}>2</div>

        <section className={styles.stats}>
          {pokemon.stats.map((el: any, i: number) => (
            <div key={i} className={styles.stat}>
              <span className={styles.stat_value}>{el.base_stat}</span>
              <span className={styles.stat_title}>{el.stat.name}</span>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
