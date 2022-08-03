import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import { api } from "../../api/api";

import { CharacterCard } from "../CharacterCard/CharacterCard";
import { Pagination } from "../Pagination/Pagination";
import { Container } from "./styles";

export function CharacterList() {
  const [page, setPage] = useState(1);

  const { data, isLoading } = useQuery(
    ["characters", page],
    () => api.getCharacters(page),
    {
      keepPreviousData: true,
      onSettled: () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      },
    }
  );

  return (
    <Container>
      <h1>Lista de Personagens</h1>
      {isLoading && <Spinner animation="border" />}
      {data?.results.map((character) => (
        <CharacterCard character={character} />
      ))}
      <Pagination
        onClick={setPage}
        start={page - 4 > 0 ? page - 4 : 1}
        active={page}
        end={page + 4}
      />
    </Container>
  );
}
