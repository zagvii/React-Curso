const UsersDetail = (props) => {
  return (
    <> 
        <h2>Dados do Usuário: {props.name}</h2>
        <ul>
            <li>Profissão: {props.profession}</li>
            {props.age > 18 && <li>Pode tirar a carteira de motorista!</li>}
        </ul>
    </>
  )
}

export default UsersDetail