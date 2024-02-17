import { Box, List, ListItemButton, ListItemText } from "@mui/material"
import { Link } from "react-router-dom"

const botonDrawer = [
    { titulo: 'Productos', path: '/' },
    { titulo: 'Pilusos', path: '/category/pilusos' },
    { titulo: 'Bolsos', path: '/category/bolsos'},
    { titulo: 'Cintos', path: '/category/cintos' }
  ]

export const NavListDrawer = () => {
  return (
    <Box
        sx={{ bgcolor: '#43a047' }}
    >
        <List>
            {
                botonDrawer.map( item => (
                    <ListItemButton                      
                        key={ item.titulo }                        
                        component={ Link }
                        smooth
                        to={ item.path }
                    >
                        <ListItemText>
                            {item.titulo}
                        </ListItemText>
                    </ListItemButton>
                ))
            }            
        </List>
    </Box>
  )
}