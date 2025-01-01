import {useState} from 'react'

const ListRender = () => {
    const [list] = useState(['Maria', 'Julia', 'Lucas'])

    //Dado retornado no banco de dados:
    const [users] = useState([
        {id: 123, name: "Luiza", age: 21},
        {id: 321, name: "Carlos", age: 25},
        {id: 213, name: "Joao", age: 27}
    ])

    return (
        <div>
            <div>
                <ul>
                    {/* É necessário trabalhar com o KEY em cada item, que normalmente será a PK do banco de dados.
                    Como no exemplo atual, não existe isso, criamos um index manualmente (O que não é uma boa prática) */}
                    {list.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            </div>
            <div>
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>
                            {user.name} - {user.age}
                        </li>
                    ))}
                </ul>
            </div>
        </div>    
    )
}

export default ListRender