import { Box } from "@mui/material"
import { useEffect, useState } from "react";
import { getProductById } from "../../asyncMock";
import ItemDetail from "../../components/ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    useEffect(() => {
        getProductById('1')
        .then(res => {
            setProduct(res)
        })
        .catch(error => {
            console.error(error)
        })
    }, [])

    return (
        <Box>
            <ItemDetail {...product} />    
        </Box>
    )
}

export default ItemDetailContainer;