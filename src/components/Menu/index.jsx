import './style.css';
import Card from '../Cardmenu/';

export default function Menu({categoryItems}) {
    return (
        <section className='menu-section'>
            <h3>Cardápio</h3>
            <div className='card-container'>
                {categoryItems.map((item) => (
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