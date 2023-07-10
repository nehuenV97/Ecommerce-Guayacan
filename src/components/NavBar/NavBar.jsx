import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
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
    return (
        <>
            <AppBar position="static" sx={{backgroundColor: 'green'}}>
                <Toolbar>
                    <Typography variant="h3" component={NavLink} to='/' sx={{flexGrow: 1, textDecoration: 'none', "&:visited": {color: '#fff'}}}>Guayacan</Typography>
                    <Box display={'flex'} gap={2}>
                        {
                            navLinks.map((item) => (
                                <Button key={item.titulo} component={NavLink} to={item.path} variant='filled'>{ item.titulo }</Button>
                            ))
                        }
                        <CartWidget cartQuantity={5}/>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default NavBar;