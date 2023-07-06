import { Box, Button, Typography } from "@mui/material";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return (        
        <Box component='nav' sx={{width: '100%', minHeight: '50px', bgcolor: 'green', pb: '20px'}}>
            <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingRight: '20px'}}>
                <Typography variant="h3">Guayacan</Typography>
                <Box display={'flex'} gap={2}>                    
                    <Button variant='filled'>Acerca de</Button>
                    <Button variant='filled'>Contacto</Button>                    
                    <CartWidget cartQuantity={5}/>
                </Box>
            </Box>
        </Box>        
    )
}

export default NavBar;