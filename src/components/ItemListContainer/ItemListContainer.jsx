import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getProducts, getProductByCategory } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
// import Item from "../Item/Item";

import { useParams } from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);

    const { categoryId } = useParams();
    
    useEffect(() => {
        const asyncFunc = categoryId ? getProductByCategory : getProducts;

        asyncFunc(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [categoryId])

    return (
        <Box>
            <Typography variant="h4">{greeting}</Typography>
            <Box sx={{margin: 5}}>
                <ItemList products={products} />
            </Box>
        </Box>
    )
}

export default ItemListContainer;