import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AppBar, Box, Button, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

import { CartContext } from "../../context/CartContext";
import CartWidget from "../CartWidget/CartWidget";
import { NavListDrawer } from "../NavListDrawer/NavListDrawer";

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

    const [ open, setOpen ] = useState(false);

    return (
        <>
            <AppBar position="static" sx={{backgroundColor: '#43a047', pt: 1, pb: 1 }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between'}}>
                    
                    <Typography variant="h1" component={Link} to='/' 
                        sx={{ 
                            textDecoration: 'none', 
                            "&:visited": {color: '#fff'}, 
                            fontWeight: '500',
                            fontSize: 60
                        }}
                    >
                        Guayacan
                    </Typography>
                    <Box sx={{ display: 'flex' }}>
                        <Box 
                            sx={{
                                display: { 
                                    xs: 'none', 
                                    sm: 'flex' 
                                },
                                gap: 2,
                                flexWrap: 'wrap'
                            }}
                        >
                            {
                                navLinks.map((item) => (
                                    <Button 
                                        key={item.titulo} 
                                        component={NavLink} 
                                        to={item.path} 
                                        variant='filled'                                    
                                    >
                                        { item.titulo }
                                    </Button>
                                ))
                            }
                        </Box>
                            
                        <Box sx={{ display: 'flex', gap: 1, pl: {xs: 0, sm: 2} }}>
                            {
                                cartQuantity === 0 ?
                                    null
                                :
                                    <CartWidget cartQuantity={cartQuantity}/>
                            }
                            <IconButton
                                onClick={ () => setOpen(true) }                                
                                sx={{
                                    display: {
                                        xs: 'flex', 
                                        sm: 'none' 
                                    }
                                }}
                            >
                                <MenuIcon sx={{ color: '#fff'}}/>
                            </IconButton>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>

            <Drawer
                sx={{ display: { xs: 'flex', sm: 'none' }}}       
                open={open}
                anchor='top'
                onClose={ () => setOpen(false) }
            >
                <NavListDrawer />
            </Drawer>
        </>
    )
}

export default NavBar;