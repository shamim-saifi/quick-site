import React, { useEffect } from 'react';
import {
  Box,
  Button,
  CircularProgress,
  HStack,
  Heading,
  IconButton,
  Img,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import bg from '../../img/bg.png';
import home from '../../img/home.webp';
import InvoiceStep from '../InvoiceStep/InvoiceStep';
import InvoiceStepCard from '../InvoiceStep/InvoiceStepCard';
import phone from '../../img/phone.gif';
import black from '../../img/black.jpg';
import { FaFingerprint,FaVrCardboard } from "react-icons/fa";
import About from '../About/About';
import { useNavigate } from 'react-router-dom';
import temp from '../../img/temp.png'
import bills from '../../img/bills.jpg'




import Aos from 'aos';
import 'aos/dist/aos.css'

const Home = () => {
  const navigate=useNavigate()

  useEffect(()=>{
    Aos.init()
  },[])


  return (
    <>
      <VStack w={'100%'}  fontFamily={'Roboto'} spacing={'10'} p={'8'}>
        <Heading
          letterSpacing={'5px'}
          fontSize={['4vmax', '5vmax']}
          as={'h1'}
          p={'10px'}
          textAlign={'center'}
          children={`Arriving soon with a kickass AI Invoice generator`}
          data-aos="fade-up"
          bgGradient='linear(to-l,#742cd0, #fd43a4,#fbb44d )'
          bgClip='text'
         
        />
        <Box data-aos="zoom-in" data-aos-offset="10" >     
          <Button  letterSpacing={'1px'} size={['md','lg']} colorScheme={'purple'} color={'white'} onClick={()=>(navigate('/tryfree') )} children={'Get Your First Invoice Now'} />
        </Box>
        <HStack data-aos="fade-up" w={{base:'100%',md:'90%'}} justifyContent={'space-evenly'} >
          <Img data-aos="fade-right" data-aos-duration="1000"  border={'1px solid black'}  w={{base:'30%',md:'30%'}} src={bills} alt={'bills'} />
          <Img data-aos="fade-left" data-aos-duration="1000"  border={'1px solid black'}  w={{base:'30%',md:'30%'}} src={temp} alt={'temp'} />
        </HStack>
      </VStack>

      {/* video show block */}
      <Stack data-aos="fade-up" m={'4vmax 0'}  w={'100%'} spacing={{base:'20',md:'10'}} fontFamily={'Roboto'} p={{base:'2',md:'8'}} direction={{base:'column',md:'column',lg:'row'}} justifyContent={{base:'center',md:'space-between'}} alignItems={'center'} >
        <VStack  w={{base:'90%',md:'80%',lg:'60%'}}  spacing={'8'}  alignItems={'flex-start'} p={'2vmax'} >
          <Heading color={'#8159d2'} fontSize={['3vmax', '4vmax']} children={'Your bills are not yours to worry! Start Now'} />
          <Text
            fontSize={['md','lg','xl']} color={'gray'} 
            children={'Introducing our free online invoice generator - the ultimate solution to simplify your billing process. Say goodbye to the headache of manual invoicing and hello to effortless, professional invoices. With a user-friendly interface and customizable templates, you can easily create, edit, and download invoices within minutes. Plus, our secure system ensures the safety of your client information. Start using our free online invoice generator today and take your business to the next level!'} 
           />
           <Button letterSpacing={'1px'} size={['md','lg']} colorScheme={'purple'} onClick={()=>(navigate('/tryfree') )} children={'Get Start Now'} />
        </VStack>

        <HStack w={{base:'90%',md:'80%',lg:'60%'}}  p={'2vmax'} justifyContent={'center'} alignItems={'center'} >
          <Img w={{base:'100%',md:'90%',lg:'80%'}}  h={'100%'} src={phone} alt='phoneImg'/>
        </HStack>

      </Stack>


      {/* two card for secure and no hide face */}
      <Stack spacing={'10'} m={'2vmax 0'} p={{base:'2',md:'8'}} fontFamily={'Roboto'} w={'100%'} direction={{base:'column',md:'row'}} justifyContent={{base:'center',md:'space-evenly'}} >
        <VStack id='scalItemOnHover' data-aos="fade-up-right" data-aos-duration="2000" bg={'#8159d2'} color={'white'} rounded={'lg'} p={{base:'2',md:'8'}}    alignItems={'center'} justifyContent={'center'} spacing={'4'}>
          <Box color={'purple.200'} fontSize={['4vmax','3vmax']} ><FaFingerprint /></Box>
          <Heading fontSize={['2vmax', '3vmax']}  textAlign={'center'} as={'h3'} children={'Secure Client Data'} />
          <Text fontSize={['md','lg','xl']} p={'2'} textAlign={'center'} color={'purple.200'} children={'With us, you do not have to worry about your client privacy anymore. With our private cloud solution, we have got your covered.'} />               
        </VStack>

        <VStack id='scalItemOnHover' data-aos="fade-up-left" data-aos-duration="2000" bgColor={'#8159d2'} color={'white'} rounded={'lg'} p={{base:'2',md:'8'}}    alignItems={'center'} justifyContent={'center'}   spacing={'4'}>
          <Box color={'purple.200'} fontSize={['4vmax','3vmax']} ><FaVrCardboard /></Box>
          <Heading fontSize={['2vmax', '3vmax']}  textAlign={'center'} as={'h3'} children={'No Hidden Fees'} />
          <Text fontSize={['md','lg','xl']} p={'2'} textAlign={'center'} color={'purple.200'} children={'With us, you do not have to worry about your client privacy anymore. With our private cloud solution, we have got your covered.'} />               
        </VStack>
      </Stack>


      {/* black img and block */}
      <Box data-aos="fade-up" data-aos-duration="1000" m={'6vmax 0'}>
        <VStack
             fontFamily={'Roboto'} spacing={'10'} w={'100%'} h={'60vh'} 
            bgImage={black} bgRepeat={'no-repeat'} bgSize={'cover'} bgPos={'center'} bgAttachment={'center'} 
            justifyContent={'center'} alignItems={'center'} 
            id='black' pos={'relative'}
          >
          <Heading textAlign={'center'} zIndex={'9'} color={'white'} fontWeight={'800'} w={'70%'}  fontSize={['3vmax', '4vmax']}   children={' Take control of your invoicing, take control of your profits.'} />
          <Button  zIndex={'9'} letterSpacing={'1px'} size={['md','lg']} colorScheme={'purple'} onClick={()=>(navigate('/tryfree') )} children={'Get Start Now'} />
        </VStack>
      </Box>



      {/* <InvoiceStep /> */}   
      <InvoiceStepCard />

      {/* about block */}
      <About />


    </>
  );
};

export default Home;
