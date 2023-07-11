import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ id, nombre, precio, descripcion, cantidad, imageURL, categoria}) => {
    return (
        <Card sx={{ display: 'flex', width: 1000}}>            
                <CardMedia
                    component="img"
                    alt={ nombre }
                    height="450"
                    width="450"
                    image={ imageURL }
                />                
                <CardContent sx={{display: 'flex', flexDirection: 'column', gap: 3, minWidth: 500}}>
                    <Typography gutterBottom variant="h3" component="div">
                        { nombre }
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                        Descripción: { descripcion || ''} 
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Categoría: { categoria }
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Precio: $ { precio } 
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Stock: { cantidad }
                    </Typography>
                    <Typography component='footer'>
                        <ItemCount />
                    </Typography>
                </CardContent>                       
        </Card>
    )
}

export default ItemDetail;