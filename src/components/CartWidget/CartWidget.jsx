import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge, IconButton } from '@mui/material';
import { NavLink } from 'react-router-dom';

const CartWidget = ({cartQuantity}) => {
    return (
        <IconButton LinkComponent={NavLink} to={'/cart'}>
            <Badge badgeContent={cartQuantity} color="error">
                <ShoppingCartIcon style={{color: '#fff'}} />
            </Badge>
        </IconButton>
    )
}

export default CartWidget;