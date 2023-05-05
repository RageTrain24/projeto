import CarouselPequeno from "../../components/carouselmenor/CarPequeno";
import DropPesquisa from "../../components/droppesquisa/DropPesquisa";
import './Inicial.css'


export default function Home() {
    return (
        <div>
            <div className='fundo'>
                <div className='conteudo'>
                    <div className='inicio'>
                        <h2>Agende agora sua consulta</h2>
                        <h5>Conte com nossos mais de 50 mil advogados para te ajudar!</h5>
                    </div>
                </div>
            </div>
            <div>

                <DropPesquisa />
                <CarouselPequeno />

            </div>
        </div>
    )
}