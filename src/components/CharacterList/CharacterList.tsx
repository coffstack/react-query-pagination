import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Button } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import { api } from "../../api/api";

import { CharacterCard } from "../CharacterCard/CharacterCard";
import { Container, CurrentPageText, PaginationBox } from "./styles";

export function CharacterList() {
  const [page, setPage] = useState(1);

  const { data, isLoading, isPreviousData } = useQuery(
    ["characters", page],
    () => api.getCharacters(page),
    {
      keepPreviousData: true,
      staleTime: 5000,
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
          onClick={() => {
            setPage((old) => (data?.info.next ? old + 1 : old));
          }}
          disabled={isPreviousData || !data?.info.next}
        >
          Próxima Página
        </Button>
      </PaginationBox>

      {isLoading && <Spinner animation="border" />}
      {data?.results.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </Container>
  );
}
