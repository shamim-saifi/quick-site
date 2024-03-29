import toast from 'react-hot-toast';
import { server } from '../../index';
import axios from 'axios';

export const CreateInvoice = (invoiceNumber, totalAmountWithTax, invoiceDate, invoiceItem, ClientCompanyName) => async dispatch => { 
  try {
    dispatch({ type: 'InvoiceRequest' });

    const { data } = await axios.post(
      `${server}/invoice/createinvoice`,
      { invoiceNumber, totalAmountWithTax, invoiceDate, invoiceItem, ClientCompanyName},
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
    );

    dispatch({
      type: 'InvoiceSuccess',
      payload: data
    });
    toast.success(data.message)

  } catch (error) {
    dispatch({
      type: 'InvoiceFail',
      payload:error.message,
    });
    toast.error(error.message)

  }
};


export const GetAllInvoice = () => async dispatch => { 
    try {
      dispatch({ type: 'GetAllInvoiceRequest' });
  
      const { data } = await axios.get(
        `${server}/invoice/getallinvoicedata`,       
        {       
          withCredentials: true,
        }
      );
  
      dispatch({
        type: 'GetAllInvoiceSuccess',
        payload: data
      });
    toast.success(data.message)

    } catch (error) {
      dispatch({
        type: 'GetAllInvoiceFail',
        payload:error.message,
      });
    toast.error(error.message)

    }
  };


  export const DeleteInvoice = (_id) => async dispatch => { 
    try {
      dispatch({ type: 'DeleteInvoiceRequest' });
  
      const { data } = await axios.delete(
        `${server}/invoice/deleteinvoicedata/${_id}`,        
        {       
          withCredentials: true,
        }
      );
  
      dispatch({
        type: 'DeleteInvoiceSuccess',
        payload: data
      });
    toast.success(data.message)

    } catch (error) {
      dispatch({
        type: 'DeleteInvoiceFail',
        payload:error.message,
      });
    toast.error(error.message)

    }
  };