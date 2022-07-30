import { Image } from "react-bootstrap";
import { CharacterModel } from "../../models/CharacterModel";

import { Container, Content } from "./styles";

interface Props {
  character: CharacterModel;
}

//TODO: add mais info como status e species
export function CharacterCard({ character }: Props) {
  return (
    <>
      <Container>
        <Image width={150} roundedCircle src={character.image} />
        <Content>
          <h3>{character.name}</h3>
          <div>
            <p>Espécie: {character.species}</p>
            <p>Status: {character.status}</p>
          </div>
        </Content>
      </Container>
    </>
  );
}
