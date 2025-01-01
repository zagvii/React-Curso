import {useState} from 'react'

const ListRender = () => {
    const [list] = useState(['Maria', 'Julia', 'Lucas'])

    //Dado retornado no banco de dados:
    const [users, setUsers] = useState([
        {id: 1, name: "Luiza", age: 21},
        {id: 2, name: "Carlos", age: 25},
        {id: 3, name: "Joao", age: 27}
    ])

    const deleteRandom = () => {
        const randomNumer = Math.floor(Math.random() * 4)

        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumer !== user.id)
        })
    }

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
            <button onClick={deleteRandom}>Delete random user</button>
        </div>    
    )
}

export default ListRender