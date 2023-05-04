import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Inicio from './pages/Inicio/Inicio'
import Quemsomos from './pages/quemsomos/quemsomos'
import Parceiros from './pages/parcerios/parceiros'
import Login from './pages/login/login'
import Cadastro from './pages/Cadastro/Cadastro'

export default function Rotas() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Inicio />} />
                <Route path='/quemsomos' element={<Quemsomos />} />
                <Route path='/parceiros' element={<Parceiros />} />
                <Route path='/login' element={<Login />} />
                <Route path='/cadastro' element={<Cadastro />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}