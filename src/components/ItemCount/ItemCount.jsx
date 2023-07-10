import { Box, Typography, Button } from "@mui/material";
import { useState } from "react";

const ItemCount = () => {
    
    const [counter, setCounter] = useState(0);
    
    const decrement = () => {
        setCounter(counter - 1)
    }
    
    const increment = () => {
        setCounter(counter + 1);
    }

    return (
        <Box>
            <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                <Button variant='contained' color='success' onClick={decrement}>-</Button>
                <Typography variant="h5">Contador: {counter}</Typography>                
                <Button variant='contained' color='success' onClick={increment}>+</Button>                
            </Box>
            <Box sx={{margin: 2}}>
                <Button variant='contained' color='success'>Agregar al carrito</Button>
            </Box>
        </Box>
    )
}

export default ItemCount;