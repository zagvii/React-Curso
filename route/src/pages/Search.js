import React from 'react'

import { useSearchParams, Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'

const Search = () => {

    const [searchParams] = useSearchParams()

    const url = "http://localhost:3000/products?" + searchParams
    const { data: product, loading, error } = useFetch(url)

    return (
        <div><h1>Resultado Dispon</h1></div>
    )
}

export default Search