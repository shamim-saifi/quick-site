import {
  Box,
  Button,
  HStack,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { GoMail } from 'react-icons/go';
import { BsPhone } from 'react-icons/bs';
import {
  FaRegUser,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from 'react-icons/fa';
import { MdChatBubbleOutline } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { Contact } from '../../redux/actions/UserActions';
import { useNavigate } from 'react-router-dom';

const ContactForm = () => {
  const [name, SetName] = useState('');
  const [phone, SetPhone] = useState('');
  const [email, SetEmail] = useState('');
  const [message, SetMessage] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const ContactHandler = e => {
    e.preventDefault();
    dispatch(Contact(name, email, phone, message));
  };

  return (
    <VStack border={'1px solid red'} w={'100%'} minH={'100vh'}>
      <Heading
        letterSpacing={'5px'}
        fontSize={['4vmax', '5vmax']}
        p={'10px'}
        bgGradient="linear(to-l,#742cd0, #fd43a4,#fbb44d )"
        bgClip="text"
        textAlign={'center'}
        children={
          'Setting goals is the first step in turning the invisible into the visible.'
        }
      />

    
         {/* form section -2 */}
         <VStack  spacing={'8'} w={{ base: '100%', md: '100%' }}  alignItems={'center'} justifyContent={'center'} border={'1px solid red'}>
                <Heading textAlign={'center'}  fontFamily={'Roboto'} fontSize={{ base: '3vmax', md: '2.5vmax' }} children={'Start a Conversation With Us'} />
                <Box border={'1px solid gold'} w={{ base: '100%', md: '50%' }} m={{ base: '0 1.5vmax'}}  >
                <form onSubmit={ContactHandler} style={{width:"100%"}} >
                    <InputGroup size={'lg'} >
                        <InputLeftElement>
                            <FaRegUser />
                        </InputLeftElement>
                        <Input  focusBorderColor={'purple.400'} required value={name} onChange={(e)=>SetName(e.target.value)} type="text" placeholder="Name" />
                    </InputGroup>

                    <InputGroup size={'lg'} m={'1vmax 0'}>
                        <InputLeftElement>
                            <GoMail />
                        </InputLeftElement>
                        <Input focusBorderColor={'purple.400'} required value={email} onChange={(e)=>SetEmail(e.target.value)} type="email" placeholder="Email" />
                    </InputGroup>

                    <InputGroup size={'lg'}>
                        <InputLeftElement>
                            <BsPhone  />
                        </InputLeftElement>
                        <Input focusBorderColor={'purple.400'} required value={phone} onChange={(e)=>SetPhone(e.target.value)} type="text" placeholder="Phone" />
                    </InputGroup>

                    <Textarea focusBorderColor={'purple.400'} required value={message} onChange={(e)=>SetMessage(e.target.value)}  m={'1vmax 0'} placeholder={'Your Message'} resize={'vertical'} />
                    <Button mb={'4'} type={'submit'} children={'Submit'} variant={'solid'} colorScheme={'purple'} />

                </form>
                </Box>
            </VStack>
    </VStack>
  );
};

export default ContactForm;
