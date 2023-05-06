import CarouselPequeno from "../../components/carouselmenor/CarPequeno";
import './Inicial.css'


export default function Home() {
    return (
        <div>
            <div className="conttitulo">
                <h2>Agende agora sua consulta</h2>
            </div>
            <h5 className="contitulo">Conte com nossos mais de 50 mil advogados para te ajudar!</h5>
            <CarouselPequeno />

        </div>
    )
}