import { configureStore } from '@reduxjs/toolkit';
import { UserReducer } from './reducers/UserReducers';
import { InvoiceReducer } from './reducers/InvoiceReducer';


 
const Store = configureStore({
  reducer: {
    userContainer:UserReducer,
    invoiceContainer:InvoiceReducer,
  },
});

export default Store; 
