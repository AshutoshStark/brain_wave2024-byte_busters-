import React from 'react'
import styled from 'styled-components'
import Layout from '../Components/Layout'
import Project from '../Components/Home/Project'


const Projects = () => {

  return (
    <Layout>
      <MainDiv>
        <Project/>
      </MainDiv>
    </Layout>
  )
}

const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const MainDiv = styled.div`
    width: 80vw;
  height: 90vh;
  /* background: rgba( 155, 99, 15, 0.6 ); */
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 4px );
-webkit-backdrop-filter: blur( 4px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y: scroll;
`


export default Projects
