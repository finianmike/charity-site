import React from 'react'
import axios from 'axios';
import {useState, useEffect } from 'react';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import ClipLoader from "react-spinners/ClipLoader";


const Updates = () => {
    const [ getInfo, setGetInfo] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(true);
    // const override = {
    //     display: "block",
    //     margin: "0 auto",
    //     borderColor: "red",
    //   };

React.useEffect(() => {
    const getUpdates = async () => {
let url =  "https://fullstack-student-backend.onrender.com/api/products";

        try {
            setLoading(true);
            const res = await axios.get(url);
            console.log(res.data);
            setGetInfo(res.data);
            setLoading(false);
            setError(null);

        } catch (err) {
            setError(err.message);
        }finally {
        setLoading(false);
        }
    };
    getUpdates();
}, []);

if (loading) return 
<h1>Loading...</h1>


if (error) 
return <h1 style={{color: "red"}}>
    ERROR: (error)</h1>;

  return (
    < >

<div>
    {getInfo.map((info) => (
<ol key={info.id}>
    <li style={{textAlign:"center"}}>
        User unique id:{info.userId}
        </li>
        <Typography variant='h5' style={{color: red}}>
        Title: {info.title}</Typography>

        <Typography variant='h6'>{info.body}</Typography>
        <Link to= {'/updates/${info.id}'}>
        {""}
        <Button>Click Here</Button>{""}
        </Link>
</ol>
    ) )} 
    
</div>
    </>
  )
}

export default Updates