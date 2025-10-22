import React from 'react'

import "./Home.css"

import { Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'

const Home = () => {

  // Carregando dados

  const url = 'http://localhost:3000/products'

  const { data: items, loading, error } = useFetch(url)

  return <div>
      <h1>Produtos:</h1>
      {error && <p>{error}</p>}
      <ul className='products'>
        {items && items.map(item => (
          <li key={item.id}>{item.name} - R$ {item.price}
            <Link to={`/products/${item.id}`}>Detalhes</Link>
          </li>
        ))}

      </ul>
    </div>;
}

export default Home