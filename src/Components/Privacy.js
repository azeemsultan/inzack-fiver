import { Grid, Paper, Typography } from '@material-ui/core';
import React from 'react';
import Header from './Header';

const Privacy = () => {
    return (  
        <Grid container>
            <Header/>
            <Grid item md={1}></Grid>
            <Grid item md={9}>
                <div style={{marginTop:'40px'}}>
                <Paper elevation={2}>
                <Typography variant="subtitle1" style={{fontWeight:'bold',textAlign:'start',marginLeft:'30px',paddingTop:'30px',fontFamily:'Roboto'}}>
                        Terms and Condition
                    </Typography> 
                    <ol style={{textAlign:'start',marginRight:'20px'}}>
                    <li style={{marginTop:'10px'}}>
                    <Typography style={{fontFamily:'Roboto'}} variant="subtitle1"  >
                        Inzack.com is not intented to be used by buyers as like ecommerce site like amazon.in, flipkart etc to buy the products
                    </Typography> 
                    </li>
                    <li style={{marginTop:'10px'}}>
                    <Typography variant="subtitle1" style={{fontFamily:'Roboto'}} >
                        Once the Reward is released based on the qualifying criteria, the product cannot be swapped or exchanged in the platform for any reason
                    </Typography> 
                    </li>
                    <li style={{marginTop:'10px'}}>
                    <Typography variant="subtitle1" style={{fontFamily:'Roboto'}}>
                        After the purchase of the product, any damages or alteration in the transit will not be covered in the product assurance
                    </Typography> 
                    </li>
                    <li style={{marginTop:'10px'}}>
                    <Typography variant="subtitle1"  style={{fontFamily:'Roboto'}}>
                        You must not use the Site for any of the following:<br/>
                        for fradulent purposes, or in connection with a criminal offence or other unlawful activity; to send, use or reuse any material that is
                        illegal, offensive, (including but not limited to material that is sexually explicit or whih promotes racism, bigotry, hatred or physical harm),
                        abusive, harassing, misleading, indecent, defamatory, disparaging, obscene or menacing; or in breach of copyright, trademark, confidentiality, privacy
                        or any other proprietary information or right; or is otherwise injurious to third parties; or objectionable or otherwise unlawful
                        in any manner whatsoever; or which consists of or contains software viruses, political campaigning, commercial solicitation, chain letters, mass mailings or any "spam"
                        to cause annoyance, inconvenience or needless anxiety;
                    </Typography> 
                    </li>
                    <li style={{marginTop:'10px'}}>
                    <Typography variant="subtitle1" style={{fontFamily:'Roboto'}} >
                        All videos(.mp4) uploaded in the platform are covered by License CC-BY (Attibution)
                    </Typography> 
                    </li>
                    <li style={{marginTop:'10px'}}>
                    <Typography variant="subtitle1" style={{fontFamily:'Roboto'}}>
                        The person can upload the videos of which the complete responsibility will be adhered by the logged-in user.
                    </Typography> 
                    </li>
                    <li style={{marginTop:'10px'}}>
                    <Typography variant="subtitle1" style={{fontFamily:'Roboto'}} >
                    Inzack platform reserves the right to cancel or reject the user for any malicious activities.
                    </Typography> 
                    </li>
                
                    </ol>
                    <Typography variant="subtitle2" style={{fontWeight:'bold',textAlign:'start',marginLeft:'30px',fontFamily:'Roboto'}}>
                        <a href='/' style={{color:'black',marginLeft:'20px'}}>Refunds policy?</a>
                    </Typography> 
                    <br/>
                </Paper>
                </div>
            </Grid>
        </Grid>
    );
}
 
export default Privacy;