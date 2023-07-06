import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getProducts } from "../../asyncMock";
import Item from "../Item/Item";

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getProducts()
        .then((res) => {            
            setProducts(res)
        })
        .finally(() => {
            setLoading(false)
        })
    }, [])
    
    return (
        <Box>
            <Typography variant="h4">{greeting}</Typography>
            <Box display={'flex'} justifyContent={'start'} flexDirection={'row'} gap={5}>
            {
                loading ?
                <Typography>Cargando...</Typography>
                :
                products?.map((item, index) => {
                    return (
                        <Item key={index + item.nombre} name={item.nombre} price={item.precio} stock={item.cantidad} imageURL={item.imageURL} />
                    )
                })
            }
        </Box>
        </Box>
    )
}

export default ItemListContainer;