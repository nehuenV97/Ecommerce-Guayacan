import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const Item = ({ id, name, price, description, stock, imageURL}) => {
    return (
        <Card sx={{ 
            maxWidth: 345,
            transition: "0.2s",
            "&:hover": {
                transform: "scale(1.05)",
            },
        }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt={ name }
                    height="140"
                    image={ imageURL }
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        { name }
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Precio: { price }
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Stock: { stock }
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small">Comprar</Button>
                <Button size="small" component={NavLink} to={`/item/${id}`}>Ver detalle</Button>           
            </CardActions>
        </Card>
    )
}

export default Item;