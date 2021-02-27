import { Grid, Paper, Typography } from '@material-ui/core';
import React from 'react';
import Header from './Header';

const Contact = () => {
    return (  
        <Grid container>
            <Header/>
            <Grid item md={1}></Grid>
            <Grid item md={10}>
                <div style={{marginTop:'60px'}}>
                <Grid container>
                    <Grid item md={6}>
                     <Typography style={{fontFamily:'Roboto'}} variant="h6" style={{fontWeight:'bold'}}>
                         Looking for customized solution for school or college?
                     </Typography>
                     <div style={{display:'inline-flex'}}>
                     <Typography variant="h6" style={{fontFamily:'Roboto'}}>reach us at </Typography> <Typography variant="h6" style={{fontWeight:'bold',marginLeft:'5px',fontFamily:'Roboto'}}> Hello@inzack.com</Typography>
                     </div>
                    </Grid>
                    <Grid item md={6}>
                        <div style={{marginTop:'250px'}}>
                        <Typography variant="h6" style={{fontWeight:'bold',fontFamily:'Roboto'}}>
                            Registered Office
                            </Typography>
                            <Typography variant="h6" style={{fontFamily:'Roboto'}}>
                                T-Hub Foundation Catalyst IIIT-Hyderabad, Gachibowli, Telangana 500032, India
                            </Typography>
                        </div>
                        </Grid>
                </Grid>
                </div>
            </Grid>
            <Grid item md={1}></Grid>
        </Grid>
    );
}
 
export default Contact;