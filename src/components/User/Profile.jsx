import {
  Box,
  Button,
  Heading,
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
import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { DeleteInvoice, GetAllInvoice } from '../../redux/actions/InvoiceActions';
import { MdDelete } from 'react-icons/md';

const Profile = () => {

  const dispatch=useDispatch();
  const navigate=useNavigate();

  const { bills } = useSelector(
    state => state.invoiceContainer.invoice
  );
  const { user} = useSelector(
    state => state.userContainer
  );
  
const deleteBills=async(_id)=>{
console.log(_id)

 await dispatch(DeleteInvoice(_id))
  dispatch(GetAllInvoice())

}

useEffect(()=>{
  dispatch(GetAllInvoice())
},[dispatch])

  return (
    <Box w={'100%'} p={'10'} fontFamily={'Roboto'}>
        <VStack spacing={'8'} >
          <Heading letterSpacing={'5px'} textTransform={'uppercase'} fontSize={['4vmax','5vmax']}  as={'h2'} textAlign={'center'} children={`Welcome ${user.name} in Easy Invoice`} />
          <Text fontSize={['md','lg','xl','2xl']} textAlign={'center'} children={'Your Data are our First Priority'} />
          <Button letterSpacing={'5px'} size={['md','lg']} variant={'solid'} colorScheme={'purple'}  onClick={()=>navigate('/tryfree')} children={'Invoice Now'} />
        </VStack>
    
      <TableContainer w={'100%'}  fontFamily={'Roboto'} fontSize={['xs','sm','md','lg']}  m={'5.5vmax 0'}>
            <Table  variant="simple">
                <Thead bgColor={'purple.500'}>
                    <Tr >
                        <Th color={'white'}>SN#</Th>
                        <Th color={'white'} isNumeric>Invoice No</Th>
                        <Th color={'white'} isNumeric>Client Name</Th>
                        <Th color={'white'} isNumeric>Items</Th>
                        <Th color={'white'} isNumeric>Date</Th> 
                        <Th color={'white'} isNumeric>Amount</Th>
                    </Tr>
                </Thead>
                <Tbody>
                  {
                    bills.map((item,i)=>(
                      <Tr key={i} >
                        <Td>{i+1}</Td>
                        <Td isNumeric>{item.invoiceNumber}</Td>
                        <Td>{item.ClientCompanyName}</Td>
                        <Td>{item.invoiceItem.map((item)=>(
                          <p>{item}</p>
                        ))}</Td>
                        <Td isNumeric >{item.invoiceDate}</Td>
                        <Td isNumeric>
                          {item.totalAmountWithTax}
                          <Button ml={'1.5vmax'} size={'sm'} onClick={()=>deleteBills(item._id)} colorScheme={'purple'} children={<MdDelete />} />
                          </Td>
                      </Tr>
                    ))
                  }

                </Tbody>
            </Table>
        </TableContainer>
    </Box>
  );
};

export default Profile;
