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
import { CreateInvoice } from '../../redux/actions/InvoiceActions';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
 
const InvoiceTemplateOne = ({
  BillData,totalAmountWithTax,totalAmount,totalSgstAmount,totalCgstAmount,invoiceItem,invoiceLogo,
  invoiceName,invoiceNumber,invoiceDate,invoiceDueDate,
  CompanyName,YourName,CompanyGSTTin,CompanyCity,CompanyState,CompanyCountry,
  ClientCompanyName,ClientName,ClientGSTTin,ClientCity,ClientState,ClientCountry
}) => {
 
  const them='green';

  const dispatch=useDispatch()
  const navigate=useNavigate()

  const InvoiceDataHandler=async()=>{
    
    await dispatch(CreateInvoice(invoiceNumber, totalAmountWithTax, invoiceDate, invoiceItem, ClientCompanyName))
    window.print()
    navigate('/profile')
}

  return (
    <Box w={'100%'} p={'1'}>
      <HStack justifyContent={'space-between'}>
        <Box maxW={'20%'} minW={'5%'} >
          <Img src={invoiceLogo} alt={'invoice Logo'} />
        </Box>
        <VStack fontSize={['xs','sm','md','lg']} fontFamily={'Roboto'}  spacing={'1px'} alignItems={'flex-end'}>
          <Text fontWeight={'700'} children={CompanyName} />
          <Text children={YourName} />
          <Text children={CompanyGSTTin} />
          <Text children={'Company Address'} />
          <Text children={CompanyCity} />
          <Text children={CompanyState} />
          <Text children={CompanyCountry} />
        </VStack>
      </HStack>

      <Text fontSize={['xs','sm','md','lg']}  m={'2vmax 0'} letterSpacing={'5px'} textAlign={'center'} children={invoiceName} />

      <HStack mb={'1.5vmax'} fontSize={['xs','sm','md','lg']} fontFamily={'Roboto'}  justifyContent={'space-between'}>
        <VStack spacing={'1px'} alignItems={'flex-start'}>
          <Text fontWeight={'700'} children={'Bill To'} />
          <Text children={ClientCompanyName} />
          <Text children={ClientName} />
          <Text children={ClientGSTTin} />
          <Text children={ClientCity} />
          <Text children={ClientState} />
          <Text children={ClientCountry} />
        </VStack>
        <VStack  alignItems={'flex-end'}>
          <Text children={`INV-${invoiceNumber}`} />
        </VStack>
      </HStack>

      <HStack fontSize={['xs','sm','md','lg']} color={'white'} bgColor={them} p={'2'} justifyContent={'space-between'} >
        <Text children={'Invoice Date'} />
        {/* <Text children={'Terms'} /> */}
        <Text children={'Due Date'} />
      </HStack>
      <HStack fontSize={['xs','sm','md','lg']} p={'2'} justifyContent={'space-between'}>
        <Text children={invoiceDate} />
        {/* <Text children={terms} /> */}
        <Text children={invoiceDueDate} />
      </HStack>


      <TableContainer   fontFamily={'Roboto'} fontSize={['xs','sm','md','lg']}  m={'2vmax 0'}>
        <Table  >
          <Thead bgColor={them}>
            <Tr >
              {/* <Th color={'white'}>SN#</Th> */}
              <Th color={'white'}>Item & Description</Th>
              <Th color={'white'} isNumeric>Qty</Th>
              <Th color={'white'} isNumeric>Rate</Th>
              <Th color={'white'} isNumeric>SGST %</Th>
              <Th color={'white'} isNumeric>CGST %</Th>
              {/* <Th color={'white'} isNumeric>Amount </Th> */}
              <Th color={'white'} isNumeric>Amount</Th>

            </Tr>
          </Thead>
          <Tbody>
            {
              BillData.map((item,i)=>(
                <Tr key={i} >
                  {/* <Td>0</Td> */}
                  <Td>{item.itemDes}</Td>
                  <Td isNumeric>{item.qty}</Td>
                  <Td isNumeric>{item.rate}</Td>
                  <Td isNumeric>
                    {item.sgst}
                    <Text textAlign={'center'} children={`RS - ${item.sgstTotalAmount}`} size={'xm'}/>
                  </Td>
                  <Td isNumeric>
                    {item.cgst}
                    <Text textAlign={'center'} children={`RS - ${item.cgstTotalAmount}`} size={'xm'}/>
                  </Td>
                  {/* <Td isNumeric>{item.amount}</Td> */}
                  <Td isNumeric>{item.amountWithTax}</Td>
                </Tr>
              ))
            }
            <Tr fontWeight={'700'}>
                <Td></Td>
                <Td></Td>
                <Td isNumeric>Total</Td>
                <Td isNumeric>{totalSgstAmount}</Td>
                <Td isNumeric>{totalCgstAmount}</Td>
                {/* <Td isNumeric>{totalAmount}</Td> */}
                <Td isNumeric>{totalAmountWithTax}</Td>
            </Tr>
         
          </Tbody>
        </Table>
      </TableContainer>

      <HStack w={'100%'} spacing={'6'} border={'1px solid gray'} p={'3'} fontFamily={'Roboto'} fontSize={['sm','md','lg','xl']} justifyContent={'flex-end'}>
        {/* <Text w={'70%'} fontSize={['xs','sm','md','lg']}  children={'Thanks For Your Business'} /> */}

        <HStack spacing={'10'} justifyContent={'space-between'}>
          <VStack>
            <Text children={'Sub Total'} />
            <Text children={`TAX`} />
            <Text fontWeight={'700'} children={'TOTAL'} />
            {/* <Text children={`Cess ${'1%'}`} /> */}
          </VStack>
          <VStack>
            <Text children={totalAmount} />
            <Text children={`${totalSgstAmount+totalCgstAmount}`} />
            <Text fontWeight={'700'} children={`${totalAmountWithTax}`} />
            {/* <Text children={'454.00'} /> */}
          </VStack>
        </HStack>
      </HStack>

      <HStack m={'1vmax 0'} justifyContent={'space-between'} >
        <Text fontSize={'1.5vmax'} children={'Customer Signature'} />
        <Text fontSize={'1.5vmax'} children={'Company Signature'} />
      </HStack>

      <Button children={'print'} variant={'solid'} colorScheme={"whatsapp"} onClick={()=>InvoiceDataHandler()} />
    </Box>
  );
};

export default InvoiceTemplateOne;
