import { Box, Button, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { UserResetPassword } from '../../redux/actions/UserActions'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import toast from 'react-hot-toast'


const ResetPassword = () => {
  const [password,SetNewPassword]=useState('')
  const [ReEnterPassword,SetReEnterPassword]=useState('')

  const dispatch=useDispatch()
  const navigate=useNavigate()
  const params=useParams()


  const ResetPasswordHandler= async (e)=>{
    e.preventDefault()
    if(password===ReEnterPassword){
      await navigate('/')
      await dispatch(UserResetPassword(password,params.token)); 
    }else{
      toast.error('passwords do not match.')
    }
    

  }

  return (
    <VStack w={'100%'} h={'100vh'} spacing={'16'} justifyContent={'center'} alignItems={'center'}  >
    <Heading letterSpacing={'5px'} fontFamily={'Roboto'} children={'set your Password '} textAlign={'center'} />
    <Box w={{base:'90%',md:'50%'}}>
      <form onSubmit={ResetPasswordHandler} style={{padding:'1vmax'}} >
          <Input focusBorderColor={'purple.400'} required onChange={(e)=>SetNewPassword(e.target.value)} value={password} fontFamily={'Roboto'} size={'lg'} fontSize={['2vmax','1.8vmax','1.2vmax']} type="password" placeholder="Enter Your New Password" />
          <Input focusBorderColor={'purple.400'} required onChange={(e)=>SetReEnterPassword(e.target.value)} value={ReEnterPassword} fontFamily={'Roboto'} size={'lg'} fontSize={['2vmax','1.8vmax','1.2vmax']} m={'2vmax 0'} type="password" placeholder="Re-Enter Your Password" />
    
          <Button letterSpacing={'5px'} fontFamily={'Roboto'} type={'submit'} w={'100%'} children={'Forget Password'}  variant={'solid'} colorScheme={'purple'} />
    
      </form>
    </Box>
</VStack>
  )
}

export default ResetPassword