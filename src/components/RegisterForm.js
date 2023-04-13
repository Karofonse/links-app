import React, {useState} from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import logo from '../Images/1.png'
import { Link, useNavigate } from "react-router-dom";

const RegisterForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            nombre: "Andrea",
            email: "andreax@hotmail.com",
            password: "",
        }
    });
    const navigate = useNavigate();
    const [formData, setFormData] = useState({});

    const onSubmit = (data) => {
        const users = JSON.parse(localStorage.getItem("users")) || [];
        if (users.find((user) => user.email === data.email)) {
            alert("El usuario ya existe");
            return;
        }
        users.push(data);
        localStorage.setItem("users", JSON.stringify(users));
        setFormData(data);
        navigate("/login");
        console.log(data);
    };

    const handleClick = () => {
        navigate("/login");
    };

    return (
        <Box
        sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            position: "relative", 
            flex: 1,
        }}
        >
            <Box sx={{ width: "70%" }}>
            <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
                <img src={logo} alt="logo" sx={{ width: 100, height: 100 }} />
            </Box>
                
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Typography variant="h4" align="left" gutterBottom fontFamily={"Montserrat"} fontWeight="bold">
                            Signup
                        </Typography>
                        <Box sx={{ mt: 5 }}>
                            <Typography variant="body1" fontFamily={"Montserrat"}
                            style={{ backgroundColor: "white", color: "#002239" }}>
                                Full name
                            </Typography>
                            <TextField
                                {...register("nombre", { required: {
                                    value: true, message: "el campo es requerido"} })}
                                required
                                fullWidth
                                id="nombre"
                                type="text"
                                variant="outlined"
                                error={!!errors.nombre}
                                helperText={errors.nombre ? "Este campo es requerido" : ""}
                                sx={{ mb: 2, borderRadius: 7 }}
                            />
                        </Box>
                        <Box sx={{ mt: 0 }}>
                            <Typography variant="body1" fontFamily={"Montserrat"}
                            style={{ backgroundColor: "white", color: "#002239" }}>
                                Your Email
                            </Typography>
                            <TextField
                                {...register("email", { required: true })}
                                required
                                fullWidth
                                id="email"
                                type="email"
                                variant="outlined"
                                error={!!errors.email}
                                helperText={errors.email ? "Este campo es requerido" : ""}
                                sx={{ mb: 2, borderRadius: 7 }}
                            />
                        </Box>
                        <Box sx={{ mt: 0 }}>
                            <Typography variant="body1" fontFamily={"Montserrat"}
                            style={{ backgroundColor: "white", color: "#002239" }}>
                            Contraseña
                            </Typography>
                            <TextField
                                {...register("password", { required: true })}
                                required
                                fullWidth
                                id="password"
                                type="password"
                                variant="outlined"
                                error={!!errors.password}
                                helperText={errors.password ? "Este campo es requerido" : ""}
                                inputProps={{ style: { fontFamily: "monospace" }, autoComplete: "off" }}
                                InputProps={{ inputProps: { type: "password" } }}
                                sx={{ mb: 2, borderRadius: 7}}
                            />
                        </Box>
                        <Box sx={{ mt: 4 }}>
                            <Button 
                            type="submit" 
                            fullWidth 
                            variant="contained" 
                            fontFamily={"Montserrat"} 
                            style={{ backgroundColor: "#007AFF", 
                            color: "white" }}>
                                Login
                            </Button>
                                <Typography variant="body2" align="center" mt={2} fontFamily={"Montserrat"}>
                                By Creating account You agree to the <a href="/login" style={{ color: "#007AFF" }}>Terms of use</a> and <a href="/login" style={{ color: "#007AFF" }}>Privacy Policy</a>
                                </Typography>
                        </Box>
                        <Link to="/login">
                            <Button
                            variant="outlined"
                            sx={{
                                position: "absolute",
                                top: 25,
                                right: 10,
                                borderRadius: 1,
                                border: "2px solid #007AFF",
                                textTransform: "uppercase",
                                backgroundColor: "#FFFFFF",
                                color: "#007AFF",
                                fontWeight: "bold",
                                px: 3,
                                py: 1,
                                mr: 2,
                                mt: 2
                            }}
                            onClick={handleClick}>
                            Login
                        </Button>
                    </Link>
                </form>
            </Box>
        </Box>
    );
};

export default RegisterForm; 
