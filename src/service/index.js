import { products } from '../data/products.js';

const returnProductList = () => {
    return products;
};

const filterCategory = (category) => {
    return products.filter((item) => item.category === category);
};

const filterEntry = filterCategory("Entradas");

const searchItem = (typedText) => {
    if (typedText.length >= 2) {
        return (
            products.filter((item) => 
                item.description.toLowerCase().includes(typedText.toLowerCase()) ||
                item.name.toLowerCase().includes(typedText.toLowerCase())
            )
        )
    } else {
        return filterCategory("Entradas");
    }
};

export { returnProductList, filterCategory, searchItem, filterEntry };