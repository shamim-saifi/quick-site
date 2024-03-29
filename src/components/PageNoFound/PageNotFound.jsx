import { Box, Button, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { BiSolidErrorAlt } from "react-icons/bi";
import { MdError } from "react-icons/md";
import { useNavigate } from 'react-router-dom';



const PageNotFound = () => {
    const navigate=useNavigate()
  return (
    <Stack w={'100%'} h={'100vh'} justifyContent={'center'} alignItems={'center'} fontFamily={'Roboto'}>
        <Box fontSize={'10vmax'} color={'purple'} >
            <MdError />
        </Box>
        <Text letterSpacing={'5px'} fontSize={'2vmax'} fontWeight={'500'} textAlign={'center'} children={'Page Not Found'} />
        <Button letterSpacing={'5px'}  variant={'link'} colorScheme={'purple'} onClick={()=>navigate('/')}  children={'Go To Home'} />
    </Stack>
  )
}

export default PageNotFound