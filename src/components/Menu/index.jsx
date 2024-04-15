import './style.css';
import { products } from '../../data/products';
import Card from '../Cardmenu/';

export default function Menu() {
    return (
        <section className='menu-section'>
            <h3>Cardápio</h3>
            <div className='card-container'>
                {products.map((item) => (
                    <Card
                        key={item.id}
                        image={item.image}
                        name={item.name}
                        category={item.category}
                        description={item.description}
                        price={item.price}
                    />
                ))
                }
            </div>
        </section>
    );
}