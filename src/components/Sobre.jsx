//Styles
import '../styles/index.scss';
import '../styles/Sobre.scss';

const Sobre = () => {
  return (
    <section className='section-sobre flex-center'>
      <p className='sobre-titu container'>O começo de algo sem fim...</p>
      <article className='sobre-apresentacao flex-center gap-xxl container'>
        <div className="background-overlay" />
        <div>
          <p className='sobre-text'>Desde pequeno, a arte sempre esteve <strong>presente na minha vida</strong>. Cresci em meio a <strong>tintas, pincéis</strong> e <strong>criações</strong>, influenciado por minha <strong>mãe</strong>, uma artista multifacetada. A <strong>tatuagem</strong>, por sua vez, chegou cedo à minha história por volta dos 13 anos, onde já tinha contato com pessoas tatuadas, e assistia a programas de TV na MTV, e via clipes de rock, e achava aquilo o máximo!</p>
          <p className='sobre-text'>Comecei a tatuar em <strong>2018</strong>, movido pela <strong>paixão</strong> e pela vontade de <strong>transformar a pele em tela.</strong> A tatuagem e a arte sempre me convidaram a enxergar outros caminhos, e alcançar <strong>maturidade</strong>e <strong>determinação!</strong></p>
        </div>
        <div className='sobre-img'>
          <img src="/sobre/flavio.jpg" alt="" />
        </div>
      </article>
      <article className='sobre-apresentacao flex-center gap-xxl container'>
        <div className='sobre-img'>
          <img src="/sobre/flavio-tatuando.jpg" alt="" />
        </div>
        <div className='flavio-tatuando'>
          <p>A cada traço, a cada projeto finalizado, entendi que a tatuagem vai muito <strong>além da tinta na pele.</strong> Ela é <strong>expressão, identidade, sentimento.</strong> É <strong>arte viva.</strong> Cada cliente que <strong>confia em mim</strong> carrega não apenas um desenho, mas uma parte da minha <strong>dedicação</strong> e <strong>respeito pelo ofício.</strong> Meu <strong>compromisso</strong> e entregar o meu <strong>melhor</strong>, pois cada tatuagem que faço é um reflexo da minha evolução e do meu <strong>amor por essa arte</strong>.</p>
        </div>
      </article>
      <article className='flex-center gap-xxl container flavio-estudando-container'>
        <div className="flavio-estudando" />
        <div>
          <p className='sobre-text'>Desde pequeno, a arte sempre esteve <strong>presente na minha vida</strong>. Cresci em meio a <strong>tintas, pincéis</strong> e <strong>criações</strong>, influenciado por minha <strong>mãe</strong>, uma artista multifacetada. A <strong>tatuagem</strong>, por sua vez, chegou cedo à minha história por volta dos 13 anos, onde já tinha contato com pessoas tatuadas, e assistia a programas de TV na MTV, e via clipes de rock, e achava aquilo o máximo!</p>
          <p className='sobre-text'>Comecei a tatuar em <strong>2018</strong>, movido pela <strong>paixão</strong> e pela vontade de <strong>transformar a pele em tela.</strong> A tatuagem e a arte sempre me convidaram a enxergar outros caminhos, e alcançar <strong>maturidade</strong>e <strong>determinação!</strong></p>
        </div>
        <div className='sobre-img'>
          <img src="/sobre/flavio-estudando.jpg" alt="" />
        </div>
      </article>
      <p className='text-bottom-sobre container'>"Acredito que a arte tem o poder de transformar vidas. E é isso que eu busco fazer, um traço de cada vez."</p>
    </section>
  )
}

export default Sobre