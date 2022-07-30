import axios from "axios";
import { CharacterModel } from "../models/CharacterModel";
import { Page } from "../types/page";

const BASE_URL = "https://rickandmortyapi.com/api/";

async function getCharacters(page: number): Promise<Page<CharacterModel>> {
  const response = await axios.get<Page<CharacterModel>>(
    `${BASE_URL}character/?page=${page}`
  );

  return response.data;
}

export const api = {
  getCharacters,
};
