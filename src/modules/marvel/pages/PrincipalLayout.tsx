import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import useMarvel from '../hooks/useMarvel'

const PrincipalLayout: React.FC = () => {

  const { setPagination } = useMarvel()
  return (
    <div className='container-body'>
      <header>
        <nav>
          <Link onClick={() => setPagination(0)} to='/comics'>Comic</Link>
          <Link onClick={() => setPagination(0)} to='/series'>Serie</Link>
          <Link onClick={() => setPagination(0)} to='/characters'>Character</Link>
        </nav>
      </header>
      <Outlet />
    </div>
  )
}

export default PrincipalLayout
