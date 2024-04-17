import './App.css';
import { useState } from 'react';
import { filterCategory, filterEntry, searchItem } from './service/index.js';
import Banner from './components/Banner';
import Menu from './components/Menu';

function App() {
  const [category, setCategory] = useState(filterEntry);
  const [typedText, setTypedText] = useState("");
  const [clickButton, setClickButton] = useState("Entradas");


  const handleFilterCategory = (category) => {
    setCategory(filterCategory(category));
    setClickButton(category)
    setTypedText("");
    console.log(clickButton)
  };

  const handleSearchItem = (text) => {
    setTypedText(text);
    setCategory(searchItem(text));
    setClickButton("")
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
        clickButton={clickButton}

        typedText={typedText}
        handleSearchItem={((e) => handleSearchItem(e.target.value))}
      />
      <Menu categoryItems={category} />
    </>


  );
}

export default App;
