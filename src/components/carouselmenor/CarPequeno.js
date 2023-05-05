import Carousel from 'react-bootstrap/Carousel';
import pic1 from '../midia/ft1.jpg'
import pic2 from '../midia/ft2.jpg'
import pic3 from '../midia/ft3.jpg'
import './CarPequeno.css'

export default function CarouselPequeno() {
    return (

        <Carousel fade variant="dark" className='carouseltudo2'>
            <Carousel.Item className='carouseltamanho2' interval={1000}>
                <img
                    src={pic1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img

                    src={pic2}
                    alt="Second slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img

                    src={pic3}
                    alt="Third slide"
                />


            </Carousel.Item>
        </Carousel>
    );
}
