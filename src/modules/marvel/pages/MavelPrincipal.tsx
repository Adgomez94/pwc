import React, { useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Card from '../components/Card'
import useMarvel from '../hooks/useMarvel'

const MavelPrincipal = () => {

  const { marvel, path, pagination, changedPagination } =  useMarvel()
  
  return (
    <div className='body'>
      <div className='container'>

      
        {
          marvel.map((info) => 
            <Card 
              key={info.id}
              path={path}
              id={info.id}
              img={`${info.thumbnail.path}.${info.thumbnail.extension}`}
              name={info.name ? info.name : info.title!}
            />

          )
        }
      </div>

      <div className="paginacion">
          {
            pagination !== 0 && <div onClick={() => changedPagination('Restar')} > <span>&laquo;</span></div>
          }
          <div onClick={() => changedPagination('Suma')}><span>&raquo;</span></div>
      </div>
    </div>
  )
}

export default MavelPrincipal