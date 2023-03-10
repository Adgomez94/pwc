import { Comic } from "../../modules/marvel/types/ComicInterface";
import { Serie } from "../../modules/marvel/types/SeriesInterface";
import { MarvelAction } from "./interfaces";
import { Character } from '../../modules/marvel/types/CharacterInterface';

export const marvelReducer = ( state:Comic[] | Serie[] | Character[], action:MarvelAction ) =>{
  return action
}