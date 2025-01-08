import { useState } from 'react'
import './MyForm.css'

const MyForm = ({user}) => {

    /* 3 - Manipulação dos valores (Nome) */
    
    const [name, setName] = useState(user ? user.name : "Nome Temporário");
    const [email, setEmail] = useState(user ? user.email : null);
    const [description, setDescription] = useState();
    const [role, setRole] = useState();

    const handleName = (evt) => {
        setName(evt.target.value)
    }

    /* 5 - Envio dos dados */

    const handleSubmit = (evt) => {
        /* Não recarrega a página ao enviar os dados */
        evt.preventDefault(); 
        console.log(name, email, description, role)

        /* 7 - Limpando o input (Normalmente depois do envio) */
        setName("")
        setEmail("")
    }

    /* 6 - Controlled inputs - Propriedade value */

    return (
        <>
            {/* 1 - Criação do FORM */}
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Nome: {name}</label>
                <input type="text" name="name" id="name" placeholder='Digite seu nome' value={name} onChange={handleName}/>

                {/* 2 - Label envolvendo o input */}
                <label>
                    <span>E-mail: {email}</span>
                    {/* 4 - Simplificando a manipulação (E-mail) */}
                    <input type="email" name="email" id="email" placeholder='Digite seu email' value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>

                {/* 8 - TextArea */}
                <label>
                    <span>Descrição: </span>
                    <textarea name="description" id="description" placeholder='Digite sua descrição' value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                </label>

                {/* 9 - Select */}
                <label>
                    <span>Função: </span>
                    <select name="role" id="role" onChange={(e) => setRole(e.target.value)}>
                        <option value="user">Usuário</option>
                        <option value="adm">Administrador</option>
                    </select>
                </label>

                <input type="submit" value="Enviar" />
            </form>
        </>
    )
}

export default MyForm