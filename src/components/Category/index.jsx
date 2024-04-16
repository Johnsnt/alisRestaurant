import './style.css';

export default function Menu({entradas, massas, carnes, bebidas, saladas, sobremesas}) {
    
    return (
    <div className='button-box'>
        <button onClick={entradas}
        >Entradas</button>
        <button onClick={massas}>Massas</button>
        <button onClick={carnes}>Carnes</button>
        <button onClick={bebidas}>Bebidas</button>
        <button onClick={saladas}>Saladas</button>
        <button onClick={sobremesas}>Sobremesas</button>
    </div>
    )
}