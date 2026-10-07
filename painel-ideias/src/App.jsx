import { useState } from "react"

export default function App(){
    const [ideias, setIdeias] = useState([])
    const [novaIdeia, setNovaIdeia] = useState('')
    const [erro, setErro] = useState('')
    
    function adicionarIdeia(){
        const ideiaCriada = {id: Date.now(), texto: novaIdeia, feita: false}

        setIdeias([...ideias, ideiaCriada])
    }

    function aoRealizarEnvio(event){
        event.preventDefault()

        adicionarIdeia()
    }

    return (
        <>
            <h1 className="titulo">Painel de Ideias</h1>

            <form onSubmit={aoRealizarEnvio}>
                <input         
                    type="text" 
                    value={novaIdeia}
                    onChange={(event) => {
                        setNovaIdeia(event.target.value)
                        setErro("")
                    }}
                />

                <button type="submit">Enviar</button>
            </form>

            {erro && <p className="erro"></p>}

            <ul>
                {ideias.map(ideia => (
                    <li key={ideia.id}>
                        {ideia.texto}
                    </li>
                ))}
            </ul>

        </>
    )
}
