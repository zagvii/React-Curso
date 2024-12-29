const Events = () => {

    const handleMyEvent = (e) => {
        console.log(e) // Informações do Evento
        console.log('Ativou o evento')
    }

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique Aqui</button>
            </div>
        </div>
    )
}

export default Events