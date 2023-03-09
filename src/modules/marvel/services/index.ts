import instance from "../../../boot/axios"

import { Character } from "../types/CharacterInterface"
import { Comic } from "../types/ComicInterface"
import { Serie } from "../types/SeriesInterface"


export default {

  async getCharacter() {
   const response = await instance
      .get<Character[]>('/character?ts=1000&apikey=34080d8aeaf48f227cecab6b02bc64d1&hash=bac2f31d1f10ddc82689625c3e853d1d')

    return response.data

  },
  async getSeries() {
    const response = await instance
      .get<Serie[]>('/serie?ts=1000&apikey=34080d8aeaf48f227cecab6b02bc64d1&hash=bac2f31d1f10ddc82689625c3e853d1d')
    
    return response.data  
  },
  async getComic() {
    const response = await instance
      .get<Comic[]>('/comic?ts=1000&apikey=34080d8aeaf48f227cecab6b02bc64d1&hash=bac2f31d1f10ddc82689625c3e853d1d')
    
    return response.data
  }
}