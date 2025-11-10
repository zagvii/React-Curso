import React from 'react'

import { useFetch } from '../hooks/useFetch'

import { Link, useParams } from 'react-router-dom'

const Product = () => {
    // Rota Dinâmica
    const { id } = useParams()

    // Carregamento Dinâmico
    const url = "http://localhost:3000/products/" + id
    const { data: product, loading, error } = useFetch(url)


    return (
        <div>
            <h1>Dados do Produto:</h1>
            {error && <p>Ocorreu um erro...</p>}
            {loading && <p>Carregando...</p>}
            {product && <p>Nome: {product.name} </p>}
            {product && <p>Preço: {product.price} </p>}
            {/* Nested Route */}
            <Link to={`/products/${id}/info`}>Mais informações</Link>
        </div>
    )
}

export default Product