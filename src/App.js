import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { CircularProgress, Stack } from '@chakra-ui/react';
import { Toaster } from 'react-hot-toast';
import './App.css';

const Home = lazy(() => import('./components/Home/Home'));
const Header = lazy(() => import('./components/Header/Header'));
const Footer = lazy(() => import('./components/Footer/Footer'));
const About = lazy(() => import('./components/About/About'));
const ContactForm = lazy(() =>import('./components/ContactForm/ContactForm'));
const Support = lazy(() => import('./components/Support/Support'));

const Login = lazy(() => import('./components/User/Login'));
const SignUp = lazy(() => import('./components/User/SignUp'));
const Profile = lazy(() => import('./components/User/Profile'));
const ForgetPassword = lazy(() =>import('./components/ForgetPassword/ForgetPassword'));
const ResetPassword = lazy(() =>import('./components/ForgetPassword/ResetPassword'));

const InvoiceTemplateOne = lazy(() =>import('./components/InvoiceTemplates/InvoiceTemplateOne'));
// const InvoiceTemplateTwo = lazy(() => import('./components/InvoiceTemplates/InvoiceTemplateTwo'));
// const InvoiceTemplateThree = lazy(() => import('./components/InvoiceTemplates/InvoiceTemplateThree'));
const InvoiceGeneratePage = lazy(() =>import('./components/InvoiceGeneratePage/InvoiceGeneratePage'));

const PageNotFound = lazy(() =>import('./components/PageNoFound/PageNotFound'));



function App() {
  const { user, loading, isAuthenticated } = useSelector(
    state => state.userContainer
  );

  return (
    <BrowserRouter>
      {loading ? (
        <Stack w={'100%'} h={'100vh'} justifyContent={'center'} alignItems={'center'} >
            <CircularProgress thickness="4px" size={'20vmax'} isIndeterminate color="purple.300" />
        </Stack>
      ) : (
        <>
          <Suspense fallback={
            <Stack w={'100%'} h={'100vh'} justifyContent={'center'} alignItems={'center'} >
                <CircularProgress thickness="4px" size={'20vmax'} isIndeterminate color="purple.300" />
            </Stack>
          }
          >
            <Header /> 
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/forgetpassword" element={<ForgetPassword />} />
              <Route path="/resetpassword/:token" element={<ResetPassword />} />

              <Route path="/profile" element={isAuthenticated ? <Profile /> : <SignUp />} />

              <Route path="/invoiceone" element={<InvoiceTemplateOne />} />
              {/* <Route path="/invoicetwo" element={<InvoiceTemplateTwo />} /> */}
              {/* <Route path="/invoicethree" element={<InvoiceTemplateThree />} /> */}

              <Route path="/tryfree" element={isAuthenticated ? <InvoiceGeneratePage /> : <SignUp />} />
              <Route path="/contact" element={<ContactForm />} />
              <Route path="/about" element={<About />} />
              <Route path="/support" element={<Support />} />
              <Route path="/*" element={<PageNotFound />} />
            </Routes>
            <Footer />
          </Suspense>
        </>
      )}
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
