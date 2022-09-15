import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { api } from "../../api/api";
import { CharacterModel } from "../../models/CharacterModel";
import { CharacterCard } from "../CharacterCard/CharacterCard";

import { Container, CurrentPageText, PaginationBox } from "./styles";

export function CharacterList() {
  const [page, setPage] = useState(1);
  const { data } = useQuery(["characters"], () => api.getCharacters(page));

  return (
    <Container>
      <h1>Lista de Personagens</h1>
      <PaginationBox>
        <Button>Página Anterior</Button>
        <CurrentPageText>Página Atual: {page}</CurrentPageText>
        <Button>Próxima Página</Button>
      </PaginationBox>
      {data?.results?.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </Container>
  );
}
