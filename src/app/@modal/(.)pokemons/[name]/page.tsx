"use client";
import Modal from "@/components/Modal";

import Pokemon from "@/components/Pokemon";

interface IProps {
  params: { name: string };
}

export default function PokemonModal({ params }: IProps) {
  return (
    <Modal>
      <Pokemon name={params.name} />
    </Modal>
  );
}
