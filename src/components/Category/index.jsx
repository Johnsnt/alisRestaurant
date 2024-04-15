import './style.css';
import filterCategory from '../../service'

export default function Menu({ entradas, massas, carnes, bebidas, saladas, sobremesas}) {
    return (
    <div className='button-box'>
        <button>Entradas</button>
        <button>Massas</button>
        <button>Carnes</button>
        <button>Bebidas</button>
        <button>Saladas</button>
        <button>Sobremesas</button>
    </div>
    )
}