import { Card, CardMedia, Divider, Grid, Typography } from '@material-ui/core';
import React from 'react';
import ImageResponsive from 'react-image-responsive';
import { useState } from 'react/cjs/react.development';
import img from '../assets/img/design.png'
import Header from './Header';
const Inzack = () => {
    const [ob,setOb]=useState([
        {name:'abccc', details:'djoddjigdsogsodgjodsgodsjogds'},
        {name:'abccc', details:'djoddjigdsogsodgjodsgodsjogds'}
        ,  {name:'abccc', details:'djoddjigdsogsodgjodsgodsjogds'}
    ])
    
    return ( 
        
            <div>
                {ob.map((ob)=>
           <div style={{height:'350px',width:'200px',border:'1px solid black',marginLeft:'20px',display:'inline-flex',flexWrap:'wrap'}}>
               <div>
                   <img src={img} style={{height:'150px',width:'100%',border:'2px solid black'}}/>
               </div>
               <div>
                   <div style={{position:'sticky',float:'top',paddingBottom:'10px'}}>S </div>
                   <h5>{ob.name}</h5>
                   <p>{ob.details}</p>
                   <Divider/>
                   </div>
           </div>
           )}
          </div>
        
     );
}
 
export default Inzack;