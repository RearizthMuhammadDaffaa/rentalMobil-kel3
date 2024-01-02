import { Box, Button, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import kamera from "../assets/img/image 6.png"
import { useParams,Link } from 'react-router-dom'

const List = ({kamera}) => {
  
  return (  

      <Stack direction='column' 
      spacing={3} sx={{padding:'40px 20px',gap:'30px',margin:'40px 0px'}}>
        <Box sx={{
          display:'flex',
          justifyContent:'center',
          flexDirection:'column',
          alignItems:'center',
          gap:'20px',
          padding:'13px 16px 5px 16px',
          borderRadius:'20px',
          boxSizing:'border-box',
          background:'#F2F2F2'}}>
          <Container sx={{display:'flex',justifyContent:'space-between',position:'relative'}}>
            <Typography variant='h5'>
              {kamera.name}
            </Typography>
            <img src={kamera.url} alt="" 
            width="150px" 
            height="150px" 
            style={{
              position:'absolute',
              right:'-20px',
              top:'-65px'
              }}/>
          </Container>

          <Container sx={{marginTop:'30px',boxSizing:'border-box'}}>
          <Typography sx={{color:'#ABABAB',fontSize:'14px'}}>
            {kamera.cinemacam} <span>|</span> {kamera.battery} <span>|</span> {kamera.lens} 
          </Typography>
          </Container>
          <Container sx={{display:'flex',justifyContent:'center',paddingBottom:'15px'}}>
            <Link to={`/${kamera.id}`} style={{width:'100%'}}>
              <Button sx={{width:'100%'}} variant='contained' >Rental</Button>
            </Link>
            <Link style={{width:'100%'}}>
            <Button variant='outlined' sx={{width:'100%',marginLeft:'10px'}}>Info</Button>
            </Link>
          </Container>
        </Box>
      
       
       
      </Stack>
 
  )
}

export default List