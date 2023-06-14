import { Typography } from "@mui/material";

const ItemListContainer = ({ greeting }) => {
    return (
        <>
            <Typography variant="h4">{greeting}</Typography>
        </>
    )
}

export default ItemListContainer;