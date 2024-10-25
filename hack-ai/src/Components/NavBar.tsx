import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const NavBar = () => {

  const [Drop,setDrop] = useState<any>(0);
  const DropHandle=()=>{
    if(Drop === 0){
      setDrop(1);
    }
    if(Drop === 1){
      setDrop(0);
    }
  }


  return (
    <Navbar>
      <div className="container">
      <Profile>
      </Profile>
      </div>
        <nav>
          <Link to={`/`}>
           Introduction
          </Link>
          <Link  to={''} onClick={()=>DropHandle()}>
            <div>
            Contents
            </div>
          </Link>
            {Drop === 1 && 
            <div className='drop'>
              <Link to={`/road`}>Road Map</Link>
              <Link to={`/tool`}>Tools Required</Link>
              <Link to={`/res`}>Resources</Link>
            </div>}
          <Link to={'/Proj'}>
            Projects
          </Link>
        </nav>
    </Navbar>
  )
}

const Profile = styled.div`

`

const Navbar = styled.div`
.drop{

margin: .5rem 0 0 0;
width: 9vw ;
height: auto;
a{
  
  flex-direction: row;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 10vw;
    height: 5vh;
    text-decoration: none;
    color: #000000;
    margin: 1rem 0 0 0rem;
    padding: .5rem;
    /* background: rgba( 155, 99, 15, 0.75 ); */
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 8.5px );
-webkit-backdrop-filter: blur( 8.5px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
    @media screen and (max-width: 900px){
    font-size: .6rem;
  }
  }
  a:hover{
    -webkit-transition: background-color 200ms linear;
    -ms-transition: background-color 200ms linear;
    transition: background-color 200ms linear;
    /* background: rgba( 31, 145, 228, 0.55 ); */
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 7.5px );
    -webkit-backdrop-filter: blur( 7.5px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
  }
}
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 15vw;
  height: 90vh;
  /* background: rgba( 155, 99, 15, 0.75 ); */
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 8.5px );
-webkit-backdrop-filter: blur( 8.5px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
  nav{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  a{
    font-size: 1.9rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 10vw;
    height: 5vh;
    text-decoration: none;
    color: #000000;
    margin: 1rem 0 0 0rem;
    padding: .5rem;
    /* background: rgba( 155, 99, 15, 0.75 ); */
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 8.5px );
-webkit-backdrop-filter: blur( 8.5px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
    @media screen and (max-width: 900px){
    font-size: .8rem;
  }
  }
  a:hover{
    -webkit-transition: background-color 200ms linear;
    -ms-transition: background-color 200ms linear;
    transition: background-color 200ms linear;
    /* background: rgba( 155, 99, 15, 0.75 ); */
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 8.5px );
-webkit-backdrop-filter: blur( 8.5px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
  }
`

export default NavBar
