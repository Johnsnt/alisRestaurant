import { products } from '../data/products.js';

const returnProductList = () => {
    return products;
};

const filterCategory = (category) => {
    return products.filter((item) => item.category === category);
};

const filterEntry = filterCategory("Entradas");

const searchItem = (typedText) => {
    if (typedText.length > 3) {
        return (
            products.filter((item) => {
                item.description.toLowerCase().replace(/\s/g, "").includes(typedText.toLowerCase()) ||
                    item.name.toLowerCase().replace(/\s/g, "").includes(typedText.toLowerCase());
            })
        );
    } else {
        return products;
    }
};

export { returnProductList, filterCategory, searchItem };