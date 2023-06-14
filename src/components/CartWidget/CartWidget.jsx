import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Typography } from '@mui/material';

const CartWidget = () => {
    return (
        <Typography variant="h4">
            <ShoppingCartIcon /> 0
        </Typography>
    )
}

export default CartWidget;