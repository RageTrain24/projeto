import Carousel from 'react-bootstrap/Carousel';
import pic1 from '../midia/ft1.jpg'
import pic2 from '../midia/ft2.jpg'
import pic3 from '../midia/ft3.jpg'
import './Carousel.css'

function CarouselFade() {
    return (

            <Carousel fade variant="dark" className='carouseltudo'>
                <Carousel.Item className='carouseltamanho'>
                    <img
                        src={pic1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Saul Goodman</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img

                        src={pic2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Advogado Paloma</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img

                        src={pic3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Harvey Specter</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
    );
}

export default CarouselFade;