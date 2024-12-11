import React from 'react'
import child2 from "../../assets/Banners/child2.JPG"
import { Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './Product.css'

const Product = () => {
const [getProduct, setGetProduct] = React.useState ([])
const [loading, setLoading] = React.useState(false);
const [error, setError] = React.useState(true);


React.useEffect(() =>{

    const getProduct = async () => {
        let url =  "https://fullstack-student-backend.onrender.com/api/products";
        
        try {
            setLoading(true);

            const res = await axios.get(url);
            console.log(res.data);
            setGetProduct(res.data);
            setLoading(false);
            setError(null);
        }catch (err) {
            setError(err.message);
        }finally {
            setLoading(false);
        }
    }
    getProduct()
}, [])
//     if (loading) return 
// <h1>Loading...</h1>


// if (error) 
// return <h1 style={{color: "red"}}>
//     ERROR: (error)</h1>;
    
  return (
    <div>
        {getProduct.map((info, index) => 
    <div key={index} className='main-card'>
    <div className='card1'>
        <img src={child2} />
        <div className='container'>
        <Typography variant='h5' style={{color:' red'}}>
        Title: {info.brand} {""}
        </Typography>
        <Typography variant='h6'>{info.body} {""} </Typography>
        </div>
        <Link to= {`/updates/${info.category}`}>
        {""}
        <Button>Click Here</Button>{""}
        </Link>
    </div>
</div>    
        
        
        
      )} 

    </div>
  )
}

export default Product