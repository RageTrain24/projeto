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
                        <h3>Advogado Parceiro 1</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img

                        src={pic2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Advogado Parceiro 2</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img

                        src={pic3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Advogado Parceiro 3</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
    );
}

export default CarouselFade;