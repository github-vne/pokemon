"use client";

import Pokemon from "@/components/Pokemon";

interface IProps {
  params: { name: string };
}

export default function PokemonModal({ params }: IProps) {
  return <Pokemon name={params.name} />;
}
