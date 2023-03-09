import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import instance from './boot/axios'
import MarvelProvider from './store/Marvel/MarvelProvider'
import { MarvelContext } from './store/Marvel/MarvelContext';
import { DataApiSerie } from './modules/marvel/types/SeriesInterface';

function App() {
  const [count, setCount] = useState(0)

  const { changeStateMarvel } = useContext( MarvelContext )

  const hola = async() => {
    const visa = await instance.get<DataApiSerie>('/series?ts=1000&apikey=34080d8aeaf48f227cecab6b02bc64d1&hash=bac2f31d1f10ddc82689625c3e853d1d')
  }

   

  hola()

  return (
    <>
    <header>
      <h1>Marvel API</h1>
    </header> 
    </>
  )
}

export default App
