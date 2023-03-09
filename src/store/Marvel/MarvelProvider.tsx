import { useReducer } from "react";

import { MarvelState } from './interfaces/index';

import { marvelReducer } from "./MarvelReducer";

import { MarvelContext } from './MarvelContext';
import { Comic } from "../../modules/marvel/types/ComicInterface";
import { Serie } from "../../modules/marvel/types/SeriesInterface";
import { Character } from "../../modules/marvel/types/CharacterInterface";


const INITIAL_STATE:MarvelState = []

type Props = {
  children: JSX.Element | JSX.Element[] 
}

const MarvelProvider = ({ children }:Props) => {

  const [marvel, dispatch] = useReducer(marvelReducer, INITIAL_STATE)

  const changeStateMarvel = (marvel:Comic[] | Serie[] | Character[]) => {
    dispatch(marvel)
  }

  return (
    <MarvelContext.Provider
      value={{
        marvel,
        changeStateMarvel
      }}
    >
      { children }
    </MarvelContext.Provider>

  )

}

export default MarvelProvider