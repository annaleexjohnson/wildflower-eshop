import { createContext, useState } from "react";

const ProductContext = createContext();

export function ProductProvider({children}) {
    const [items, setItems] = useState([]);
    const addToCart = (name, price, image, rating) => {
        setItems(prevState => [...prevState, {name, price, image, rating}]);
    };

    const removeFromCart = ({item}) => {
        setItems(items.filter((cartItem)=>{
            return cartItem !== item
        }))
    }

    const subtotalPrice = items.reduce((total, currentValue) => total = total + currentValue.price, 0)

    return (
        <ProductContext.Provider value={{ items, addToCart, removeFromCart, subtotalPrice }}>
            {children}
        </ProductContext.Provider>   
    )
}

export default ProductContext;