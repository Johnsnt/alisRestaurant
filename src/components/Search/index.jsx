import './style.css';

export default function Search({typedText, handleSearchItem}) {
    return (
    <div className='search'>
        <img src='https://cdn-icons-png.flaticon.com/512/2866/2866321.png' alt='lupa' />
        <input 
        type='text'
        value={typedText}
        onChange={handleSearchItem}
        placeholder='Pesquise aqui um dos pratos do nosso cardápio'

        />
    </div>
    )
}