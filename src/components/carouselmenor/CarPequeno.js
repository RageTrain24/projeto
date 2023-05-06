import Carousel from 'react-bootstrap/Carousel';
import pic1 from '../midia/ft1.jpg'
import pic2 from '../midia/ft2.jpg'
import pic3 from '../midia/ft3.jpg'
import pic4 from '../midia/ft4.jpg'
import pic5 from '../midia/ft5.jpg'
import pic6 from '../midia/ft6.jpg'
import React from 'react'
import Select from 'react-select'

import './CarPequeno.css'

export default function CarouselPequeno() {
    // BARRA PESQUISA
    const options = [
        { value: 'trabalho', label: 'Direito do Trabalho' },
        { value: 'civil', label: 'Direito Civil' },
        { value: 'previdenciario', label: 'Direito Previdenciário' }
    ]

    const Pesquisa = () => (
        <Select options={options} className='barrapesgeral' placeholder='Especialidade, Nome' />
    )
    // FIM BARRA PESQUISA
    return (
        <div>

            <div className='barrapes'>
                <Pesquisa />
            </div>
            <div className="carouseltudo2">
                <Carousel fade variant="dark" >
                    <Carousel.Item className='carouseltamanho2' interval={8000}>
                        <img
                            src={pic1}
                            alt="Primeira foto"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img

                            src={pic2}
                            alt="Segunda foto"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img

                            src={pic3}
                            alt="Terceira foto"
                        />


                    </Carousel.Item>
                    <Carousel.Item>
                        <img

                            src={pic4}
                            alt="Terceira foto"
                        />


                    </Carousel.Item>
                    <Carousel.Item>
                        <img

                            src={pic5}
                            alt="Terceira foto"
                        />


                    </Carousel.Item>
                    <Carousel.Item>
                        <img

                            src={pic6}
                            alt="Terceira foto"
                        />

                    </Carousel.Item>

                </Carousel>
                {/* INVOCANDO BARRA PESQUISA */}

            </div>
        </div>

    );
}
