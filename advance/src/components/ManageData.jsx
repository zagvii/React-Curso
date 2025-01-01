import { useState } from "react";

const ManageData = () => {
    let someData = 10;
    const [number, setNumber] = useState(10);

    return (
        <div>
            <div>
                <p>Valor da váriavel: {someData}</p>
                <button onClick={() => (someData = 15)}>Mudar variável</button>
            </div>
            <div>
                <p>Valor da váriavel: {number}</p>
                <button onClick={() => setNumber(15)}>Mudar variável</button>
            </div>
        </div>
    )
}

export default ManageData