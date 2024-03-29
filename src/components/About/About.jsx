import { Button, ButtonSpinner, Container, HStack, Heading, Img, Stack, Text, VStack } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import block from '../../img/block.jpg'
// import Carousel from 'react-elastic-carousel';

import Aos from 'aos';
import 'aos/dist/aos.css'

const About = () => {

  useEffect(()=>{
    Aos.init()
  },[])

  return (
    <VStack w={'100%'} p={{base:'2',md:'10'}} spacing={'16'}>
      <Heading
        textAlign={'center'}
        children={'Everything you need to get creative invoice done'}
        fontSize={'5vmax'}
        color={'#8159d2'}
        as={'h2'} fontFamily={'Roboto'} letterSpacing={'5px'}
        data-aos="fade-up"
        data-aos-duration="1000"
        bgGradient='linear(to-l,#742cd0, #fd43a4,#fbb44d )'
        bgClip='text'
      />
      <Text
      data-aos="fade-up" data-aos-duration="1000"
        textAlign={'center'}
        children={'Bring your ideas to life with professional digital assets, resources and services'}
        fontSize={'2vmax'} fontFamily={'Roboto'}
      />
      <Stack data-aos="fade-up" data-aos-duration="1000" m={'1vmax 0'} w={'100%'} direction={{base:'column',md:'row'}} justifyContent={'center'} alignItems={'center'} >
            <VStack  >
              <Text  fontFamily={'Roboto'} textAlign={'center'} fontSize={'3vmax'} fontWeight={'500'}  children={'Take your First step to get Utmost fine invoice. Try our creative template for free'} />
              <Button letterSpacing={'5px'}  fontFamily={'Roboto'} size={['md','lg',]} variant={'solid'} colorScheme={'purple'} children={'Try Free'} />
            </VStack>
            <Stack  >
              <Img src={block} alt={'slider'} w={'50vmax'} />
      
            </Stack>
      </Stack>
    </VStack>
  );
};

export default About;
