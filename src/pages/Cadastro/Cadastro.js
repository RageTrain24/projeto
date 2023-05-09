import React, { useState } from "react"
import './cadastro.css'



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
        <div className="cadgeral">
            <h1>Cadastre-se abaixo:</h1>
            <div className="cadastro">

                <form onSubmit={Cadastrar}>
                    <div className="cad">
                        <label>Nome:</label>
                        <input className="formm" type="text" value={nome} onChange={(e) => SetNome(e.target.value)} /><br />
                        <label>E-mail:</label>
                        <input className="formm" type="email" value={email} onChange={(e) => SetEmail(e.target.value)} /><br />
                        <label>Endereço:</label>
                        <input type="text" value={endereco} onChange={(e) => SetEndereco(e.target.value)} /><br />
                        <label>Senha:</label>
                        <input className="formm" type="password" value={senha} onChange={(e) => SetSenha(e.target.value)} /><br />
                        <div className="btncad">
                            <button type="submit">Cadastrar</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>


    )
}