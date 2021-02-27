import { Avatar, Grid, Paper, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import '../App.css'
import kid from '../assets/img/kid.jpg'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Header from './Header';
const Home = () => {
    const [movie,setMovie]= useState(4);
    const [thoughts,setThoughts]= useState(3);
    const [advices,setAdvices]= useState(8);
    const [bg,setBg]= useState("wave");
    const [mov,setMov] = useState(false);
    const [idea,setIdea]=useState(["saltman","pacman","zombies","making of drone","glasses"])
    const [th,setTh]=useState(false);
    const [ad,setAd]=useState(false);

    let thought = ()=>{
        setTh(true);
        setBg("wave");
        setMov(false);
        setAd(false)

    }
    let advice = ()=>{
        setAd(true);
        setBg("nave");
        setMov(false);
        setTh(false);

    }

    let movieShot = ()=>{
        setMov(true);
        setBg("pave");
        setAd(false);
        setTh(false)

    }
    return (
        <div style={{marginLeft:'1px'}}>
            <Header/> 
        <Grid container style={{marginTop:'10px'}}>
            <Grid item md={12} sm={12} xs={12}>
                <div className="home-text">
                <Typography variant='h5' color="textSecondary" style={{marginLeft:'20px',textAlign:'center',fontFamily:'roboto'}}>
                    An Ideation Platform for students to get Rewarded.
                </Typography>
                </div>
            
                <Grid container>
                    <Grid item md={1} xs={12} sm={4} >
                        <div className="home">
                <div className="home-img" style={{marginTop:'20px',display:'block',marginLeft:'auto',marginRight:'auto'}}>
             <Typography className="img-text">Hello my idea</Typography>
                </div>
                <div className="id-text">
                    <Typography className="myid" >My ideas</Typography>
                </div>
                </div>
                </Grid>
                <Grid item md={1} xs={12} sm={1}  >
                    <div className="arrow-div">
                
                    </div>
                    
                <ArrowForwardIosIcon className="arrow" style={{fontSize:'40px'}}/>
                
                </Grid>
                <Grid item md={3} xs={12} sm={6} style={{paddingLeft:'15px'}}>
                <div  style={{display:'block',marginLeft:'auto',marginRight:'auto',marginTop:'30px'}}>
             <Paper elevation={3}  >
                 <div className="video-img" style={{borderRadius:'9px 9px 9px 9px',marginTop:'45px',margin:'5px 5px 0px 5px'}}>
                     
                 <iframe className="video-img" width="330" height="200" src="https://www.youtube.com/embed/tgbNymZ7vqY">
</iframe>
<div style={{marginTop:'15px'}}>
               
                </div>
                <Typography className="myidv">Video</Typography>
                 </div>
             </Paper>
                </div>
                </Grid>
                <Grid item md={1} xs={12} sm={1}>
                <div className="arrow-div">
         
</div>

                <ArrowForwardIosIcon className="arrow2" style={{fontSize:'40px'}}/>
                </Grid>
                <Grid item md={1} xs={12} sm={3}>
                    <div className="reward">
                <div className="reward-img" style={{marginTop:'75px',display:'block',marginLeft:'auto',marginRight:'auto'}}>

                </div>
                <div className="rew-text" style={{marginTop:'30px'}}>
                    <Typography className="myid">Rewards</Typography>
                </div>
                </div>
                </Grid>
                <Grid item md={1} xs={12} sm={1}>
                <div className="arrow-div">
          <Typography></Typography>
</div>              <div className="arr-div">
                <ArrowForwardIosIcon className="arrow" style={{fontSize:'40px'}}/>
                </div>
                </Grid>
                <Grid item md={4} xs={12} sm={7} style={{paddingLeft:'5px',paddingRight:'5px'}} className="mob">

              <div className="report-card">
                    <Paper elevation={3} className={bg} style={{marginLeft:'5px'}} style={{fontFamily:'roboto'}}>
                        <Grid container>
                            <Grid item md={6} xs={12}>
                         {mov==false?<div></div>:      <div style={{marginLeft:'10px'}}>
                        <div style={{display:'inline-flex',textAlign:'start',marginTop:'2px'}}>
                        <div style={{textAlign:'start'}} >{idea[0]}</div>
                        <div style={{marginLeft:'50px'}}>{idea[1]}</div>
                        </div>
                        <div style={{display:'inline-flex',marginTop:'10px'}}><div style={{marginLeft:'60px'}}>{idea[2]}</div> 
                       <div style={{marginLeft:'60px'}}>{idea[4]}</div>
                        </div>
                        <div style={{marginTop:'10px'}}>{idea[3]}</div>
                        </div>} 
                        {th==false?<div></div>: <div>
                       <div style={{marginTop:'10px',marginLeft:'10px'}}>Hello my title</div>
                       <div style={{marginTop:'10px',marginLeft:'30px'}}>My title description</div>
                       <div style={{marginTop:'10px',marginLeft:'20px'}}>
                           more description
                       </div> </div>}

                       {ad==false?<div></div>: <div>
                       <div style={{marginTop:'10px',marginLeft:'10px'}} >Inspirational words</div>
                       <div style={{marginTop:'10px',marginLeft:'30px'}}>My inspiration description</div>
                       <div style={{marginTop:'10px',marginLeft:'20px'}}>
                           more description
                       </div> </div>}


                        </Grid>
                         <Grid item md={6} xs={12} sm={9} >
                        <div className="avatar"><Avatar style={{height:'80px',width:'80px'}}><img  style={{maxWidth:'120px',maxHeight:'80px'}} src={kid}/></Avatar></div>   </Grid>
                      
                        <div className="report-text"><div><Typography color="textSecondary" style={{fontWeight:'bold',textAlign:'end',fontFamily:'roboto'}}>Viruja Tejashree</Typography></div>
                        <div className="name-section">
                        <div><Typography variant="subtitle2" style={{textAlign:'center',fontFamily:'roboto'}}>Class 7A</Typography></div>
                        <div><Typography variant="subtitle2" style={{textAlign:'end',fontFamily:'roboto'}}>viru.jh@gmail.com</Typography></div>
                        <div><Typography variant="subtitle2" style={{textAlign:'start',fontWeight:'bold',fontFamily:'roboto'}} color="textSecondary">Arbor International School</Typography></div>
                        </div>
                        </div>
                        <div style={{display:'inline-flex',marginTop:'12px'}}>
                        <div className="report"><Typography onClick={()=>movieShot()}>Movie shots</Typography><div>{'0'+movie}</div> </div>
                        <div className="report"><Typography onClick={()=>thought()}>Thoughts</Typography><div>{'0'+thoughts}</div></div>
                        <div className="report"><Typography onClick={()=>advice()}>Advices</Typography><div>{'0'+advices}</div></div>
                        </div>
                        </Grid>
                    </Paper>
                    </div>
                    <div className="stick">
                    <Typography className="m" style={{marginTop:'10px',fontWeight:'bold'}}>My report card as my email sticker</Typography></div>
                </Grid>
                </Grid>
            </Grid>
            <Grid item md={4} sm={4} xs={6}></Grid>
            <Grid item md={4} sm={4}></Grid>
            <Grid item md={4} sm={4} xs={6}>
            <div className="get">
    <Typography variant="h6" style={{marginTop:'20px'}}><a href="/start">Get Started</a></Typography>
</div>
            </Grid>

 <br/>
 <h1>

 </h1>

        </Grid>
        </div>
      );
}
 
export default Home;