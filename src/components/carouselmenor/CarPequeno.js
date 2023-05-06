import Carousel from 'react-bootstrap/Carousel';
import pic1 from '../midia/ft1.jpg'
import pic2 from '../midia/ft2.jpg'
import pic3 from '../midia/ft3.jpg'
import pic4 from '../midia/ft4.jpg'
import pic5 from '../midia/ft5.jpg'
import pic6 from '../midia/ft6.jpg'

import './CarPequeno.css'

export default function CarouselPequeno() {
    return (

        <Carousel fade variant="dark" className='carouseltudo2'>
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
    );
}
