"use client";
import Link from "next/link";

import styles from "./page.module.css";
import { useCallback, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useDebounce from "@/hooks/useDebounce";

type TPokemon = {
  name: string;
};

const LIMIT = 50;

export default function Home() {
  const [hasMore, setHasMore] = useState(true);
  const [pokemons, setPokemons] = useState<TPokemon[]>([]);
  const [offest, setOffset] = useState(0);

  const [searchValue, setSearchValue] = useState("");
  const debounedSearchValue = useDebounce(searchValue, 500);

  const test = useCallback(async () => {
    //  Use other API
    const response = await fetch(
      ` https://pokeapi.co/api/v2/pokemon?limit=2000`
    );
  }, []);

  useEffect(() => {
    test();
  }, [debounedSearchValue]);

  const fetchData = async () => {
    const response = await fetch(
      ` https://pokeapi.co/api/v2/pokemon?limit=${LIMIT}&offset=${offest}`
    );
    const newData = await response.json();
    setHasMore(!!newData.next);
    setPokemons((prev) => [...prev, ...newData.results]);
    setOffset((prev) => prev + LIMIT);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className={styles.container}>
      <p className={styles.title}>
        800 <b>Pokemons</b> for you to choose your favorite
      </p>
      <input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className={styles.search}
        type="text"
        placeholder="Encuentra tu pokémon..."
      />
      <InfiniteScroll
        dataLength={pokemons.length}
        next={fetchData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        className={styles.list}
      >
        {pokemons.map(({ name }, i: number) => (
          <Link
            key={i + name}
            href={`/pokemons/${name}`}
            className={styles.pokemon}
          >
            {name}
          </Link>
        ))}
      </InfiniteScroll>
    </main>
  );
}
