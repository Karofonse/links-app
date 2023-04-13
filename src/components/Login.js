import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import logo from '../Images/1.png'
import useLogin from "./useLogin";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
    const {onSubmit, handleSubmit, register, errors} = useLogin()
    const selector = useSelector(state => state.user)

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/registro"); 
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
            padding: "0 16px"
        }}
    >
        <Box sx={{ width: "70%" }}>
            <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
                <img src={logo} alt="logo" sx={{ width: 100, height: 100 }} />
            </Box>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Typography variant="h4" align="left" gutterBottom fontFamily={"Montserrat"} fontWeight="bold">
                    Login
                </Typography>
                <Box sx={{ mt: 4 }}>
                    <Typography variant="body1" fontFamily={"Montserrat"}
                    style={{ backgroundColor: "white", color: "#002239" }}>
                        Your Email
                    </Typography>
                    <TextField
                    {...register("email", { required: true , pattern: /^\S+@\S+$/i})}
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
                <Box sx={{ mb: 4 }}>
                    <Typography variant="body1" fontFamily={"Montserrat"}
                    style={{ backgroundColor: "white", color: "#002239" }}>
                        Password
                    </Typography>
                        <TextField
                        {...register("password", { required: true, minLength: 8 })}
                        required
                        fullWidth
                        id="password"
                        type="password"
                        variant="outlined"
                        error={!!errors.password}
                        helperText={errors.password ? "Este campo es requerido" : ""}
                        inputProps={{ style: { 
                            fontFamily: "monospace" }, autoComplete: "off" }}
                            InputProps={{ inputProps: { type: "password" } }}
                            sx={{ mb: 2, borderRadius: 7}}
                        />
                </Box>
                <Box sx={{ mt: 4 }}>
                    <Button type="submit" fullWidth variant="contained" fontFamily={"Montserrat"} style={{ backgroundColor: "#007AFF", color: "white" }}>
                        Login
                    </Button>
                </Box>
                <Link to="/registro">
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
                        onClick={handleClick}
                    >
                        Signup 
                    </Button>
                </Link>
            </form>
        </Box>
    </Box>
);
};
export default LoginForm;