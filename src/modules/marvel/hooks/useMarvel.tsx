import { useEffect, useContext, useState } from 'react';
import { useLocation, useMatch, useMatches, useNavigation, useRoutes } from "react-router-dom"
import { MarvelContext } from '../../../store/Marvel/MarvelContext';
import services from '../services';
import { DataApiCharacter } from '../types/CharacterInterface';
import { DataApiComic } from '../types/ComicInterface';


const useMarvel = () => {

  const { changeStateMarvel, marvel } = useContext(MarvelContext)
  const location = useLocation()
  const hola = useMatches()

  const [pagination, setPagination] = useState(0)

  const urlAPi = ['/comics', '/characters', '/series']

  useEffect(() => {
    setPagination(0)
    if( urlAPi.includes(location.pathname) ) chooseRequest()
     
  }, [location])

  useEffect(() => {
    console.log('otro', pagination)
    chooseRequest()
  }, [pagination])
  

  const chooseRequest = async() => {
    const request = await services.getApi(location.pathname, pagination) as DataApiCharacter | DataApiComic | DataApiComic
    changeStateMarvel(request.data.results)   
  }

  const changedPagination = (type: 'Suma' | 'Restar') => {

    switch (type) {
      case 'Suma':
        setPagination(pagination + 20)
   
        break;
      case 'Restar':
        setPagination(pagination - 20)
        break;
    
    }
  }

  return {
    marvel,
    path: location.pathname,
    pagination,
    changedPagination,
    setPagination
  }
}

export default useMarvel