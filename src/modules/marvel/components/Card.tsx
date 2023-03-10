import React from 'react'
import { useNavigate } from 'react-router-dom'

interface Props {
  name: string,
  img: string,
  id: number,
  path: string
}

const Card = ({name, img, id, path}:Props) => {


  const navigate = useNavigate()
  return (
    <div 
      onClick={() =>navigate(`${path}/${id}`)}
      className='card'>
      <img src={img} alt="" />
      <p>{name}</p>
    </div>
  )
}

export default Card