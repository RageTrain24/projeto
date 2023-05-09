import React, { useState } from 'react'
import './login.css'

export default function Login() {
    const [email, SetEmail] = useState('')
    const [senha, SetSenha] = useState('')

    function insertLogin(e) {
        e.preventDefault()
        if (email === '' || senha === '') {
            alert('Campos em branco')
            return
        }

        alert(`Nome: ${email} \nSenha: ${senha}`)
    }

    return (
        <div className='fundo'>
            <h1>Faça seu Login abaixo:</h1>
            <div className='logingeral'>
                <div className='login'>
                    <form onSubmit={insertLogin}>
                        <label>E-mail: </label>
                        <input type="email" value={email} onChange={(e) => SetEmail(e.target.value)} /><br />
                        <label>Senha: </label>
                        <input type="password" value={senha} onChange={(e) => SetSenha(e.target.value)} /><br />
                        <div className='btn'>
                            <button type='submit'>Entrar</button>
                        </div>
                        <div className="esqueci">
                        <a href="#">Esqueci minha senha</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}