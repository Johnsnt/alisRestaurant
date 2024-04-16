import './style.css';

export default function Search({typedText2, handleSearchItem2}) {
    return (
    <div className='search'>
        <img src='https://cdn-icons-png.flaticon.com/512/2866/2866321.png' alt='lupa' />
        <input 
        type='text'
        value={typedText2}
        onChange={handleSearchItem2}
        placeholder='Pesquise aqui um dos pratos do nosso cardápio'

        />
    </div>
    )
}