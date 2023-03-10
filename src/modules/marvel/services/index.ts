import instance from "../../../boot/axios"

import { Character, DataApiCharacter } from "../types/CharacterInterface"
import { Comic, DataApiComic } from '../types/ComicInterface';
import { Serie, DataApiSerie } from '../types/SeriesInterface';


export default {

  async getApi(type:string, offset = 0) {
   const response = await instance
      .get(`${type}?offset=${offset}&ts=1000&apikey=34080d8aeaf48f227cecab6b02bc64d1&hash=bac2f31d1f10ddc82689625c3e853d1d`)

    return response.data

  },
  async getById(type: string, id:number) {
    const response = await instance
      .get<DataApiCharacter | DataApiComic | DataApiSerie>(`/${type}/${id}?ts=1000&apikey=34080d8aeaf48f227cecab6b02bc64d1&hash=bac2f31d1f10ddc82689625c3e853d1d`)
    
    return response.data  
  },
}