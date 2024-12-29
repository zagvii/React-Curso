const TemplateExpression = () => {

    const name = 'Mirian';
    const userData = {
        age: 20,
        job: "Social Worker"
    }

    return (
        <div>
            <h1>Olá, {name}. Tudo bem?</h1>
            <p>Você tem {userData.age} anos e trabalha como {userData.job}</p>
            <p>{console.log("React")}</p>
            {/* As chaves servem para eexecutar código JS */}
        </div>
    )

}

export default TemplateExpression