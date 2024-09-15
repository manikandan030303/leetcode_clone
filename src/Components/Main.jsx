import React from 'react'
import Container from '../Components/Container';
import Container2 from '../Components/Container2';
import Container3 from '../Components/Container3';
import Workspace from '../Components/Workspace';
import Companyimg from '../Components/Companyimg';
import Footertop from '../Components/Footertop';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

export default function Main() {
  return (
    <div className='Main'>
       <Navbar/>
      <Container/>
      <Container2/>
      <Container3/>
      <Workspace/>
      <Companyimg/>
      <Footertop/>
      <Footer/>
     
       
      

    </div>
  )
}


