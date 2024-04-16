import './App.css';
import { useState } from 'react';
import { returnProductList, filterCategory, filterEntry, searchItem } from './service/index.js';
import Banner from './components/Banner';
import Menu from './components/Menu';

function App() {
  const [category, setCategory] = useState(filterEntry);
  const [typedText, setTypedText] = useState("");

  const handleFilterCategory = (category) => {
    setCategory(filterCategory(category));
    console.log('botão apertado');
  };

  const handleSearchItem = (text) => {
    setTypedText(text);
    console.log(text);
  };



  return (
    <>
      <Banner
        entradas={() => handleFilterCategory("Entradas")}
        massas={() => handleFilterCategory("Massas")}
        carnes={() => handleFilterCategory("Carnes")}
        bebidas={() => handleFilterCategory("Bebidas")}
        saladas={() => handleFilterCategory("Saladas")}
        sobremesas={() => handleFilterCategory("Sobremesas")}

        typedText={typedText}
        handleSearchItem={((e) => handleSearchItem(e.target.value))}
      />
      <Menu categoryItems={category} />
    </>


  );
}

export default App;
