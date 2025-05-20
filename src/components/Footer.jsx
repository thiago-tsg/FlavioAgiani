//styles
import '../styles/index.scss'
import '../styles/Footer.scss'

const Footer = () => {
    return (
        <footer>
            <div className='menu-footer-container flex gap-xxl container'>
                <div className='menu-footer'>
                    <h2>Menu</h2>
                    <ul>
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Disponíveis</a></li>
                        <li><a href="#">Orçamento</a></li>
                        <li><a href="#">Sobre</a></li>
                        <li><a href="#">Estúdio</a></li>
                    </ul>
                </div>
                <div className='icons-footer'>
                    <h2>Rede Sociais</h2>
                    <ul className='flex-center gap-md'>
                        <li><a href="#"><img src="/icons/instagram.svg" alt="" /></a></li>
                        <li><a href="#"><img src="/icons/facebook.svg" alt="" /></a></li>
                        <li><a href="#"><img src="/icons/youtube.svg" alt="" /></a></li>
                        <li><a href="#"><img src="/icons/whatsapp-black.svg" alt="" /></a></li>
                        <li><a href="#"><img src="/icons/linkedin.svg" alt="" /></a></li>
                    </ul>
                </div>
            </div>
            <p>Copyright © 2025 Flávio Agiani - Tattoo Artist – Todos os direitos reservados. </p>
        </footer>
    )
}

export default Footer