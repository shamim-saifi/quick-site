import {
    Box,
    Button,
    HStack,
    Heading,
    Img,
    Input,
    Table,
    TableContainer,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
    VStack,
  } from '@chakra-ui/react';
import React from 'react';
import inlogo from '../../img/inLogo.png';


const InvoiceTemplateThree = () => {
    const them='green';
    const inv = 444;
    const invDate = '01 jan 2023';
    const dueDate = '01 jan 2023';
    const terms = 'Net 30';
  return (
    <Box w={'100%'} p={'10'} >
        <VStack spacing={'4'} justifyContent={'center'} alignItems={'center'}>
            <Box maxW={'20%'} minW={'5%'} >
                <Img src={inlogo} alt={'invoice Logo'} />
            </Box>
            <Text fontSize={['md','lg','xl','2xl']} fontWeight={'700'}  children={'Company name'} />
            <HStack fontSize={['xs','sm','md','lg']} >
                <Text children={'Company GST Tin'} />
                <Text children={'Company Address'} />
                <Text children={'City'} />
                <Text children={'State'} />
                <Text children={'Country'} />
            </HStack>
        </VStack>

        <Text color={them} fontWeight={'500'} textTransform={'uppercase'} fontSize={['4vmax','8vmax']} border={'1px solid red'} m={'2vmax 0'} letterSpacing={'5px'} textAlign={'center'} children={'Invoice'} />

        <VStack m={'3vmax 0'} p={'3.5vmax 0'} borderBottom={`2px solid ${them}`} borderTop={`2px solid ${them}`} justifyContent={'center'} alignItems={'center'} >
            <Text fontSize={['lg','xl','2xl']} color={them} borderBottom={`2px solid ${them}`} fontWeight={'700'} children={'Bill To'} />
            <Text fontSize={['md','lg','xl','2xl']}  fontWeight={'500'} children={'Client Company Name'} />
            <HStack fontSize={['xs','sm','md','lg']} >
                <Text children={'Client GST Tin'} />
                <Text children={'Client Address'} />
                <Text children={'City'} />
                <Text children={'State'} />
                <Text children={'Country'} />
            </HStack>
        </VStack>

        <Box m={'2vmax 0'} >
            <HStack w={'100%'} fontSize={['xs','sm','md','lg']}  justifyContent={'space-between'} >
                <Text w={'30%'} textAlign={'center'} children={'Invoice Date'} />
                <Text w={'30%'} textAlign={'center'} children={'Terms'} />
                <Text w={'30%'} textAlign={'center'} children={'Due Date'} />
            </HStack>
            <HStack w={'100%'} fontSize={['xs','sm','md','lg']}  justifyContent={'space-between'}>
                <Text w={'30%'} textAlign={'center'} children={invDate} />
                <Text w={'30%'} textAlign={'center'} children={terms} />
                <Text w={'30%'} textAlign={'center'} children={dueDate} />
            </HStack>
        </Box>       

        <TableContainer w={'100%'}  fontFamily={'Roboto'} fontSize={['xs','sm','md','lg']}  m={'5.5vmax 0'}>
            <Table  variant="simple">
                <Thead bgColor={'green'}>
                    <Tr >
                        <Th color={'white'}>SN#</Th>
                        <Th color={'white'}>Item & Description</Th>
                        <Th color={'white'} isNumeric>Qty</Th>
                        <Th color={'white'} isNumeric>Rate</Th>
                        <Th color={'white'} isNumeric>Amount</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>0</Td>
                        <Td>Laptop and computer</Td>
                        <Td isNumeric>1</Td>
                        <Td isNumeric>100.00</Td>
                        <Td isNumeric>100.00</Td>
                    </Tr>
                </Tbody>
            </Table>
        </TableContainer>

        <HStack  w={'100%'} spacing={'6'} border={'1px solid red'} fontFamily={'Roboto'} fontSize={['sm','md','lg','xl']} justifyContent={'flex-end'}>
            {/* <Text w={'70%'} fontSize={['xs','sm','md','lg']}  children={'Thanks For Your Business'} /> */}

            <HStack m={'2.5vmax 0'} spacing={'10'} justifyContent={'space-between'}>
                <VStack>
                    <Text children={'Sub Total'} />
                    <Text children={`IGST ${'1%'}`} />
                    <Text children={`Cess ${'1%'}`} />
                    <Text p={'2'} color={them} borderBottom={`2px solid ${them}`} borderTop={`2px solid ${them}`} fontWeight={'700'} children={'TOTAL'} />
                </VStack>
                <VStack>
                    <Text children={'4555.00'} />
                    <Text children={'454.00'} />
                    <Text children={'454.00'} />
                    <Text p={'2'} color={them} borderBottom={`2px solid ${them}`} borderTop={`2px solid ${them}`} fontWeight={'700'} children={`RS 404.00`} />
                </VStack>
            </HStack>
      </HStack>


    </Box>
  )
}

export default InvoiceTemplateThree