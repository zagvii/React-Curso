import './App.css';

import { useState, useEffect } from 'react';

// Custom Hook
import { useFetch } from './hooks/useFetch';

const url = "http://localhost:3000/products";

function App() {

  // Local para salvar os dados - Usa useState
  // Renderizar a chamada a API apenas uma vez (Ou de acordo com a alteração em alguma dependência) - Usa useEffect
  // Um meio de fazer uma requisição assíncrona - Usa Fetch API

  const [products, setProducts] = useState([]);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // GET
  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await fetch(url);
  //     const data = await res.json();
      
  //     setProducts(data);
  //   }

  //   fetchData();
  // }, []);

  // Custom Hook
  const { data: items, httpConfig, loading, error } = useFetch(url);

  // POST
  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name, 
      price
    }
  
    // const res = await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(product)
    // });

    // // Carregamento Dinâmico - Só adiciona um novo registro, não chama toda a requisição GET de novo
    // const newProduct = await res.json();

    // setProducts((prevProducts) => [...prevProducts, newProduct])

    // Refatorando POST
    httpConfig(product, "POST");

    setName("");
    setPrice("");
  };

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      {loading && <p> Carregando dados... </p>}
      {error && <p> {error} </p>}
      <ul>
        {items && items.map((product) => (
          <li key={product.id}>
            {product.name} - R$ {product.price}
          </li>
        ))}
      </ul>
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input type='text' value={name} name='name' onChange={(e) => setName(e.target.value)}></input>
          </label>
          <label>
            Preço:
            <input type='number' value={price} name='price' onChange={(e) => setPrice(e.target.value)}></input>
          </label>
          {loading && <input type='submit' disabled value="Aguarde"></input>}
          {!loading && <input type='submit' value="Criar"></input>}
        </form>
      </div>

    </div>
  );
}

export default App;
