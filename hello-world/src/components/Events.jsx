const Events = () => {

    const handleMyEvent = (e) => {
        console.log(e) // Informações do Evento
        console.log('Ativou o evento')
    }

    const renderSomething = (x) => {
        if (x) {
            return <h1>Estou renderizando isso!</h1>
        } else {
            return <h1>Estou renderizando isso também!</h1>
        }
    } 

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique Aqui</button>
            </div>
            <div>
                <button onClick={() => console.log('Clicou no outro botão!')}>Clique aqui também!</button>
            </div>
            {renderSomething(true)}
        </div>
    )
}

export default Events