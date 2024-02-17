import { Box, Divider, Grid, Typography } from "@mui/material";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ id, nombre, precio, descripcion, cantidad, imageURL, categoria}) => {
    const { addProductToCarrito } = useContext(CartContext);
    
    const addToCarrito = (quantity) => {
        addProductToCarrito({
            id: id,
            producto: nombre,
            pricePerUnit: precio,
            quantity: quantity,
            priceTotal: quantity * precio
        })
    }

    return (
        <Grid container 
            sx={{               
                width: '80%',
                mt: 5, 
                border: '2px solid #43a047'
            }}
        >        
            <Grid item xs={ 12 } sm={ 6 }>
                <Box sx={{ width: '100%'}}>
                    <Box
                        component="img"
                        alt={ nombre }                                       
                        src={ imageURL }
                        sx={{ width: '100%', height: '100%', objectFit: 'cover'}}
                    />
                </Box>
            </Grid>
            
            <Grid item xs={ 12 } sm={ 6 } 
                sx={{
                    p: 2,               
                    backgroundColor: '#ebebeb'
                }}
            >   
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 5                        
                    }}
                >
                    <Typography gutterBottom variant="h4" component="div">
                        { nombre }
                    </Typography>
                    <Divider />
                    <Typography variant="subtitle1" color="text.secondary">
                        Descripción: { descripcion || ''} 
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Categoría: { categoria }
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Precio: ${ precio } 
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Stock: { cantidad }
                    </Typography>
                    <Typography component='footer'>
                        <ItemCount stock={cantidad} addToCarrito={addToCarrito} />
                    </Typography>
                </Box>             
            </Grid>                       
        </Grid>
    )
}

export default ItemDetail;