import { Divider, Grid, Paper, Typography,Button, Card, Container, CardContent, CardActions, CardMedia } from '@material-ui/core';

import React from 'react';
import { useState } from 'react/cjs/react.development';
import '../App.css'
import carrom from '../assets/img/carrom.png';
import globe from '../assets/img/globe.jpg';
import kid from '../assets/img/kid.jpg'
import Header from './Header';

const Reward = () => { 
    const [product, setProduct]=useState([
        {
            img: globe,
            desc: 'Political World Globe Mittal Globe_808_WM_DESK AND TABLE TOP',
            type: "Desk and table top",
            color: "Multicolor",
            category: "Political",
            language: "English with Meridian"
        },
        {
            img: carrom,
            desc: '20 inch carrom board with striker and coins',
            type: 'plywood material',
            color: 'Multicolor',
            category: 'Game'
        }
    ])
    console.log(product)
 

    return ( 
    
        <Grid container>
            <Header/>
        <Grid item md={1}>
        </Grid>

      <Grid item md={10} sm={12} xs={12} style={{marginLeft:'20px'}}>
          <Paper elevation={3} style={{marginTop:'50px',border:'1px solid #616362 0px solid #fff'}}>
              <div style={{marginLeft:'30px'}}>
          <Typography variant="h6" style={{textAlign:'start',fontWeight:'bold',paddingTop:'20px'}}>Some of our Product listing</Typography>
          
          <Grid container>
              
              <Grid item md={12} xs={12} sm={12}>
         
         


          {        product.map((obj)=>
          <Card className="card" style={{border:'0px solid white'}}
           >
           <Grid container >
            <Grid item md={3} sm={12} xs={12} >
            <CardMedia  
             
             title="Contemplative Reptile"
            />
           <img src= {obj.img} alt={"no content"} className="card-img"/> 
            </Grid>
           <Grid item md={9} xs={12} sm={12} >
           <CardContent style={{marginLeft:'20px'}}>
             <div style={{marginLeft:'10px',textAlign:'left'}}>
              <Typography gutterBottom variant="subtitle1" component="p">
               {obj.desc}
              </Typography>
              <Divider/>
              <Typography variant="subtitle1"  component="p">
                Highlights
              </Typography>
              <Typography style={{textAlign:'start',marginLeft:'15%'}}><ul><li>{obj.type}</li><li>{obj.color}</li><li>{obj.category}</li></ul></Typography>
         
              <Divider/>
              <Typography variant="h6"  component="p" style={{marginTop:'20px',marginLeft:'5%'}}>
                **** INR <span style={{fontSize:'15px'}}> based on score </span>
              </Typography>
          
           
              </div>
            </CardContent>
            </Grid>
            <Divider/>
    
     </Grid>
        </Card>
          )}
    
    
             
            
           
               
                  </Grid>
          </Grid>
          <div className="center">
          <Button style={{marginRight:'20px'}} onClick={()=>{
              const name= prompt('Enter Item Description');
              const detail = prompt('Enter Detail');
              const picture = prompt('Enter type');
              const clr = prompt('Color');
              const cat = prompt('Category');
              if(name){
                  setProduct(state=>(
                      [...product,{desc:name,type:detail,img:kid,type:picture,color:clr,category:cat}]
                  ));
                  
              }
          }}>Add more</Button>
          </div>
          </div>
          </Paper>
      </Grid>

        <Grid item md={1}>
        </Grid>
        </Grid>
       
     );
}
 
export default Reward;
