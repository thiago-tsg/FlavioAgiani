// Header.jsx

import { Link, useLocation } from 'react-router-dom'

// Styles
import '../styles/index.scss'
import '../styles/Header.scss'

const Header = () => {
    const location = useLocation()

    // Define o background conforme a rota
    const getHeaderClass = () => {
        switch (location.pathname) {
            case '/disponiveis':
                return 'header-bg-disponiveis'
            case '/orcamento':
                return 'header-bg-orcamento'
            case '/sobre':
                return 'header-bg-sobre'
            case '/estudio':
                return 'header-bg-estudio'
            default:
                return 'header-bg-home'
        }
    }

    // Define o título alternativo para cada rota (se não for a home)
    const getPageTitle = () => {
        switch (location.pathname) {
            case '/disponiveis':
                return 'Disponíveis'
            case '/orcamento':
                return 'Orçamento'
            case '/sobre':
                return 'Sobre'
            case '/estudio':
                return 'Estúdio'
            default:
                return null
        }
    }

    const pageTitle = getPageTitle()

    return (
        <header className={`container ${getHeaderClass()}`}>
            <div className='menu-container space-between'>
                <div className='logo-header-container flex gap-md'>
                    <div className='logo-header'>
                        <img src="/public/logo.jpeg" alt="Logo Flávio Agiani" />
                    </div>
                    <h2>Flávio Agiani</h2>
                </div>
                <nav className='menu'>
                    <ul className='flex gap-md'>
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/disponiveis">Disponíveis</Link></li>
                        <li><Link to="/orcamento">Orçamento</Link></li>
                        <li><Link to="/sobre">Sobre</Link></li>
                        <li><Link to="/estudio">Estúdio</Link></li>
                    </ul>
                </nav>
            </div>

            {/* Exibe info padrão apenas na home, senão mostra nome da página */}
            {
                pageTitle === null ? (
                    <div className='info-header flex'>
                        <h1>Galeria de Artes</h1>
                        <p>Por: Flávio Agiani</p>
                        <span>Tatuador paulistano especializado em Fine Art, Micro Realismo e Florais.</span>
                    </div>
                ) : (
                    <div className='info-header flex'>
                        <p className="page-title">{pageTitle}</p>
                    </div>
                )
            }
        </header>
    )
}

export default Header
