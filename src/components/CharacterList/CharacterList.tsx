import { useEffect, useState } from "react";
import { api } from "../../api/api";
import { CharacterModel } from "../../models/CharacterModel";
import { CharacterCard } from "../CharacterCard/CharacterCard";

import { Container } from "./styles";

export function CharacterList() {
  const [characterList, setCharacterList] = useState<Array<CharacterModel>>([]);

  useEffect(() => {
    fetchCharacterList();
  }, []);

  async function fetchCharacterList() {
    const { results } = await api.getCharacters(1);
    setCharacterList(results);
  }

  return (
    <Container>
      <h1>Lista de Personagens</h1>

      {characterList?.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </Container>
  );
}
