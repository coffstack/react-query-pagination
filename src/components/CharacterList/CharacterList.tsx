import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { api } from "../../api/api";
import { CharacterCard } from "../CharacterCard/CharacterCard";

import { Container, CurrentPageText, PaginationBox } from "./styles";

export function CharacterList() {
  const [page, setPage] = useState(1);
  const { data } = useQuery(
    ["characters", page],
    () => api.getCharacters(page),
    {
      keepPreviousData: true,
    }
  );

  return (
    <Container>
      <h1>Lista de Personagens</h1>
      <PaginationBox>
        <Button
          onClick={() => setPage((old) => Math.max(old - 1, 1))}
          disabled={page === 1}
        >
          Página Anterior
        </Button>
        <CurrentPageText>Página Atual: {page}</CurrentPageText>
        <Button
          onClick={() => setPage((old) => (data?.info.next ? old + 1 : old))}
          disabled={!data?.info.next}
        >
          Próxima Página
        </Button>
      </PaginationBox>
      {data?.results?.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </Container>
  );
}
