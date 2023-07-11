import { Box, Typography, Button } from "@mui/material";
import { useState } from "react";

const ItemCount = () => {
    
    const [counter, setCounter] = useState(0);
    
    const decrement = () => {
        if (counter <= 0) {
            return
        }
        return setCounter(counter - 1)
    }
    
    const increment = () => {
        setCounter(counter + 1);
    }

    return (
        <Box>
            <Box sx={{display: 'flex', flexDirection: 'row', gap: 2, justifyContent: 'center'}}>
                <Button variant='outlined' onClick={decrement}>-</Button>
                <Typography variant="h5">Cantidad: {counter}</Typography>                
                <Button variant='outlined' onClick={increment}>+</Button>                
            </Box>
            <Box sx={{display: 'flex', justifyContent: 'center', margin: 2}}>
                <Button variant='contained'>Agregar al carrito</Button>
            </Box>
        </Box>
    )
}

export default ItemCount;