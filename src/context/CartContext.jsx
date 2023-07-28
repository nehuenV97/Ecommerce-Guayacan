import { createContext, useState } from "react";

export const CartContext = createContext();
// const { Provider } = CartContext;

const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);

    const addProductToCarrito = (product) => {
        const estaEnElCarrito = carrito.find((item) => item.id === product.id);

        if (estaEnElCarrito) {
            return;
        }
        setCarrito([...carrito, product])
    }

    const vaciarCarrito = () => {
        setCarrito([]);
    }

    const removeItem = (itemId) => {
        const carritoUpdated = carrito.filter((item) => item.id !== itemId);
        setCarrito(carritoUpdated);
    };
    
    const estaEnCarrito = (itemId) => carrito.some((item) => item.id === itemId);

    const precioTotal = () => {
        return carrito.reduce((acc, prod) => acc + prod.pricePerUnit * prod.quantity, 0);
    }

    return (
        <CartContext.Provider value={{carrito, addProductToCarrito, cartQuantity: carrito.length, vaciarCarrito, removeItem, precioTotal, estaEnCarrito}}>
            { children }
        </CartContext.Provider>
    )
}

export default CartProvider;