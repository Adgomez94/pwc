import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react';
import { Comic } from '../types/ComicInterface';
import { Character } from '../types/CharacterInterface';
import { Serie } from '../types/SeriesInterface';
import services from '../services';

interface Props {
  name: string
  description: string
  img: string
}

const DetailsMarvel = () => {

  const [info, setInfo] = useState<Comic | Character | Serie>()

  const { id, type } = useParams()

  useEffect(() => {
    getById()
  }, [])

  const getById = async() => {
    const response = await services.getById(type!, Number(id))

    setInfo(response.data.results[0])
  }


  return (

    <div className="box-content">
      <div className="right">
        <img
          src={`${info?.thumbnail.path}.${info?.thumbnail.extension}`}
          alt={`${info?.name}`}
        />
      </div>
      <div className="left">
        <h1>{info?.name ? info.name : info?.title}</h1>
        <h4>
          {info?.description ? info?.description : "No hay Descripción disponible"}
        </h4>
      </div>
    </div>
  )
}

export default DetailsMarvel