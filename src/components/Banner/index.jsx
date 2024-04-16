import './style.css';
import Category from '../Category/';
import Search from '../Search/';

export default function Banner( {entradas, massas, carnes, bebidas, saladas, sobremesas, typedText, handleSearchItem}) {
return (
    <section className='banner-section'>
        <div className='title'>
            <h1>Ali's Restaurant</h1>
            <p>De pratos clássicos a criações surpreendentes, nosso cardápio é um requinte de sabores refinados</p>
        </div>
        <div className='row-divider'></div>
        <div className='center-box'>
            <Search typedText2={typedText} handleSearchItem2={handleSearchItem} />
            <Category 
            entradas={entradas}
            massas={massas}
            carnes={carnes}
            bebidas={bebidas}
            saladas={saladas}
            sobremesas={sobremesas}

                // carnes={() => handleFilterCategory("Carnes")}
                // bebidas={() => handleFilterCategory("Bebidas")}
                // saladas={() => handleFilterCategory("Saladas")}
                // sobremesas={() => handleFilterCategory("Sobremesas")}
            />
        </div>
    </section>
);
}
