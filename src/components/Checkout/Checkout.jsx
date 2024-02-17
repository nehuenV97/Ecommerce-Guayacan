import { Box, Button, TextField, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

const ESTILOS_FORM = {
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
    backgroundColor: '#ebebeb',
    padding: 2,
    boxShadow: '1px 1px 2px 1px gray'
}

const Checkout = () => {
    const { register, handleSubmit } = useForm();
    const { carrito, vaciarCarrito, precioTotal } = useContext(CartContext);

    const [ordenId, setOrdenId] = useState("");

    // const [error, setError] = useState({
    //     error: false,
    //     message: ""
    // })

    // const validateEmail = (email) => {
    //     const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    //     return regex.test(email);
    // }

    // const handleSubmit = () => {
    //     if (validateEmail(email)) {
    //         setError({
    //           error: false,
    //           message: "",
    //         });
    //         console.log("Email correcto");
    //     } else {
    //         setError({
    //             error: true,
    //             message: "Formato de email incorrecto"
    //         })
    //     }
    // }

    const comprar = (data) => {
        const orden = {
            cliente: data,
            productos: carrito,
            precioFinal: precioTotal()   
        }
        console.log(orden);

        const pedidosRef = collection(db, "ordenes");

        addDoc(pedidosRef, orden)
            .then((doc) => {
                setOrdenId(doc.id)
                vaciarCarrito();
            })
    }

    if (ordenId) {
        return (
            <Box 
                sx={{
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    flexDirection: 'column',
                    textAlign: 'center', 
                    p: 2
                }}
            >
                <Typography variant='h3'>Muchas gracias por tu compra</Typography>
                <Typography sx={{ mt: 2 }} variant='h4'>Tu numero de orden es:</Typography>
                <Typography variant='h4'>{ordenId}</Typography>
            </Box>
        )
    }

    return (
        <Box sx={{display: 'flex', justifyContent: 'center'}}>
            <Box 
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center', 
                    flexDirection: 'column', 
                    gap: 2, 
                    mt:2, 
                    width: '100%', 
                    textAlign: 'center'
                }}
            >
                <Typography variant="h4">Informacion del Usuario</Typography>

                <Box component="form" onSubmit={handleSubmit(comprar)} sx={ESTILOS_FORM}>
                    <TextField
                        id="nombre"
                        label="Nombre"
                        type="text"
                        variant="outlined"
                        fullWidth
                        required
                        {...register('nombre')}                      
                    />
                    <TextField
                        id="apellido"
                        label="Apellido"
                        type="text"
                        variant="outlined"
                        fullWidth
                        required
                        {...register('apellido')}
                    />
                    <TextField 
                        id="email"
                        label="Email"
                        type="email"
                        variant="outlined"
                        fullWidth
                        required
                        // error={error.error}
                        // helperText={error.message}
                        {...register('email')}
                    />                
                    <Button type="submit" variant='contained' >Finalizar Compra</Button> 
                </Box>
            </Box>
        </Box>
    )
}

export default Checkout;