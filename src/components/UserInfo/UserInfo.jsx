import { Box, Button, TextField, Typography} from "@mui/material";
import { useState } from "react";


const UserInfo = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    
    const [error, setError] = useState({
        error: false,
        message: ""
    })

    const validateEmail = (email) => {
        const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return regex.test(email);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateEmail(email)) {
            setError({
              error: false,
              message: "",
            });
            console.log("Email correcto");
        } else {
            setError({
                error: true,
                message: "Formato de email incorrecto"
            })
        }
    }

    return (
        <Box sx={{display: 'flex', flexDirection: 'column', gap: 2, mt:2, width: '30%'}}>
            <Typography variant="h4">Informacion del Usuario</Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{display: 'flex', flexDirection: 'column', gap: 2, backgroundColor: '#ebebeb', padding: 2, boxShadow: '1px 1px 2px 1px gray'}}>
                <TextField
                    id="nombre"
                    label="Nombre"
                    type="text"
                    variant="outlined"
                    fullWidth
                    required
                    value={nombre}
                    onChange={(event) => setNombre(event.target.value)} 
                />
                <TextField 
                    id="apellido"
                    label="Apellido"
                    type="text"
                    variant="outlined"
                    fullWidth
                    required 
                    value={apellido}
                    onChange={(event) => setApellido(event.target.value)}
                />
                <TextField 
                    id="email"
                    label="Email"
                    type="email"
                    variant="outlined"
                    fullWidth
                    required
                    error={error.error}
                    helperText={error.message}
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />                
                <Button type="submit" variant='contained' >Finalizar Compra</Button> 
            </Box>
            {/* <input type="text" placeholder="Nombre" value={nombre} onChange={(event) => setNombre(event.target.value)}/>
            <input type="text" placeholder="Apellido" value={apellido} onChange={(event) => setApellido(event.target.value)}/>
            <input type="text" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)}/>
            <input type="text" placeholder="Telefono" value={telefono} onChange={(event) => setTelefono(event.target.value)}/> */}
        </Box>
        
    )
}

export default UserInfo;