import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";

const ItemDetail = ({ id, name, price, description, stock, imageURL, category}) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
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
                        Categoría: { category }
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Precio: { price }
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Stock: { stock }
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Descripción: { description || ''}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default ItemDetail;