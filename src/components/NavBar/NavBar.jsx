import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import CartWidget from "../CartWidget/CartWidget";

const navLinks = [
    {
        titulo: 'Productos',
        path: '/'
    },
    {
        titulo: 'Pilusos',
        path: '/category/pilusos'
    },
    {
        titulo: 'Bolsos',
        path: '/category/bolsos'
    },
    {
        titulo: 'Cintos',
        path: '/category/cintos'
    }
]

const NavBar = () => {
    const { cartQuantity } = useContext(CartContext);

    return (
        <>
            <AppBar position="static" sx={{backgroundColor: '#43a047'}}>
                <Toolbar>
                    <Typography variant="h3" component={Link} to='/' sx={{flexGrow: 1, textDecoration: 'none', "&:visited": {color: '#fff'}, fontWeight: '500'}}>Guayacan</Typography>
                    <Box display={'flex'} gap={2}>
                        {
                            navLinks.map((item) => (
                                <Button key={item.titulo} component={NavLink} to={item.path} variant='filled'>{ item.titulo }</Button>
                            ))
                        }
                        {
                            cartQuantity === 0 ?
                                null
                            :
                                <CartWidget cartQuantity={cartQuantity}/>
                        }
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default NavBar;