import React, { useState } from 'react'
import './Landing.css'
import { Box, Button, TextField, Typography } from "@mui/material"
import { useNavigate, Link } from "react-router-dom"
import axios from "axios"
import { ClipLoader } from "react-spinners"

const Landing = () => {
  const navigate = useNavigate();

  // individual useState for each field
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
const handleLoginSubmit = async (e) => {
  e.preventDefault();
  setError("");
  setLoading(true);

  try {
    const data = await axios.post(
      "https://fullstack-student-backend.onrender.com/api/auth/login", {email, password}
    );

    console.log("login successful", data);
    setTimeout(() => navigate("/home"), 2000);
       
  }
  catch (err) {
console.log("error", err);
setError(err?.response.data?.error);
  }
  finally {
    setLoading(false);
  }
};

  return (
    <Box
    sx={{display: "false",
      justifyContent: "center",
      minHeight: "10vh",
      backgroundColor: "green",
      height:'100vh',
      padding: 2,
    }}>
<div className='main-login-conner'>
<div className='login-conner'>
  <h1>GIVE A CHILD HOPE</h1>
  <h4>Make a Child smile by giving the Child HOPE</h4>
</div>

      <Box
      sx={{
        width: "30%",
        maxWidth: "100",
        padding: 5,
        margin: 10,
        height: "70vh",
        borderRadius: 2,
        backgroundColor: "#fff",
        boxShodow: 3,
      }}>

<Typography variant="h5" Component="h1" align="center" gutterBottom>
  Login
</Typography>
<Typography>
  {error && (
    <Typography
    color="error"
    variant="body2"
    align="center"
    gutterBottom>
      {error}
      </Typography>
  )}
</Typography>

<form onSubmit={handleLoginSubmit}>
  <TextField
  label="Email"
  type="email"
  fullWidth
  margin="normal"
  onChange={(e) => setEmail(e.target.value)}
  required
  />

  <TextField
  label="Password"
  type="password"
  fullWidth
  margin="normal"
  onChange={(e) => setPassword(e.target.value)}
  required
  />
  <Box sx={{mt: 3}}>
    <Button type="submit" color="success" fullWidth variant="contained">
      {loading ? <ClipLoader/> : "Login"}
    </Button>
  </Box>
  <div className='Register-Link'>
  <p>Don't have an account ?</p>
  <Link to="/register" >
   <h3>Sign up here</h3>
</Link>
  </div>
  
</form>
      </Box>
      </div>
    </Box>
  );
};

export default Landing