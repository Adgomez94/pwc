import { Comic } from '../../../modules/marvel/types/ComicInterface';
import { Serie } from '../../../modules/marvel/types/SeriesInterface';
import { Character } from '../../../modules/marvel/types/CharacterInterface';

export type MarvelAction = 
    | Comic[]
    | Serie[]
    | Character[] 



export type MarvelState = | Comic[] | Serie[] | Character[]

