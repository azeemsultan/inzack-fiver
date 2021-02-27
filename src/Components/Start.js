import { Grid, Paper, Typography } from '@material-ui/core';
import React from 'react';
import logo from '../assets/img/inzacklogo.jpg'
import NotificationsIcon from '@material-ui/icons/Notifications';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

import { useState } from 'react/cjs/react.development';
import img from '../assets/img/video.jpg'
import pic from '../assets/img/person.png'
import Button from '@material-ui/core/Button';
import note from '../assets/img/note.jpg'
import '../App.css'
import { SubdirectoryArrowLeft } from '@material-ui/icons';
const Start = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const [person,setPerson]=useState([
        {
        img: pic,
        name: 'Shoukat'
    },
    {
        img: pic,
        name: 'Vijay'
    },
    {
        img: pic,
        name: 'Shoukat'
    },
    {
        img: pic,
        name: 'cat'
    },
    {
        img: pic,
        name: 'hero'
    },
    {
        img: pic,
        name: 'osama'
    },
    {
        img: pic,
        name: 'hero'
    },
    {
        img: pic,
        name: 'osama'
    }
    
])
const [idea,setIdea] = useState([
    {
    text: 'Rice'
   
},

])
const [mathsIdea,setMIdea] = useState([
    {
    text: 'Pythagoras'
   
},

])
const [engIdea,setEIdea] = useState([
    {
    text: 'Palindrome'
   
},

])
const [gkIdea,setGIdea] = useState([
    {
    text: 'Ball'
   
},

])
const [phy,setPhy] = useState(false);
const [maths,setMaths] = useState(false);
const [eng,setEng] = useState(false);
const [gk,setGk] = useState(false);
const setPhysics=()=>{
    setPhy(true);
    setMaths(false);
    setEng(false);
    setGk(false)
}

const setMeth=()=>{
    setPhy(false);
    setMaths(true);
    setEng(false);
    setGk(false)
}

const setEnglish=()=>{
    setPhy(false);
    setMaths(false);
    setEng(true);
    setGk(false)
}


const setG=()=>{
    setPhy(false);
    setMaths(false);
    setEng(false);
    setGk(true)
}


    return (
        <div className="grid">
              <Grid container> 
    <Grid item md={1}>
    </Grid>
    <Grid item md={10} xs={12}>
      <Navbar color="white" light expand="lg" >
        <NavbarBrand href="/" style={{marginLeft:'10px'}}><div style={{display:'inline-flex'}}><img src={logo} style={{height:'30px'}}/> <Typography variant="h6" style={{fontFamily:'Roboto',marginLeft:'12px',paddingTop:'4px'}}>Inzack </Typography></div></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
        <div style={{marginLeft:'5%'}}>
          <Nav  navbar >
          
            <NavItem style={{marginLeft:'50px'}} >
              <NavLink href="/inzack"  >Lets Play</NavLink>
            </NavItem>
            <div className="input">
            <NavItem style={{marginLeft:'50px'}} >
              <NavLink > <input 
              style={{width:'100%',paddingLeft:'10px',borderRadius:'16px 16px 16px 16px',backgroundColor:'#bfbfbd',color:'black',fontWeight:'bolder',border:'1px solid white'}} 
              placeholder="search movie shots" /></NavLink>
            </NavItem>
            </div>
            <NavItem style={{marginLeft:'50px'}} >
              <NavLink href="/rewards" color="primary" > Rewards</NavLink>
            </NavItem>
           
            <NavItem style={{marginLeft:'50px'}} >
              <NavLink href="/contact" ><NotificationsIcon/></NavLink>
            </NavItem>
           
            <NavItem style={{marginLeft:'50px'}} >
              <NavLink href="/contact" >Logout</NavLink>
            </NavItem>
           
          </Nav>
          </div>
      
        </Collapse>
      </Navbar>
      </Grid>
      <Grid item md={1}></Grid>
      </Grid>
      
        <Grid container style={{marginLeft:'20px'}}>
          <Grid item md={12}>
   
          </Grid>
          <Grid item md={9} xs={12} sm={12}>
              <div className="start-img" style={{marginLeft:'20px',marginTop:'20px',marginRight:'20px'}}>
              <div className="start-text">
                  <Typography style={{textAlign:'start'}}>Contest  <span style={{marginLeft:'39px'}}> Science Exhibition on Jan 30th</span></Typography>
                  <Typography style={{textAlign:'start'}}>Prize  <span style={{marginLeft:'58px'}}> 10,000 Rs </span></Typography>
                  <Typography style={{textAlign:'start'}}>Terms  <span style={{marginLeft:'50px'}}> Science Exhibition on Jan 30th</span></Typography>


              </div>
              </div>
              <div>
                 
             <Paper style={{marginLeft:'20px',marginTop:'30px',width:'90%',height:'auto'}} elevation={3}>
                  <div style={{display:'inline-flex',marginLeft:'20%',}}>
                      <div>
                      <Button variant="contained" style={{backgroundColor:'#4f4f4e',borderRadius:'15px 15px 15px 15px',color:'white'}} >Movie shots</Button>
                      <Button>Project</Button>
                      </div>
                  </div>
                      <Grid container >
                          
                          <Grid item md={2} xs={12} sm={4}>
                      <div className="button-list">
                          <ul style={{marginLeft:'10px',listStyle:'none',backgroundColor:'#5c5959',width:'150px',borderRadius:'9px 9px 9px 9px'}}>
                              <li>
                                <Button style={{color:'white',marginTop:'5px'}} onClick={setPhysics} >  Physics </Button> 
                              </li>
                              <li>
                               <Button style={{color:'white',marginTop:'5px'}} onClick={setMeth} >   Maths </Button>
                              </li>
                              <li>
                              <Button style={{color:'white',marginTop:'5px'}} onClick={setEnglish}>       English </Button>
                              </li>
                              <li>
                              <Button style={{color:'white',marginTop:'5px'}} onClick={setG}>       G.K </Button>
                              </li>
                              <li>
                              <Button style={{color:'white',marginTop:'5px'}}>        Others </Button>
                              </li>
                          </ul>
                      </div>
                      </Grid>
                      <Grid item md={9} xs={12} sm={7}> 
                          <div className="idea">
                          {!phy ? <div> </div>: <div> 
                          { idea.map((ob)=>
                          <div style={{display:'inline-flex',flexWrap:'wrap'}}>
                            <div className="home-img2" >
                                  <Typography className="img-text2" >{ob.text}</Typography>
                               
                                 </div>
                                 </div>
                            )}
                            </div> } 
                            {!maths ? <div> </div>: <div> 
                          { mathsIdea.map((ob)=>
                          <div style={{display:'inline-flex',flexWrap:'wrap'}}>
                            <div className="home-img2" >
                                  <Typography className="img-text2" >{ob.text}</Typography>
                               
                                 </div>
                                 </div>
                            )}
                            </div> } 
                            {!eng ? <div> </div>: <div> 
                          { engIdea.map((ob)=>
                          <div style={{display:'inline-flex',flexWrap:'wrap'}}>
                            <div className="home-img2" >
                                  <Typography className="img-text2" >{ob.text}</Typography>
                               
                                 </div>
                                 </div>
                            )}
                            </div> } 
                            {!gk ? <div> </div>: <div> 
                          { gkIdea.map((ob)=>
                          <div style={{display:'inline-flex',flexWrap:'wrap'}}>
                            <div className="home-img2" >
                                  <Typography className="img-text2" >{ob.text}</Typography>
                               
                                 </div>
                                 </div>
                            )}
                            </div> } 
                          </div>
                      </Grid>
                      <Grid item md={1} xs={12} sm={1}>
                          <Button style={{marginTop:'50px',paddingLeft:'25px'}}
                          onClick={()=>{
                            if(phy)
                            {
                            const name= prompt('Enter Idea');
                            if(name){
                                setIdea(state=>(
                                    [...idea,{text:name,}]
                                ));
                                }
                            }
                                if(maths){
                                    const name= prompt('Enter Idea');
                                    if(name){
                                        setMIdea(state=>(
                                            [...mathsIdea,{text:name,}]
                                        ));  
                                }   
                                }
                                if(eng){
                                    const name= prompt('Enter Idea');
                                    if(name){
                                        setEIdea(state=>(
                                            [...engIdea,{text:name,}]
                                        ));  
                                }   
                                }
                                if(gk){
                                    const name= prompt('Enter Idea');
                                    if(name){
                                        setGIdea(state=>(
                                            [...gkIdea,{text:name,}]
                                        ));  
                                }   
                                }
                        }}
                      
                        ><div> <p >Add idea</p></div>
                       
                        <div>
                            <SubdirectoryArrowLeft /></div></Button>
                      </Grid>
                      </Grid>
                  </Paper>
              </div>
          </Grid>
           
          <Grid item md={3} xs={12} sm={11} className="paper">
              <Grid container style={{marginLeft:'24px'}}>
                  <Grid item md={12}  >
            <Paper elevation={3} style={{marginTop:'20px',height:'auto',widows:'100%',marginRight:'40px'}}>
            <div style={{backgroundColor:'gray'}}><Typography variant="h6" style={{marginLeft:'20px',paddingTop:'10px',paddingBottom:'10px'}}>Search the User</Typography></div>
            <div style={{marginTop:'20px',display:'inline-flex',flexWrap:'wrap'}}>
              
          {        person.map((obj)=>
                    <div style={{marginLeft:'20px'}}><div >
                        <img style={{maxHeight:'80px',width:'120px'}} src={obj.img}/></div>
                        <div style={{textAlign:'center'}} >{obj.name}</div> </div>
                )}
            </div>
            </Paper>
            </Grid>
          </Grid>
          </Grid>
        </Grid>
        </div>
      );
}
 
export default Start;
