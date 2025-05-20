//Styles
import '../styles/index.scss';
import '../styles/Orcamento.scss';

const Orcamento = () => {
  return (
    <section className='orcamento-container'>
      <p className='text-titu-orcamento'>
        Obrigado por se interessar pelo meu trabalho!
      </p>
      <p className='text-titu-orcamento'>
        Para que eu possa elaborar um orçamento preciso e agilizar seu atendimento, siga as instruções abaixo ao entrar em contato.
      </p>
      <article className='flex-center gap-xxl orcamento-paremetro container'>
        <div>
          <p className='orcamento-paremetro-text'>
            <strong>1. Descrição do projeto –</strong>Explique sua ideia de forma breve, mas detalhada, e envie imagens de referência, se tiver.
          </p>
          <p className='orcamento-paremetro-text'>
            <strong>2. Tamanho –</strong>Informe as medidas aproximadas em centímetros. Se não tiver uma régua por perto, pode usar objetos comuns como referência de medida:
          </p>
        </div>
        <div className='orcamento-paremetr-img'>
          <img src="/public/orcamento/objetos.png" alt="" />
        </div>
      </article>
      <article className='flex-center gap-xxl orcamento-modelo container'>
        <div>
          <p className='orcamento-modelo-text'>
            <strong>3. Local do corpo –</strong>Especifique a região onde deseja tatuar.
          </p>
          <p className='orcamento-modelo-text'>
            <strong>4. Foto da área –</strong>Tire uma foto bem iluminada e de boa distância do local onde deseja tatuar. Se possível, marque o local desejado e inclua uma referência de tamanho:
          </p>
          <p className='orcamento-modelo-text'>
            <strong>5. Estilo e cores –</strong> Prefere colorida ou em preto e cinza?
          </p>
          <p className='orcamento-modelo-text'>
            <strong>6. Disponibilidade de datas –</strong>Caso tenha uma data específica em mente, informe. Se possível, tenha flexibilidade.
          </p>
          <p className='orcamento-modelo-text'>
            Após enviar essas informações, entrarei em contato em até<strong> 48 horas </strong>para seguir com o orçamento e agendamento.
          </p>
        </div>
        <div className='flex gap-xxl orcamento-modelo-corpo'>
          <div>
            <img src="/public/orcamento/modelo1.png" alt="" />
          </div>
          <div>
            <img src="/public/orcamento/modelo2.png" alt="" />
          </div>
        </div>
      </article>
      <p className='text-bottom'>
        Agora que você já sabe quais informações precisa ter para o seu orçamento, é so clicar no link abaixo para darmos continuidade na sua ideia!
      </p>
      <div className='flex-center'>
        <button className='btn'>Contato</button>
      </div>
    </section>
  )
}

export default Orcamento