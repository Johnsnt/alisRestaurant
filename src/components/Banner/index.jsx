import './style.css';
import Category from '../Category/';
import Search from '../Search/';

export default function Banner() {
return (
    <section className='banner-section'>
        <div className='title'>
            <h1>Ali's Restaurant</h1>
            <p>De pratos clássicos a criações surpreendentes, nosso cardápio é um requinte de sabores refinados</p>
        </div>
        <div className='row-divider'></div>
        <div className='center-box'>
            <Category
                // entradas={() => handleFilterCategory("Entradas")}
                // massas={() => handleFilterCategory("Massas")}
                // carnes={() => handleFilterCategory("Carnes")}
                // bebidas={() => handleFilterCategory("Bebidas")}
                // saladas={() => handleFilterCategory("Saladas")}
                // sobremesas={() => handleFilterCategory("Sobremesas")}
            />
            <Search />
        </div>
    </section>
);
}
