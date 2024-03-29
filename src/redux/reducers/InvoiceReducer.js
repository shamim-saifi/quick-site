import { createReducer } from '@reduxjs/toolkit';

export const InvoiceReducer = createReducer(
  {},
  {
    InvoiceRequest: state => {
      state.loading = true;
    },
    InvoiceSuccess: (state, action) => {
      state.loading = false;
      // state.invoice = action.payload;
      state.message = action.payload.message;
    },
    InvoiceFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    GetAllInvoiceRequest: state => {
      state.loading = true;
    },
    GetAllInvoiceSuccess: (state, action) => {
      state.loading = false;
      state.invoice = action.payload;
      state.message = action.payload.message;
    },
    GetAllInvoiceFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    DeleteInvoiceRequest: state => {
      state.loading = true;
    },
    DeleteInvoiceSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    DeleteInvoiceFail: (state, action) => {
      state.loading = false;
      state.error = action.payload; 
    }, 
  }
);
