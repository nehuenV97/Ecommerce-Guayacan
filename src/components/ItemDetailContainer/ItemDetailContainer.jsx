import { Box, CircularProgress } from "@mui/material"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

import { doc, getDoc} from "firebase/firestore"
import { db } from "../../firebase/config";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(false)

    const { itemId } = useParams(); 

    useEffect(() => {
        setLoading(true);
        const docRef = doc(db, "productos", itemId)

        getDoc(docRef)
            .then((resp) => {
                setProduct(
                    { ...resp.data(), id: resp.id}
                )
            })
            .finally(() => {
                setLoading(false);
            })
    }, [itemId])

    return (
        <Box 
            sx={{
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center',
                p: 1,
                height: '80%'
            }}
        >
            {
                loading ?
                <CircularProgress sx={{margin: 5}}/>
                :
                <ItemDetail {...product} />
            }
        </Box>
    )
}

export default ItemDetailContainer;