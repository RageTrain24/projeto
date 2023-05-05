import React from 'react'
import Select from 'react-select'
import './DropPesquisa.css'

export default function DropPesquisa() {
    const options = [
        { value: 'trabalho', label: 'Direito do Trabalho' },
        { value: 'civil', label: 'Direito Civil' },
        { value: 'previdenciario', label: 'Direito Previdenciário' }
    ]

    const Pesquisa = () => (
        <Select options={options} className='barrapes' placeholder='Especialidade, Nome' />
    )
    return (
        <div className='pesqGeral'>
            <Pesquisa />
            <button className="botPesq">Pesquisar
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="tamm">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>

            </button>
        </div>
    )

}
