import React, { useState } from 'react';
import '../App.css'
import logo from '../assets/img/inzacklogo.jpg'
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

import { Grid, Typography } from '@material-ui/core';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const [isBold, setIsBold] = useState(false);
  const [color,setColor] = useState('');
  let inzack=''
  let privacy=''
  let reward=''
  let contact=''
  let inzackclr=''
  let privacyclr=''
  let rewardclr=''
  let contactclr=''

    if(window.location.pathname=="/inzack")
    {
      inzack='bolder'
      inzackclr='black'
    }
    if(window.location.pathname=="/privacy")
    {
      privacy='bolder'
      privacyclr='black'
    }
    if(window.location.pathname=="/rewards")
    {
      reward='bolder'
      rewardclr='black'
    }

    if(window.location.pathname=="/contact")
    {
      contact='bolder'
      contactclr='black'
    }



  console.log(isBold)

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Grid container> 
    <Grid item md={1}>
    </Grid>
    <Grid item md={10} xs={12}>
      <Navbar color="white" light expand="lg" >
        <NavbarBrand href="/" style={{marginLeft:'10px'}}><div style={{display:'inline-flex'}}><img src={logo} style={{height:'30px'}}/> <Typography variant="h6" style={{fontFamily:'Roboto',marginLeft:'12px',paddingTop:'4px'}}>Inzack </Typography></div></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
        <div style={{marginLeft:'45%'}}>
          <Nav  navbar >
          
            <NavItem style={{marginLeft:'50px'}} >
              <NavLink href="/inzack"  style={{fontWeight:inzack,color:inzackclr}}>What is inzack</NavLink>
            </NavItem>
            <NavItem style={{marginLeft:'50px'}} >
              <NavLink href="/privacy" style={{fontWeight:privacy,color:privacyclr}}> Privacy</NavLink>
            </NavItem>
            <NavItem style={{marginLeft:'50px'}} >
              <NavLink href="/rewards" color="primary" style={{fontWeight:reward,color:rewardclr}}> Rewards</NavLink>
            </NavItem>
           
            <NavItem style={{marginLeft:'50px'}} >
              <NavLink href="/contact" style={{fontWeight:contact,color:contactclr}}>Contact us</NavLink>
            </NavItem>
           
           
          </Nav>
          </div>
      
        </Collapse>
      </Navbar>
      </Grid>
      <Grid item md={1}></Grid>
      </Grid>
  );
}

export default Header;