import { Card, CardContent, CardMedia, Divider, Typography } from "@mui/material";
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
        <Card sx={{ display: 'flex', width: 1000, border: '2px solid #43a047'}}>        
                <CardMedia
                    component="img"
                    alt={ nombre }
                    height="450"                
                    image={ imageURL }
                />                
                <CardContent sx={{display: 'flex', flexDirection: 'column', gap: 3, minWidth: 500, backgroundColor: '#ebebeb'}}>
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
                </CardContent>                       
        </Card>
    )
}

export default ItemDetail;