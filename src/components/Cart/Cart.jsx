import { Box, Button, IconButton, Typography } from "@mui/material"
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import DeleteIcon from '@mui/icons-material/Delete';
import { DETALLE_COMPRA, DETALLE_ITEM, TITULO_ITEM } from "./estilos-carrito";
import { NavLink } from "react-router-dom";

const Cart = () => {
    const { carrito, vaciarCarrito, precioTotal, removeItem } = useContext(CartContext);

    if (carrito.length <= 0) {
        return (
            <Box 
                sx={{
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    margin: 2, 
                    gap: 2, 
                    textAlign: 'center'
                }}
            >
                <Typography variant='h4'>No hay productos en el carrito</Typography>
                <Button component={NavLink} to='/' variant='contained'>Ir a productos</Button>
            </Box>
        )
    }

    return (
        <Box 
            sx={{
                display: 'flex', 
                justifyContent: 'center', 
                flexDirection: 'column', 
                alignItems: 'center',
                p: 1
            }}
        >
            <Typography variant='h4'>Carrito de compras</Typography>
            {
                carrito.map((prod) => (
                    <Box key={prod.id} sx={DETALLE_COMPRA}>
                        <Box sx={TITULO_ITEM}>
                            <Typography variant='h4'>{prod.producto}</Typography>
                        </Box>
                        <Box sx={DETALLE_ITEM}>
                            <Typography>Cantidad: {prod.quantity}</Typography>
                            <Typography>Precio unitario: ${prod.pricePerUnit}</Typography>
                            <Typography>Precio total: ${prod.priceTotal}</Typography>
                            <IconButton onClick={() => removeItem(prod.id)}>
                                <DeleteIcon />
                            </IconButton>
                        </Box>
                    </Box>
                ))
            }
            <Box 
                sx={{
                    margin: 2, 
                    padding: 2, 
                    boxShadow: '1px 1px 2px 1px gray', 
                    backgroundColor: '#ebebeb', 
                    borderRadius: '5px',
                    textAlign: 'center'
                }}
            >
                <Typography variant='h4'>Precio Final: ${precioTotal()}</Typography>
            </Box>
            <Box 
                sx={{
                    display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent: 'center',
                    alignItems: 'center', 
                    gap: 1, 
                }}
            >
                <Button fullWidth onClick={vaciarCarrito} variant='contained'>Limpiar carrito</Button>
                <Button fullWidth component={NavLink} to='/checkout' variant='contained'>Checkout</Button>
            </Box>
        </Box>
    )
}

export default Cart;