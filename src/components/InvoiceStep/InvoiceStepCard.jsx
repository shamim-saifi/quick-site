import {
  Avatar,
  Button,
  HStack,
  Heading,
  IconButton,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import {
  FaRegUser,
  FaWpforms,
  FaPrint,
  FaTwitter,
  FaLinkedin,
} from 'react-icons/fa';
import { HiOutlineTemplate } from 'react-icons/hi';

import Aos from 'aos';
import 'aos/dist/aos.css';

const InvoiceStepCard = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <VStack spacing={'8'} w={'100%'} m={'50px 0'}>
        <Heading
          as={'h2'}
          fontSize={['2xl', '3xl', '4xl']}
          fontFamily={'Roboto'}
          letterSpacing={'2px'}
          textAlign={'center'}
          children={'Get Your First Invoice in Just Few Esay Steps'}
        />
        <HStack
          w={'80%'}
          spacing={'12'}
          flexWrap={'wrap'}
          justifyContent={'center'}
          alignContent={'center'}
          

        >
          <VStack
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="ease-in-sine"
            borderRadius={'md'}
            boxShadow={'lg'}
            w={'300px'}
            h={'300px'}
            alignItems={'center'}
            justifyContent={'center'}
            border={'1px solid #8159d2'}
           
            // _hover={{
            //   transform:'translateY(10px)',
            // }}
            id='scalItemOnHover'
          >
            <IconButton
              w={'7vmax'}
              h={'7vmax'}
              isRound={true}
              colorScheme="purple"
              icon={<FaRegUser />}
              fontSize={'3vmax'}
            />
            <Heading as={'h3'} children={'First Step'} />
            <Text children={'Login or SignUp'} />
          </VStack>

          <VStack
            data-aos="fade-up"
            data-aos-duration="1100"
            data-aos-easing="ease-in-sine"
            borderRadius={'md'}
            boxShadow={'lg'}
            w={'300px'}
            h={'300px'}
            alignItems={'center'}
            justifyContent={'center'}
            border={'1px solid #8159d2'}
            id='scalItemOnHover'
          >
            <IconButton
              w={'7vmax'}
              h={'7vmax'}
              isRound={true}
              colorScheme="purple"
              icon={<HiOutlineTemplate />}
              fontSize={'3vmax'}
            />
            <Heading as={'h3'} children={'Second Step'} />
            <Text children={'Select Your Template'} />
          </VStack>

          <VStack
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-easing="ease-in-sine"
            borderRadius={'md'}
            boxShadow={'lg'}
            w={'300px'}
            h={'300px'}
            alignItems={'center'}
            justifyContent={'center'}
            border={'1px solid #8159d2'}
            id='scalItemOnHover'
          >
            <IconButton
              w={'7vmax'}
              h={'7vmax'}
              isRound={true}
              colorScheme="purple"
              icon={<FaWpforms />}
              fontSize={'3vmax'}
            />
            <Heading as={'h3'} children={'Third Step'} />
            <Text children={'Fill All Required Details'} />
          </VStack>

          <VStack
            data-aos="fade-up"
            data-aos-duration="1300"
            data-aos-easing="ease-in-sine"
            borderRadius={'md'}
            boxShadow={'lg'}
            w={'300px'}
            h={'300px'}
            alignItems={'center'}
            justifyContent={'center'}
            border={'1px solid #8159d2'}
            id='scalItemOnHover'
          >
            <IconButton
              w={'7vmax'}
              h={'7vmax'}
              isRound={true}
              colorScheme="purple"
              icon={<FaPrint />}
              fontSize={'3vmax'}
            />
            <Heading as={'h3'} children={'Fourth Step'} />
            <Text children={'Print or Download Your Invoice'} />
          </VStack>
        </HStack>
      </VStack>
    </>
  );
};

export default InvoiceStepCard;
