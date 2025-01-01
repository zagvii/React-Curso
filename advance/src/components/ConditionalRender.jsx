import { useState } from 'react'

const ConditionalRender = () => {
    const [x] = useState(false);
    const [name, setName] = useState("Joaquina");

    return (
        <div>
            <h1>Isso será exibido?</h1>
            <div>
                {/* Método com dois IF */}
                {x && <p>Se x for true, sim!</p>}
                {!x && <p>Agora x é falso!</p>}
            </div>
            <div>
                {/* Método com IF-ELSE */}
                {name === 'Mariana' ? (<p>Bem-vinda, Mariana!</p>) : (<p>Bem-vindo!</p>)}
            </div>
            <button onClick={() => setName('Mariana')}>Fazer login como Mariana!</button>
        </div>
    )
}

export default ConditionalRender