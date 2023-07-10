import { Box } from "@mui/material"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const { itemId } = useParams();

    useEffect(() => {
        getProductById(itemId)
            .then(response => {
                setProduct(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [itemId])

    return (
        <Box sx={{display: 'flex', justifyContent: 'center', margin: 10}}>
            <ItemDetail {...product} />  
        </Box>
    )
}

export default ItemDetailContainer;