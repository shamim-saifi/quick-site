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


const InvoiceTemplateTwo = () => {
    const inv = 444;
    const invDate = '01 jan 2023';
    const dueDate = '01 jan 2023';
    const terms = 'Net 30';
    const them='green';
  return (
    <Box w={'100%'} p={'10'} >
        <HStack justifyContent={'space-between'}>
            <Box maxW={'20%'} minW={'5%'} >
                <Img src={inlogo} alt={'invoice Logo'} />
            </Box>
            <VStack fontSize={['xs','sm','md','lg']} fontFamily={'Roboto'} border={'1px solid red'} spacing={'1px'} alignItems={'flex-end'}>
                <Text fontWeight={'700'} children={'Company name'} />
                <Text children={'Name'} />
                <Text children={'Company GST Tin'} />
                <Text children={'Company Address'} />
                <Text children={'City'} />
                <Text children={'State'} />
                <Text children={'Country'} />
            </VStack>
        </HStack>

        <Text fontSize={['xs','sm','md','lg']} border={'1px solid red'} m={'2vmax 0'} letterSpacing={'5px'} textAlign={'center'} children={'Invoice'} />

        <HStack mb={'2vmax'} fontSize={['xs','sm','md','lg']} fontFamily={'Roboto'}  justifyContent={'space-between'}>
            <VStack spacing={'1px'} border={'1px solid red'} alignItems={'flex-start'}>
                <Text fontWeight={'700'} children={'Bill To'} />
                <Text children={'Client Company Name'} />
                <Text children={'Client GST Tin'} />
                <Text children={'Client Address'} />
                <Text children={'City'} />
                <Text children={'State'} />
                <Text children={'Country'} />
            </VStack>
            <VStack border={'1px solid red'} alignItems={'flex-end'}>
                <HStack spacing={'10'} justifyContent={'space-between'}>
                    <VStack alignItems={'flex-start'} fontWeight={'700'} >
                        <Text children={'INVOICE#'} />
                        <Text children={'Invoice Date'} />
                        <Text children={'Terms'} />
                        <Text children={`Due Date`} />
                    </VStack>
                    <VStack alignItems={'flex-end'}>
                    <Text children={`${inv}`} />
                        <Text children={invDate} />
                        <Text children={terms} />
                        <Text children={dueDate} />
                    </VStack>
                </HStack>
            </VStack>
        </HStack>

        <TableContainer w={'100%'}  fontFamily={'Roboto'} fontSize={['xs','sm','md','lg']}  m={'5.5vmax 0'}>
            <Table  variant="simple">
                <Thead bgColor={them}>
                    <Tr >
                        <Th color={'white'}>SN#</Th>
                        <Th color={'white'}>Item</Th>
                        <Th color={'white'}>Description</Th>
                        <Th color={'white'} isNumeric>Qty</Th>
                        <Th color={'white'} isNumeric>Rate</Th>
                        <Th color={'white'} isNumeric>Amount</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>0</Td>
                        <Td>Laptop and computer</Td>
                        <Td>4gb 500gb I-5</Td>
                        <Td isNumeric>1</Td>
                        <Td isNumeric>100.00</Td>
                        <Td isNumeric>100.00</Td>
                    </Tr>
                </Tbody>
            </Table>
        </TableContainer>

        <HStack w={'100%'} spacing={'6'} border={'1px solid red'} fontFamily={'Roboto'} fontSize={['sm','md','lg','xl']} justifyContent={'flex-end'}>
        {/* <Text w={'70%'} fontSize={['xs','sm','md','lg']}  children={'Thanks For Your Business'} /> */}

        <HStack m={'2.5vmax 0'}  spacing={'10'} justifyContent={'space-between'}>
          <VStack>
            <Text children={'Sub Total'} />
            <Text children={`SGST ${'1%'}`} />
            <Text children={`CGST ${'1%'}`} />
            <Text fontWeight={'700'} children={'TOTAL'} />
          </VStack>
          <VStack>
            <Text children={'4555.00'} />
            <Text children={'454.00'} />
            <Text children={'454.00'} />
            <Text fontWeight={'700'} children={`RS 404.00`} />
          </VStack>
        </HStack>
      </HStack>


    </Box>
  )
}

export default InvoiceTemplateTwo