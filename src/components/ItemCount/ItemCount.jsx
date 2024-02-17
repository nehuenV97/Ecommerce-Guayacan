import { Box, Typography, Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ItemCount = ({ stock, addToCarrito }) => {    
    const [counter, setCounter] = useState(1);
    const [clicked, setClicked] = useState(false);
    const navigate = useNavigate();
    
    const handleSubstract = () => {
        if (counter <= 1) {
            return
        }
        return setCounter(counter - 1)
    }
    
    const handleAdd = () => {
        if (counter < stock) {
            setCounter(counter + 1);
        }
    }

    const handleCarrito = () => {
        addToCarrito(counter);
        setCounter(1);
        setClicked(true);
    }

    const handleNavigateCart = () => {
        navigate('/cart')
    }

    return (
        <Box>
            {
                clicked ?
                    <Box sx={{display: 'flex', justifyContent: 'center', margin: 2}}>
                        <Button onClick={handleNavigateCart} variant='contained'>Finalizar Compra</Button>
                    </Box>
                :
                    <>
                        <Box 
                            sx={{
                                display: 'flex', 
                                flexDirection: {xs: 'column', sm: 'row'}, 
                                gap: 2, 
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            <Button variant='contained' onClick={handleSubstract}>-</Button>
                            <Typography variant="h5">Cantidad: {counter}</Typography>                
                            <Button variant='contained' onClick={handleAdd}>+</Button>                
                        </Box>
                        <Box sx={{display: 'flex', justifyContent: 'center', mt: 2}}>
                            <Button onClick={handleCarrito} variant='contained'>Agregar al carrito</Button>
                        </Box>
                    </>
            }
        </Box>
    )
}

export default ItemCount;