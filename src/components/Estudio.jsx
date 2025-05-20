//Styles
import '../styles/index.scss';
import '../styles/Estudio.scss';

const Estudio = () => {
  return (
    <section className='section-estudio flex'>
      <article className='flex container-titu-estudio'>
        <p className='titu-estudio'>
          Onde a  Arte Ganha Vida!
        </p>
        <p className='titu-estudio'>
          Com um ambiente <strong>acolhedor</strong> e <strong>sofisticado</strong>, nosso estúdio foi pensado para proporcionar uma experiência <strong>única</strong> e <strong>confortável</strong> a cada cliente
        </p>
        <div className='flex-center gap-xxl estudio-container container'>
          <div>
            <img src="/estudio/estudio1.jpg" alt="" />
          </div>
          <div>
            <p>
              <strong>Sobre:</strong>
            </p>
            <p
            >No <strong>Studio All Black</strong>, idealizado por <i>Igor Brandão</i> e <i>Marcelo Yoneama</i>, você encontra um ambiente <strong>tranquilo</strong> e <strong>sofisticado</strong>, projetado para oferecer <strong>conforto</strong> e <strong>inspiração</strong>. Com detalhes cuidadosamente selecionados, mesclando uma estética <strong>industrial, refinada</strong> e <strong>minimalista</strong>! Quadros e plantas, ajudam a formar um espaço que favoreça a <strong>concentração</strong> e a <strong>criatividade</strong>, com um toque de <strong>sofisticação</strong>, criando uma atmosfera equilibrada entre <strong>urbano</strong> e <strong>acolhedor</strong>.
            </p>
          </div>
        </div>
        <p className='text-estudio container'>
          Além disso, o estúdio tem um amplo espaço decorado com elementos modernos e artísticos, que unem sofisticação e aconchego. De paredes claras, plantas decorativas e muita Arte e Calligraffiti, cada canto é pensado para proporcionar tranquilidade e conforto durante todo o processo da tatuagem.
        </p>
        <div className='flex-center gap-xxl estudio-container container'>
          <div>
            <p>
              <strong>A Experiência no Estúdio:</strong>
            </p>
            <p>
              No nosso estúdio, você será recebido com um <strong>atendimento personalizado</strong>, que vai desde uma <strong>consultoria</strong> para escolha do design até um <strong>cafezinho</strong>, ou  um <strong>chá caso  prefira</strong>, para deixar o ambiente ainda mais <strong>acolhedor</strong> antes da sua tatuagem. Cada cliente é tratado com <strong>atenção e respeito</strong>, garantindo que se sinta <strong>à vontade</strong> durante <strong>todo o processo.</strong>
            </p>
          </div>
          <div>
            <img src="/estudio/estudio2.jpg" alt="" />
          </div>
        </div>
        <p className='text-estudio container'>
          <strong>Nossa equipe</strong> é composta por mais de <strong>14 profissionais</strong> altamente qualificados, incluindo tatuadores especializados em <strong>diferentes estilos</strong>, uma <strong>Lash Designer</strong> e uma <strong>Body Piercer</strong>.
        </p>
        <div className='flex-center gap-xxl estudio-container container'>
          <div>
            <img src="/estudio/tintas.jpg" alt="" />
          </div>
          <div>
            <p>
              <strong>Diferenciais:</strong>
            </p>
            <p>
              Trabalhamos com os <strong>melhores materiais</strong> do mercado, assegurando a <strong>qualidade</strong> e a <strong>segurança</strong> em todas as tatuagens. Além disso, nosso estúdio é projetado para garantir uma <strong>experiência tranquila</strong>, com iluminação adequada, ambiente climatizado e um <strong>atendimento impecável</strong>.
            </p>
          </div>
        </div>
      </article>
      <div className='flex-center gap-xxl container mapa'>
        <div className='iframe'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.597591078438!2d-46.77462962506818!3d-23.618760678760424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce54695898d5f9%3A0xc999e1ee6fc22b95!2sEstr.%20S%C3%A3o%20Francisco%2C%201769%20-%20Vila%20Sonia%20do%20Taboao%2C%20Tabo%C3%A3o%20da%20Serra%20-%20SP%2C%2006765-465!5e0!3m2!1sen!2sbr!4v1747693928358!5m2!1sen!2sbr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div>
          <p>
            Localização e Contato:
          </p>
          <p>Estamos localizados na <address><strong>Estr. São Francisco, 1769 - Vila Sônia do Taboão, Taboão da Serra - SP. CEP: 06764-290</strong></address></p>
          <p>
            Para agendar seu horário ou tirar dúvidas, entre em contato conosco pelo:
          </p>
          <div className='flex gap-md botao-estudio'>
            <button className='btn'>WhatsApp</button>
            <button className='btn'>Instagram</button>
          </div>
        </div>
      </div>
      <div className='marcas'>
        <p className='container text-marcas'>
          📌 "As marcas exibidas correspondem aos produtos que utilizo no meu trabalho. Não possuo vínculo, patrocínio ou parceria com essas empresas."
        </p>

        <div className='flex-center marcas-img'>
          <img src="/marcas.png" alt="" />
        </div>
      </div>
    </section>
  )
}

export default Estudio