import './QuemSomos.css'
import Ic from '../../components/midia/ic.jpg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function Quemsomos() {
    return (
        <Container fluid>
            <Row>
                <Col xs={6}>
                    <h1>Sobre a gente:</h1>
                    <p> Fundada em 2023, a RGET é uma das pioneiras em automação de consultas jurídicas no Brasil. Nossa empresa tem o objetivo de criar soluções em software para o exercício da advocacia. Do levantamento das necessidades do cliente até a finalização do projeto, nosso time tem como objetivo a agilidade e o profissionalismo.</p>
                    <p>Queremos que o nosso cliente encontre o advogado perfeito àquelas suas necessidades e marque a sua consulta com muito mais facilidade e praticidade. A jornada de um processo pode ser desgastante, mas é por isso que estamos aqui: para ajudá-lo a encontrar o melhor atendimento possível!Também ajudamos os advogados a administrarem as suas rotinas e a construírem as suas reputações na internet.</p>
                </Col>
                <Col className="contfot">
                    <p>"Com a nossa solução, os advogados podem não apenas melhorar a sua presença on-line, mas também dedicar tempo ao que realmente importa: o resultado do processo."</p><br /><br />
                    <img src={Ic} alt="Icaro" className='ftic' />
                    <h2 className='assinatura'>Ícaro Bertapeli Carneiro</h2>
                </Col>
            </Row>
        </Container>




    )
}