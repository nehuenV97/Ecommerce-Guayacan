import { Box, CircularProgress, Typography } from "@mui/material";
import { useEffect, useState } from "react";
// import { getProducts, getProductByCategory, toMayuscula } from "../../asyncMock";
import { toMayuscula } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from 'react-router-dom'

import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";

const BOX_TITULO = {
    boxShadow: '1px 0px 2px 1px gray',
    borderRadius: '5px 5px 0px 0px', 
    width: 1275,
    backgroundColor: '#43a047',
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    marginTop: 1
}

const BOX_ITEMLIST = {
    boxShadow: '1px 1px 2px 1px gray',
    width: 1275,
    borderRadius: '0px 0px 5px 5px',
    padding: 3,
    margin: '0px 4px 10px',
    backgroundColor: '#ebebeb'
}

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false)

    const { categoryId } = useParams();    

    useEffect(() => {
        setLoading(true);
        const productosRef = collection(db, "productos");

        const q = categoryId ? query(productosRef, where("categoria", "==", categoryId)) : productosRef;

        getDocs(q)
            .then((resp) => {
                setProducts(
                    resp.docs.map((doc) => {
                        return { ...doc.data(), id: doc.id }
                    })
                )
            })
            .finally(() => {
                setLoading(false);
            })
    }, [categoryId])

    return (
        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center',flexDirection: 'column', mt: 1}}>
            {
                loading ?                
                <CircularProgress sx={{margin: 5}}/>
                :
                <>
                <Box sx={BOX_TITULO}>
                    <Typography variant="h4">{greeting || toMayuscula(categoryId)}</Typography>
                </Box>
                <Box sx={BOX_ITEMLIST}>
                    <ItemList products={products} />
                </Box>
                </>
            }
        </Box>
    )
}

export default ItemListContainer;