import { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import { api } from "../../api/api";
import { CharacterModel } from "../../models/CharacterModel";
import { CharacterCard } from "../CharacterCard/CharacterCard";
import { Pagination } from "../Pagination/Pagination";
import { Container } from "./styles";

export function CharacterList() {
  const [characterList, setCharacterList] = useState<Array<CharacterModel>>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchCharacterList();
  }, [page]);

  async function fetchCharacterList() {
    try {
      setIsLoading(true);
      const { results } = await api.getCharacters(page);
      setCharacterList(results);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Container>
      <h1>Lista de Personagens</h1>
      {isLoading && <Spinner animation="border" />}
      {characterList?.map((character) => (
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
