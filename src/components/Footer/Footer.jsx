import { Box, Button, HStack, Heading, Img, Stack, VStack } from '@chakra-ui/react'
import React from 'react'
import { FaInstagram ,FaFacebook,FaTwitter ,FaLinkedin  } from "react-icons/fa";
import ContactForm from '../ContactForm/ContactForm';
import {Link, useNavigate} from 'react-router-dom';
import logo from '../../img/logo.svg'


const Footer = () => {
  const navigate=useNavigate()

  return (
    <>
      {/* <ContactForm /> */}
      <Stack m={'1vmax 0'} w={'100%'} direction={{base:'column',md:'row'}} justifyContent={'space-around'} alignItems={'center'} >
        <HStack color={'white'} >
          <Img  src={logo} alt={'logo'} onClick={()=>navigate('/')} cursor={'pointer'} />
            {/* <Heading color={'white'} size={'md'} children={'Invoice System'} /> */}
        </HStack>
      
        <HStack flexWrap={'wrap'}  spacing={'4'} >

          <Button fontSize={['sm','sm']} variant={'link'} color={'black'} fontWeight={'600'}  > 
            <Link to={'/about'} >About</Link>
          </Button>
          <Button fontSize={['sm','sm']} variant={'link'} color={'black'} fontWeight={'600'}  >
            <Link to={'/support'} >Support</Link>
          </Button>
          <Button fontSize={['sm','sm']} variant={'link'} color={'black'} fontWeight={'600'}  >
            <Link to={'https://www.facebook.com/'} target={'_blank'} >Facebook</Link>
          </Button>
          <Button fontSize={['sm','sm']} variant={'link'} color={'black'} fontWeight={'600'}  >
            <Link to={'https://www.linkedin.com/'} target={'_blank'} >Linkedin</Link>
          </Button>
          <Button fontSize={['sm','sm']} variant={'link'} color={'black'} fontWeight={'600'}  >
            <Link to={'https://www.instagram.com/'} target={'_blank'} >Instagram</Link>
          </Button>
        
        </HStack>
      </Stack>
    </>
  )
}

export default Footer