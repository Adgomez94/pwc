import { useContext } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import instance from './boot/axios'
import MarvelProvider from './store/Marvel/MarvelProvider'
import { MarvelContext } from './store/Marvel/MarvelContext';
import { DataApiSerie } from './modules/marvel/types/SeriesInterface';

import { Outlet, RouterProvider } from 'react-router-dom'
import router from './router'

export function MarvelApp() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
