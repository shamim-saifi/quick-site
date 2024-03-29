import {
    Box,
    Button,
    HStack,
    Heading,
    Img,
    Input,
    Stack,
    Table,
    TableContainer,
    Tbody,
    Td,
    Text,
    Textarea,
    Th,
    Thead,
    Tr,
    VStack,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure, 
    Select,
  } from '@chakra-ui/react';
import React, { useState } from 'react'
import { MdDelete } from "react-icons/md";
import InvoiceTemplateOne from '../InvoiceTemplates/InvoiceTemplateOne';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CreateInvoice } from '../../redux/actions/InvoiceActions';

import { Country, State, City }  from 'country-state-city';

// console.log(State.getStatesOfCountry('IN'))
// console.log(Country.getCountryByCode('IN').name)
// let testCountry=Country.getCountryByCode('IN')
// console.log(City.getCitiesOfState('IN','UP'))





const InvoiceGeneratePage = () => {

 

    const {isOpen, onOpen, onClose}=useDisclosure();


    const [templateHide,SetTemplateHide]=useState(false)
    
    const [invoiceItem,SetInvoiceItem]=useState([]) 
    const [totalSgstAmount,SetTotalSgstAmount]=useState(0)
    const [totalCgstAmount,SetTotalCgstAmount]=useState(0)
    const [totalAmountWithTax,SetTotalAmountWithTax]=useState(0)
    const [totalAmount,SetTotalAmount]=useState(0)

    //Your company Details
    const [CompanyName,SetCompanyName]=useState('')
    const [YourName,SetYourName]=useState('')
    const [CompanyGSTTin,SetCompanyGSTTin]=useState('')
    const [CompanyCity,SetCompanyCity]=useState('')
    const [CompanyState,SetCompanyState]=useState('')
    const [CompanyCountry,SetCompanyCountry]=useState('')
    let testCompanyStatecode=CompanyState.split(',')[1]


    //Client company Details ClientClient
    const [ClientCompanyName,SetClientCompanyName]=useState('')
    const [ClientName,SetClientName]=useState('')
    const [ClientGSTTin,SetClientGSTTin]=useState('')
    const [ClientCity,SetClientCity]=useState('')
    const [ClientState,SetClientState]=useState('')
    const [ClientCountry,SetClientCountry]=useState('')
    let testClientStatecode=ClientState.split(',')[1]


    //logo and invoice Details
    const [invoiceLogo,SetInvoiceLogo]=useState('')
    const [invoiceName,SetInvoiceName]=useState('')
    const [invoiceNumber,SetInvoiceNumber]=useState('')
    const [invoiceDate,SetInvoiceDate]=useState('')
    const [invoiceDueDate,SetInvoiceDueDate]=useState('')
 

    // biils item template formate
    const BillingTemplate={itemDes:'',qty:'',rate:'',sgst:'',cgst:'',sgstTotalAmount:'',cgstTotalAmount:'',amountWithTax:'',amount:''}
    const [BillData,SetBillData]=useState([BillingTemplate])



    const addFiled=()=>{
        SetBillData([...BillData,BillingTemplate])
    }
    const delFiled=(i)=>{
        
        const delval=[...BillData];
        delval.splice(i,1);
        SetBillData(delval)

        // for decrease amount With Tax  
        let testsubtotal=0;
        delval.forEach((item)=>{
             testsubtotal=item.amountWithTax+testsubtotal;
            SetTotalAmountWithTax(testsubtotal)
        })

        // For decrease Total SGST of item
        let calculateSGST=0;
        delval.forEach((item)=>{
             calculateSGST=calculateSGST+Number(item.sgstTotalAmount);
            let newSGST= parseFloat(calculateSGST).toFixed(2)        
             SetTotalSgstAmount(newSGST)
             
        })

        // For decrease Total CGST of item
        let calculateCGST=0;
        delval.forEach((item)=>{
            calculateCGST=calculateCGST+Number(item.cgstTotalAmount); 
            let newCGST= parseFloat(calculateCGST).toFixed(2)                   
            SetTotalCgstAmount(newCGST)
        })

        // For decrease Total Amount of item 100+400=500 
        let testTotalAmount=0;
        delval.forEach((item)=>{
            testTotalAmount=testTotalAmount+item.amount;
            SetTotalAmount(testTotalAmount)
        })
       
    }



    const handleChange=(e,i)=>{
        // SetItem(i)
        const {name,value}=e.target;
        let onchangeVal=[...BillData];
        onchangeVal[i][name]=value;
        SetBillData(onchangeVal)
        


        // For calcualte item Amount 2*300=600 and gst in itemTotal amount
        let TotalAmountVal=[...BillData]
        TotalAmountVal.forEach(item=>{
            const totalItemPrice=item.qty*item.rate;
            const itemSGST=Number(item.sgst);
            const itemCGST=Number(item.cgst);
            const calculateItemAmountSGST=(itemSGST/100)*totalItemPrice;
            const calculateItemAmountCGST=(itemCGST/100)*totalItemPrice;

            TotalAmountVal[i]['sgstTotalAmount']=parseFloat(calculateItemAmountSGST).toFixed(2)
            TotalAmountVal[i]['cgstTotalAmount']= parseFloat(calculateItemAmountCGST).toFixed(2)
            // SetItemSgstAmount(calculateItemAmountSGST); //sgst % amount
            // SetItemCgstAmount(calculateItemAmountCGST); //cgst % amount

            let totalTaxWithAmount=calculateItemAmountSGST+calculateItemAmountCGST+totalItemPrice;
            // let floatTaxWithAmount=parseFloat(totalTaxWithAmount).toFixed(2)
            TotalAmountVal[i]['amountWithTax']=totalTaxWithAmount;
            TotalAmountVal[i]['amount']=totalItemPrice;
            // SetItemAmount(calculateItemAmount);
            // SetData(onchangeVal)
        })


        // For calculate Total SGST of item
        let calculateSGST=0;
        BillData.forEach((item)=>{
             calculateSGST=calculateSGST+Number(item.sgstTotalAmount);   
            let newSGST= parseFloat(calculateSGST).toFixed(2)        
             SetTotalSgstAmount(Number(newSGST))
        })


        // For calculate Total CGST of item
        let calculateCGST=0;
        BillData.forEach((item)=>{
            calculateCGST=calculateCGST+Number(item.cgstTotalAmount);  
            let newCGST= parseFloat(calculateCGST).toFixed(2)                   
            SetTotalCgstAmount(Number(newCGST))
        })


        // For calcualte Total Amount with tax of item 100+400+%=500 totalAmount
        let testTotalAmountWithTax=0;
        BillData.forEach((item)=>{
            testTotalAmountWithTax=testTotalAmountWithTax+item.amountWithTax;
             SetTotalAmountWithTax(testTotalAmountWithTax)
        })

        // For calcualte Total Amount of item 100+400=500 
        let testTotalAmount=0;
        BillData.forEach((item)=>{
            testTotalAmount=testTotalAmount+item.amount;
            SetTotalAmount(testTotalAmount);
        })

        //product item array
        let itemArray=[];
        BillData.forEach((item)=>{
           let singalItem=item.itemDes;
           itemArray.push(singalItem)           
        })
        SetInvoiceItem(itemArray)

    }
    const logoHandler=(e)=>{
    const file=e.target.files[0]
    const Reader=new FileReader()

    Reader.readAsDataURL(file)

    Reader.onload=()=>{
        SetInvoiceLogo(Reader.result)
    }
    }

    const OpenInvoiceTemplate=()=>{
    SetTemplateHide(true)
    onOpen()
    }



  return (
<>
    {
        templateHide?null:(

        <>
            <Box w={'100%'} border={'1px solid gray'} m={'1vmax 0'} p={{base:'2',md:'10'}} fontFamily={'Roboto'}  >
                <Heading  letterSpacing={'5px'} textAlign={'center'} children={'Try Our Creative Template For Free'} />
                <Box w={'100%'} m={'2vmax 0'}  >

                    {/* logo block */}
                    <HStack w={'100%'} justify={'space-between'} >
                        <Input onChange={(e)=>{logoHandler(e)}} accept={'image/*'}w={'40%'} type={'file'} cursor={'pointer'} />
                        {/* <Input onChange={(e)=>{SetInvoiceName(e.target.value)}} value={invoiceName} w={'40%'} type={'text'} p={'2vmax'} fontWeight={'600'} fontSize={'2.5vmax'} placeholder='TAX INVOICE'/> */}
                    </HStack>

                    {/* your company block */}
                    <VStack m={'3.5vmax 0'} w={['100%','50%']} >
                        <Input onChange={(e)=>{SetYourName(e.target.value)}} value={YourName} type={'text'}  fontWeight={'500'}  placeholder='Company Name' />
                        <Input onChange={(e)=>{SetCompanyName(e.target.value)}} value={CompanyName} type={'text'} placeholder='Your Name' />
                        <Input onChange={(e)=>{SetCompanyGSTTin(e.target.value)}} value={CompanyGSTTin} type={'text'} placeholder='Company GST Tin' />

                        <Select onChange={(e)=>{SetCompanyCountry(e.target.value)}} value={CompanyCountry} type={'text'} placeholder='Select Country'>              
                            <option value={Country.getCountryByCode('IN').name}>{Country.getCountryByCode('IN').name}</option>                     
                        </Select>

                        <Select onChange={(e)=>{SetCompanyState(e.target.value)}} value={CompanyState} type={'text'} placeholder='Select State'>
                            {
                                State.getStatesOfCountry('IN').map((item)=>(                         
                                    <option value={`${item.name},${item.isoCode}`}>{`${item.name}, ${item.isoCode}`} </option>                                                  
                                ))
                            } 
                        </Select>

                        <Select onChange={(e)=>{SetCompanyCity(e.target.value)}} value={CompanyCity} type={'text'} placeholder='Select City'>
                            {
                                City.getCitiesOfState('IN',testCompanyStatecode).map((item)=>(                           
                                    <option value={item.name}>{item.name}</option>                     
                                ))
                            } 
                        </Select>
                    </VStack>

                    {/* Client Company Block */}
                    <Stack w={'100%'} direction={{base:'column',md:'row'}} justifyContent={'space-between'} >
                        <VStack w={['100%','50%']} >
                            <Text fontSize={['3vmax','2vmax']} fontWeight={'500'}  children={'Bill To'} />
                            <Input onChange={(e)=>{SetClientCompanyName(e.target.value)}} value={ClientCompanyName} type={'text'} fontWeight={'500'}  placeholder='Client Company Name' />
                            <Input onChange={(e)=>{SetClientName(e.target.value)}} value={ClientName} type={'text'} placeholder='Client Name' />
                            <Input onChange={(e)=>{SetClientGSTTin(e.target.value)}} value={ClientGSTTin} type={'text'} placeholder='Client GST Tin' />

                             <Select onChange={(e)=>{SetClientCountry(e.target.value)}} value={ClientCountry} type={'text'} placeholder='Select Country'>              
                                 <option value={Country.getCountryByCode('IN').name}>{Country.getCountryByCode('IN').name}</option>                     
                             </Select>

                            <Select onChange={(e)=>{SetClientState(e.target.value)}} value={ClientState} type={'text'} placeholder='Select State'>
                                {
                                    State.getStatesOfCountry('IN').map((item)=>(                         
                                        <option value={`${item.name},${item.isoCode}`}>{`${item.name}, ${item.isoCode}`} </option>                                                  
                                    ))
                                } 
                            </Select>

                            <Select onChange={(e)=>{SetClientCity(e.target.value)}} value={ClientCity} type={'text'} placeholder='Select City'>
                                {
                                    City.getCitiesOfState('IN',testClientStatecode).map((item)=>(                           
                                        <option value={item.name}>{item.name}</option>                     
                                    ))
                                } 
                            </Select>
                        </VStack>

                        {/* date inv-No block */}
                        <VStack fontSize={['xs','sm','md','lg']} w={{base:'100%',md:'40%'}} border={'1px solid gray'} justifyContent={'center'} >
                            <HStack  w={'80%'} justifyContent={'space-between'}>
                                <Text w={'50%'} children={'Invoice No'} />
                                <Input onChange={(e)=>{SetInvoiceNumber(e.target.value)}} value={invoiceNumber}  w={'50%'} type={'text'} placeholder='Inv-No#' />
                            </HStack>

                            <HStack  w={'80%'} justifyContent={'space-between'}>
                                <Text w={'50%'} children={'Invoice Date'} />
                                <Input onChange={(e)=>{SetInvoiceDate(e.target.value)}} value={invoiceDate}  w={'50%'} type={'date'}  />
                            </HStack>

                            <HStack  w={'80%'} justifyContent={'space-between'}>
                                <Text w={'50%'} children={'Due Date'} /> 
                                <Input onChange={(e)=>{SetInvoiceDueDate(e.target.value)}} value={invoiceDueDate} w={'50%'} type={'date'} />
                            </HStack>
                        </VStack>
                    </Stack>

                    {/* table of bill */}
                    <TableContainer w={'100%'} fontFamily={'Roboto'} fontSize={['xs','sm','md','lg']} m={'5.5vmax 0'}>
                        <Table overflowX={'scroll'} >
                            <Thead bgColor={'gray'}>
                                <Tr >
                                    <Th color={'white'}>Item & Description</Th>
                                    <Th color={'white'} >Qty</Th>
                                    <Th color={'white'} >Rate</Th>
                                    <Th color={'white'} >SGST</Th>
                                    <Th color={'white'} >CGST</Th>
                                    <Th color={'white'} >Amount</Th>
                                    <Th color={'white'} >Amount With Tax</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {
                                    BillData.map((item,i)=>(
                                        <>
                                        <Tr key={i} >
                                            <Td><textarea  onChange={(e)=>handleChange(e,i)} name={'itemDes'} value={item.itemDes} style={{padding:'1vmax',border:'1px solid gray' }} placeholder='Item & Description' /></Td>
                                            <Td><input  onChange={(e)=>handleChange(e,i)} name={'qty'} value={item.qty} style={{padding:'1vmax',border:'1px solid gray' }}  type='number' placeholder='Item QTY' /></Td>
                                            <Td><input  onChange={(e)=>handleChange(e,i)} name={'rate'} value={item.rate} style={{padding:'1vmax',border:'1px solid gray'  }}  type='number' placeholder='Rate' /></Td>
                                            <Td>
                                                <input  onChange={(e)=>handleChange(e,i)} name={'sgst'} value={item.sgst} style={{padding:'1vmax',border:'1px solid gray'  }}  type='number' placeholder='SGST' />
                                                <Text textAlign={'center'} size={'lg'} children={`RS - ${item.sgstTotalAmount}`} />
                                            </Td>
                                            <Td>
                                                <input  onChange={(e)=>handleChange(e,i)} name={'cgst'} value={item.cgst} style={{padding:'1vmax',border:'1px solid gray'  }}  type='number' placeholder='CGST' />
                                                <Text textAlign={'center'} size={'lg'} children={`RS - ${item.cgstTotalAmount}`} />
                                            </Td>
                                            <Td><input  onChange={(e)=>handleChange(e,i)} name={'amount'} value={item.amount} style={{padding:'1vmax',border:'1px solid gray'  }}  type='number' placeholder='Amount' /></Td>
                                            <Td  >
                                                <input onChange={(e)=>handleChange(e,i)} name={'amountWithTax'} value={item.amountWithTax} style={{padding:'1vmax',border:'1px solid gray'  }}  type='number' placeholder='Amount with tas' />
                                                <Button ml={'1vmax'} onClick={()=>delFiled(i)} colorScheme={'purple'} children={<MdDelete />} />
                                            </Td>                         
                                        </Tr>
                                        </>
                                    ))
                                }
                                <Button ml={'1vmax'} onClick={()=>addFiled()} colorScheme={'purple'} children={'add Item'} />

                                <Tr>
                                    <Td></Td>
                                    <Td></Td>
                                    <Td>Total</Td>
                                    <Td>{totalSgstAmount}</Td>
                                    <Td>{totalCgstAmount}</Td>
                                    <Td>{totalAmount}</Td>
                                    <Td>{totalAmountWithTax}</Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </TableContainer>


                    <HStack w={'100%'} spacing={'6'} border={'1px solid gray'} fontFamily={'Roboto'} fontSize={['sm','md','lg','xl']} justifyContent={'flex-end'}>
                        {/* <Text w={'70%'} fontSize={['xs','sm','md','lg']}  children={'Thanks For Your Business'} /> */}

                        <HStack spacing={'10'} justifyContent={'space-between'}>
                            <VStack>
                                <Text children={'Sub Total'} />
                                <Text children={`TAX`} />
                                <Text fontWeight={'700'} children={'TOTAL'} />
                            </VStack>
                            <VStack>
                                <Text children={`${totalAmount}`} /> 
                                <Text children={`${totalSgstAmount+totalCgstAmount}`} /> 
                                <Text fontWeight={'700'} children={`${totalAmountWithTax}`} />
                            </VStack>
                        </HStack>
                    </HStack>
                </Box>
            </Box>

            <HStack m={'2vmax 0'} justifyContent={'center'} >
                <Button textAlign={'center'} size={'lg'} onClick={()=>OpenInvoiceTemplate()} colorScheme={'red'} children={'Preview'} />       
            </HStack>
        </>
        )
    }

    <Modal size={'full'} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
            <ModalBody>
                <InvoiceTemplateOne 
                    BillData={BillData}
                    totalAmountWithTax={totalAmountWithTax}
                    totalAmount={totalAmount}
                    totalSgstAmount={totalSgstAmount}
                    totalCgstAmount={totalCgstAmount}
                    
                    invoiceItem={invoiceItem}
                    invoiceLogo={invoiceLogo}
                    invoiceName={invoiceName}
                    invoiceNumber={invoiceNumber}
                    invoiceDate={invoiceDate}
                    invoiceDueDate={invoiceDueDate}

                    CompanyName={CompanyName} 
                    YourName={YourName} 
                    CompanyGSTTin={CompanyGSTTin}
                    CompanyCity={CompanyCity}
                    CompanyState={CompanyState}
                    CompanyCountry={CompanyCountry}

                    ClientCompanyName={ClientCompanyName} 
                    ClientName={ClientName} 
                    ClientGSTTin={ClientGSTTin}
                    ClientCity={ClientCity}
                    ClientState={ClientState}
                    ClientCountry={ClientCountry}
                />
            </ModalBody>
        </ModalContent>
    </Modal>

</>
  )
}

export default InvoiceGeneratePage;

