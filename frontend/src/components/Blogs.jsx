import React, { useEffect, useState } from "react";
import {Button, Card, CardContent, CardMedia, Grid, Typography} from '@mui/material'
import axios from 'axios';
import axiosInstance from "../axiosinterceptor";
const Blogs = () => {

  const [cardData,setData]=useState([]);
  // const navigate=useNavigate();
    useEffect( ()=>{
      axiosInstance.get('/blogs').then((res)=>{
       console.log(res)
      setData(...cardData,res.data);
     })
  
    },[])

  return (<div style={{ margin: "7%" }}>
     
  <Grid container spacing={2}>
    {cardData.map((val, i) => (
      <Grid item key={i} xs={12} sm={6} md={4}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 200 }}
            image={val.image}  // Specify the image source
            title={val.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {val.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {val.description}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Last updated:
            </Typography>
            {/* <Button variant="outlined" onClick={()=>{removeBlog(val._id)}}>Remove</Button>
           
            <Button  variant="outlined" className="btn btn-danger" onClick={()=>updateBlog(val)}>Update</Button> */}
                    
                 
          </CardContent>
          
        </Card>
      </Grid>
    ))}
  </Grid>
  
 </div>);
};

export default Blogs;
