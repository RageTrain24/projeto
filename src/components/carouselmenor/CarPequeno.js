import Carousel from 'react-bootstrap/Carousel';
import adv1 from '../midia/adv1.jpg'
import adv2 from '../midia/adv2.jpg'
import adv3 from '../midia/adv3.jpg'
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
        <div className='barrapesgeral'>
            <Select options={options} className='botpesq' placeholder='Especialidade, Nome' />
        </div>
    )
    // FIM BARRA PESQUISA
    return (
        <div>
            <div>
                <Pesquisa />
            </div>
            <div className="carouseltudo2">
                <Carousel fade variant="dark" >
                    <Carousel.Item className='carouseltamanho2' interval={8000}>
                        <img
                            src={adv1}
                            alt="Primeira foto"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img

                            src={adv2}
                            alt="Segunda foto"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img

                            src={adv3}
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
