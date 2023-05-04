import React, { useState } from "react"



export default function Cadastro() {
    const [nome, SetNome] = useState('')
    const [email, SetEmail] = useState('')
    const [endereco, SetEndereco] = useState('')
    const [senha, SetSenha] = useState('')

    function Cadastrar(e) {
        e.preventDefault()
        if (nome === '' || email === '' || endereco === '' || senha === '') {
            alert('Campos em branco')
            return
        }
        alert(`Nome: ${nome} \nEmail: ${email} \nEndereco: ${endereco} \nSenha: ${senha}`)
    }

    return (
        <div className="fundo">
            <h1>Cadastre-se abaixo:</h1>
            <div className="cadastro">

                <form onSubmit={Cadastrar}>
                    <label>Nome:</label>
                    <input type="text" value={nome} onChange={(e) => SetNome(e.target.value)} /><br />
                    <label>E-mail:</label>
                    <input type="email" value={email} onChange={(e) => SetEmail(e.target.value)} /><br />
                    <label>Endereço:</label>
                    <input type="text" value={endereco} onChange={(e) => SetEndereco(e.target.value)} /><br />
                    <label>Senha:</label>
                    <input type="password" value={senha} onChange={(e) => SetSenha(e.target.value)} /><br />
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </div>
    )
}