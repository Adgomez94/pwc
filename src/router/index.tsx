import { createBrowserRouter, Route } from "react-router-dom";

import PrincipalLayout from '../modules/marvel/pages/PrincipalLayout';
import MarvelPrincipal from '../modules/marvel/pages/MavelPrincipal';
import DetailsMarvel from "../modules/marvel/pages/DetailsMarvel";


const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <PrincipalLayout />,
      children: [
        {
          path: 'comics',
          element: <MarvelPrincipal />
        },
        {
          path: 'series',
          element: <MarvelPrincipal />
        },
        {
          path: 'characters',
          element: <MarvelPrincipal />
        },
        {
          path: ':type/:id',
          element: <DetailsMarvel />
        }
      ]
    }
  ]
)


export default router