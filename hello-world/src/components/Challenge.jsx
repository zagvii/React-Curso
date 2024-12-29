const Challenge = () => {
    const a = 5
    const b = 7

    const handleAddButton = () => {
        console.log("O resultado da soma é: " + (a+b))
    }

    return (
        <div>
            <p>Valor de A: {a}</p>
            <p>Valor de B: {b}</p>
            <button onClick={handleAddButton}>Clique aqui para somar os valores de A e B</button>
        </div>
    )
}

export default Challenge