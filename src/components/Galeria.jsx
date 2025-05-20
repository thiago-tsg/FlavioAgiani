// Galeria.jsx
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

// styles
import '../styles/index.scss';
import '../styles/Galeria.scss';

const itemData = [
    {
        img: '/public/galeria/galeria.jpg',
        featured: true,
    },
    {
        img: '/public/galeria/galeria-0.jpg',
    },
    {
        img: '/public/galeria/galeria-1.jpeg',
    },
    {
        img: '/public/galeria/galeria-2.jpeg',
    },
    {
        img: '/public/galeria/galeria-3.jpeg',
    },
    {
        img: '/public/galeria/galeria-4.jpeg',
        featured: true,
    },
    {
        img: '/public/galeria/galeria-5.jpeg',
    },
    {
        img: '/public/galeria/galeria-6.jpeg',
    },
    {
        img: '/public/galeria/galeria-7.jpeg',
    },
    {
        img: '/public/galeria/galeria-8.jpeg',
    },
    {
        img: '/public/galeria/galeria-9.jpeg',
        featured: true,
    },
    {
        img: '/public/galeria/galeria-10.jpeg',
    },
    {
        img: '/public/galeria/galeria-11.jpg',
    },
];

function srcset(image, width, height, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${width * cols}&h=${height * rows
            }&fit=crop&auto=format&dpr=2 2x`,
    };
}

const Galeria = () => {
    return (
        <section className="section-galeria-container">
            <p className="galeria-texto">A pele é a única tela onde a arte pode viver e respirar.</p>

            <div className='galeria-list-container container'>
                <p className="text-color-galeria">Cada traço conta uma história. Meu trabalho une técnica e sensibilidade para criar tatuagens únicas, que se tornam parte de quem as carrega.</p>
                <ImageList
                    className="galeria-lista"
                    variant="quilted"
                    cols={4}
                    rowHeight={200}
                    gap={8}
                >
                    {itemData.map((item, index) => {
                        const cols = item.featured ? 2 : 1;
                        const rows = item.featured ? 2 : 1;
                        return (
                            <ImageListItem key={index} cols={cols} rows={rows}>
                                <img
                                    {...srcset(item.img, 250, 200, rows, cols)}
                                    alt=""
                                    loading="lazy"
                                />
                            </ImageListItem>
                        );
                    })}
                </ImageList>
            </div>

            <p className='container text-marcas'>📌 "As marcas exibidas correspondem aos produtos que utilizo no meu trabalho. Não possuo vínculo, patrocínio ou parceria com essas empresas." </p>

            <div className='flex-center marcas-img'>
                <img src="/public/marcas.png" alt="" />
            </div>
        </section>
    );
};

export default Galeria;
