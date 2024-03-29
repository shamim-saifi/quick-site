import { Box, Button, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { UserForgetPassword } from '../../redux/actions/UserActions'

const ForgetPassword = () => {
  const [email,SetEmail]=useState('')

  const dispatch=useDispatch()


  const ForgetPasswordHandler= async (e)=>{
    e.preventDefault()
    await dispatch(UserForgetPassword(email)); 

  }

  return (
    <VStack w={'100%'} h={'100vh'} spacing={'16'} justifyContent={'center'} alignItems={'center'}  >
      <Heading letterSpacing={'5px'} fontFamily={'Roboto'} children={'Re-Set your Password '} textAlign={'center'} />
        <Box w={{base:'90%',md:'50%'}}>
          <form onSubmit={ForgetPasswordHandler} style={{padding:'1vmax'}} >
              <Input mb={'3vmax'} focusBorderColor={'purple.400'} required onChange={(e)=>SetEmail(e.target.value)} value={email} fontFamily={'Roboto'} size={'lg'} fontSize={['2vmax','1.8vmax','1.2vmax']} type="text" placeholder="Enter Your Email" />
              <Button  letterSpacing={'5px'} fontFamily={'Roboto'} type={'submit'} w={'100%'} children={'Forget Password'}  variant={'solid'} colorScheme={'purple'} />

          </form>
        </Box>
    </VStack>
  )
}

export default ForgetPassword