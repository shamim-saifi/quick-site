import toast from 'react-hot-toast';
import { server } from '../../index';
import axios from 'axios';

export const signup = (name, phone, email, password) => async dispatch => {
  try {
    dispatch({ type: 'signupRequest' });

    const { data } = await axios.post(
      `${server}/user/signup`,
      { name, phone, email, password },
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
    );

    dispatch({
      type: 'signupSuccess',
      payload: data.user,
    });
    toast.success(data.message); 
  } catch (error) {
    dispatch({
      type: 'signupFail',
      payload: error.message,
    });
    toast.error(error.message);
  }
};

export const login = (email, password) => async dispatch => {
  try {
    dispatch({ type: 'loginRequest' });

    const { data } = await axios.post(
      `${server}/user/login`,
      { email, password },
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
    );

    dispatch({
      type: 'loginSuccess',
      payload: data,
    });
    toast.success(data.message);
  } catch (error) {
    dispatch({
      type: 'loginFail',
      payload: error.message,
    });
    toast.error(error.message);
  }
};

export const logout = () => async dispatch => {
  try {
    dispatch({ type: 'logoutRequest' });

    const { data } = await axios.get(
      `${server}/user/logout`,

      {
        withCredentials: true,
      }
    );

    dispatch({
      type: 'logoutSuccess',
      payload: data,
    });
    toast.success(data.message);
  } catch (error) {
    dispatch({
      type: 'logoutFail',
      payload: error.message,
    });
    toast.error(error.message);
  }
};

export const UserForgetPassword = email => async dispatch => {
  try {
    dispatch({ type: 'forgetPasswordRequest' });

    const { data } = await axios.post(
      `${server}/user/forgetpassword`,
      { email },
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
    );

    dispatch({
      type: 'forgetPasswordSuccess',
      payload: data,
    });
    toast.success(data.message);
  } catch (error) {
    dispatch({
      type: 'forgetPasswordFail',
      payload: error.message,
    });
    toast.error(error.message);
  }
};

export const UserResetPassword = (password, token) => async dispatch => {
  try {
    dispatch({ type: 'resetPasswordRequest' });

    const { data } = await axios.put(
      `${server}/user/resetpassword/${token}`,
      { password },
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
    );

    dispatch({
      type: 'resetPasswordSuccess',
      payload: data,
    });
    toast.success(data.message);
  } catch (error) {
    dispatch({
      type: 'resetPasswordFail',
      payload: error.message,
    });
    toast.error(error.message);
  }
};


export const Contact = (name, email, phone, message) => async dispatch => {
  try {
    dispatch({ type: 'contactRequest' });

    const { data } = await axios.post(
      `${server}/user/contact`,
      { name, email, phone, message },
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
    );

    dispatch({
      type: 'contactSuccess',
      payload: data,
    });
    toast.success(data.message);
  } catch (error) {
    dispatch({
      type: 'contactFail',
      payload: error.message,
    });
    toast.error(error.message);
  }
};
