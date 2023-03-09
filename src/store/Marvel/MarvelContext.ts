import { createContext } from "react";

import { Comic } from '../../modules/marvel/types/ComicInterface';
import { Serie } from "../../modules/marvel/types/SeriesInterface";
import { Character } from "../../modules/marvel/types/CharacterInterface";

export type MarvelContextProps = {
  marvel: Comic[] | Serie[] | Character[],
  changeStateMarvel: (marvel: Comic[] | Serie[] | Character[]) => void
}

export const MarvelContext = createContext<MarvelContextProps>({} as MarvelContextProps)