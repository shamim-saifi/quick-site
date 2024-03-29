import {
  Box,
  Button,
  HStack,
  IconButton,
  Stack,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerFooter,
  useDisclosure,
  VStack,
  Heading,
  Img,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import React from 'react';
import { FaHamburger } from 'react-icons/fa';
import { HiMenu } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../redux/actions/UserActions';
import logo from '../../img/logo.svg'
import ContactForm from '../ContactForm/ContactForm';

const Header = () => {
  
  const {  isAuthenticated } = useSelector(
    state => state.userContainer
  );
  const {isOpen,onClose,onOpen}=useDisclosure();

  const navigate=useNavigate()
  const dispatch=useDispatch()


  const LogoutHandler=async()=>{
      await dispatch(logout())
      navigate('/')
  }
  // const contactModel=()=>{
  //   // e.stopPropagation();
  //   onOpen()
  // }
  return (
    <>
    
    <HStack  zIndex={'10'} bgColor={'white'} p={'5px'} boxShadow={'md'}  w={'100%'} justifyContent={'space-between'} alignItems={'center'}  pos={'sticky'} top={'0'} left={'0'} >

      <Box w={'30%'} >
          <Img  src={logo} alt={'logo'} onClick={()=>navigate('/')} cursor={'pointer'} />
      </Box>
      <HStack w={'70%'}  justifyContent={'flex-end'}>
        <HStack   display={{base:'none',lg:'block'}} >
          <Button m={'0 10px'} fontSize={['md','lg']} variant={'ghost'} onClick={()=>navigate('/')} children={'Home'} />
          <Button m={'0 10px'} fontSize={['md','lg']} variant={'ghost'}  onClick={()=>navigate('/tryfree')} children={'Try Free'} />
          {
            isAuthenticated?(
              <>
                <Button m={'0 10px'} fontSize={['md','lg']} variant={'solid'} colorScheme={'purple'} onClick={()=>navigate('/profile')} children={'Profile'} />
                <Button m={'0 10px'} fontSize={['md','lg']} variant={'outline'} colorScheme={'purple'} onClick={()=>LogoutHandler()} children={'Logout'} />
              </>
            ):(
              <>
                <Button m={'0 10px'} fontSize={['md','lg']} variant={'ghost'}  onClick={()=>navigate('/login')} children={'Login'} />
                <Button m={'0 10px'} fontSize={['md','lg']} variant={'solid'} colorScheme={'purple'} onClick={()=>navigate('/signup')} children={'Registration'} />
              </>
            )
          }
        </HStack>
       
        <Button       
          variant={'ghost'}
          colorScheme={'black'}
          children={<HiMenu />}
          onClick={onOpen}
          fontSize={'2xl'}
          display={{base:'block',lg:'none'}}
          justifyContent={'center'}
          alignItems={'center'}
          p={'2'}
        />
      </HStack>

    </HStack>
      <Drawer isOpen={isOpen} onClose={onClose} placement={'right'} >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
           <Heading size={'md'} children={'Welcome in Invoice'} />
          </DrawerHeader>
          <DrawerBody>
            <VStack alignItems={'flex-start'} justifyContent={'center'}>
              <Button textAlign={'center'} w={'100%'} variant={'ghost'} colorScheme={'purple'} onClick={()=>(navigate('/'), onClose() )} children={'Home'} />
              <Button textAlign={'center'} w={'100%'} variant={'ghost'} colorScheme={'purple'} onClick={()=>(navigate('/profile'), onClose() )} children={'Profile'} />
              <Button textAlign={'center'} w={'100%'} variant={'ghost'} colorScheme={'purple'} onClick={()=>(navigate('/tryfree'), onClose() )} children={'Try Invoice'} />
              <Button textAlign={'center'} w={'100%'} variant={'ghost'} colorScheme={'purple'} onClick={()=>(navigate('/contact'), onClose() )} children={'Contact Us'} />
              
            </VStack>
          </DrawerBody>
          <DrawerFooter  >
            <HStack w={'100%'} justifyContent={'space-between'} mb={'8'} >
              {
                isAuthenticated?(
                  <Button onClick={()=>LogoutHandler()} variant={'solid'} colorScheme={'red'} children={'Log Out'} />
                  
                  ):(
                    <>
                   <Button colorScheme={'purple'} onClick={()=>(navigate('/login'), onClose() )}  children={'Login'} />
                   <Button colorScheme={'purple'} onClick={()=>(navigate('/signUp'), onClose() )}  children={'signUp'} />
                  </>
                )
              }           
            </HStack>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>


      {/* contact model */}
      {/* <Modal size={'full'} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalCloseButton />
                    <ModalBody>
                      <ContactForm />
                    </ModalBody>
                </ModalContent>
      </Modal> */}
  </>
  );
};

export default Header;
