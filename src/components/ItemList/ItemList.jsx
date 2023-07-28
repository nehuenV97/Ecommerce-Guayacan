import { Box } from "@mui/material";
import Item from "../Item/Item";

const ItemList = ({products}) => {
    return (
        <Box sx={{display: 'flex', justifyContent: 'center', flexDirection: 'row', gap: 3, flexWrap: 'wrap'}}>
            {
                products?.map((item, index) => {
                    return (
                        <Item key={index + item.nombre} id= {item.id} name={item.nombre} price={item.precio} stock={item.cantidad} imageURL={item.imageURL} />
                    )
                })
            }
        </Box>
    )
}

export default ItemList;