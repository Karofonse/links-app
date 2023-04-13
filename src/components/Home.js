import React, { useEffect, useState } from "react";
import { useSelector, useDispatch} from "react-redux";
import { Box, Button, TextField, Typography } from "@mui/material";
import { logOut } from "../store/userSlice";
import logo from "../Images/1.png";
import delet from "../Images/3.png";
import { Link } from "react-router-dom";
import imagen from "../Images/6.jpg";

const Home = () => {
  const [url, setUrl] = useState("");
  const [name, setName] = useState("");
  const [urls, setUrls] = useState([]);
  
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.user);

  useEffect(() => {
    const urls = JSON.parse(localStorage.getItem("urls")) || [];
    if (urls) {
      setUrls(urls);
    }
  }, []);

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newUrl = { url, name };
    setUrls([...urls, newUrl]);
    localStorage.setItem("urls", JSON.stringify([...urls, newUrl]));
    setUrl("");
    setName("");
  };

  const handleLogout = () => {
    dispatch(logOut());
    console.log("Logout");
  };

  const handleDeleteUrl = (index) => {
    const newUrls = [...urls];
    newUrls.splice(index, 1);
    setUrls(newUrls);
  };

  return (
    <Box
    sx={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    height: "100vh",
    position: "relative",
    marginTop: "50px",
  }}
>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          padding: "10px",
          position: "absolute",
          top: "0",
          left: "0",
        }}
      >
        <img 
        src={logo} 
        alt="logo" 
        sx={{ width: 100,
        height: 100,
        top:5,
        left:25
        }} />
        <Button
        component={Link}
        to="/login"
        variant="outlined"
          sx={{
            position: "absolute",
            top: 5,
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
            mt: 1,
          }}
          onClick={handleLogout}
        >
            Logout
          </Button>
      </Box>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          maxWidth: "600px",
          mt: "100px",
        }}
      >
        <img 
        src={imagen}
        hfef="" alt="fot-perfil" 
        sx={{ width: "100px" , height: "100px" }}
        style={{ borderRadius: "100%", boxShadow: "0 0 5px gray" }} />
        <Typography
          variant="h5"
          align="center"
          gutterBottom
          fontFamily="Montserrat"
          fontWeight="bold"
          sx={{ mb: 1, mt: 6 }}
        >
          {selector.user.nombre}
        </Typography>
        <Typography
          variant="h6"
          align="center"
          gutterBottom
          fontFamily="Montserrat"
          fontWeight="light"
          sx={{ mb: 2 }}
        >
          {selector.user.email} 
        </Typography>
        <Box sx={{ width: "100%" }}>
          <Typography
            variant="body1"
            fontFamily={"Montserrat"}
            style={{ backgroundColor: "white", color: "#002239" }}
          >
            Url to save
          </Typography>
          <TextField
            required={true}
            fullWidth
            variant="outlined"
            value={url}
            onChange={handleUrlChange}
            sx={{ mb: 4, borderRadius: 7, width: "100%" }}
          />
        </Box>
        <Box sx={{ width: "100%" }}>
          <Typography
            variant="body1"
            fontFamily={"Montserrat"}
            style={{ backgroundColor: "white", color: "#002239" }}
          >
            Name of url
          </Typography>
          <TextField
            required={true}
            fullWidth
            variant="outlined"
            value={name}
            onChange={handleNameChange}
            sx={{ mb: 2, borderRadius: 7, width: "100%" }}
          />
        </Box>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          fontFamily={"Montserrat"}
          sx={{
            width: "100%",
            mt: 4,
            borderRadius: 1,
            backgroundColor: "#007AFF",
            color: "white",
          }}
        >
          Add
        </Button>
        <Box sx={{ mt: 4, width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
          {urls.map((url, index) => (
            <Box
              key={index}
              sx={{
                mb: 1,
              display: "flex",
              flexDirection: "row-reverse",
              alignItems: "center",
              width: "100%",
              padding: "8px",
              justifyContent: "space-between",
              borderBottom: "1px solid #B7C0C9"
              }}
            >
              <img 
                src={delet} 
                alt="Eliminar" 
                style={{cursor: "pointer", marginLeft: "10px"}}
                onClick={() => handleDeleteUrl(index)}
              />
              <Box style={{display: "flex", flexDirection: "column"}}>
                <Typography variant="body1" fontFamily="Montserrat" sx={{ color: "#007AFF", fontSize: "20px", marginLeft: "10px", marginBottom: "4px" }}>
                  {url.url}
                </Typography>
                <Typography variant="body1" fontFamily="Montserrat" sx={{ fontSize: "14px", color: "black", marginLeft: "10px" }}>
                  {url.name}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    <Box>
  </Box>
</Box>
  );
};



export default Home;
