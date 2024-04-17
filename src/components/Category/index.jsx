import './style.css';

export default function Menu({entradas, massas, carnes, bebidas, saladas, sobremesas, clickButton}) {
    
    return (
    <div className='button-box'>
        <button 
        className={clickButton === "Entradas" ? 'on' : 'off'}
        onClick={entradas}
        >Entradas</button>
        <button 
        onClick={massas}
        className={clickButton === "Massas" ? 'on' : 'off'}
        >Massas</button>
        <button 
        onClick={carnes}
        className={clickButton === "Carnes" ? 'on' : 'off'}
        >Carnes</button>
        <button 
        onClick={bebidas}
        className={clickButton === "Bebidas" ? 'on' : 'off'}
        >Bebidas</button>
        <button 
        onClick={saladas}
        className={clickButton === "Saladas" ? 'on' : 'off'}
        >Saladas</button>
        <button 
        onClick={sobremesas}
        className={clickButton === "Sobremesas" ? 'on' : 'off'}
        >Sobremesas</button>
    </div>
    )
}