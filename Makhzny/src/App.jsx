import { useState } from 'react'

import './App.css'
import NavBar from './Components/NavBar'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import Footer from './Components/Footer'
import HomePage from './Pages/HomePage'
import { Routes, Route } from 'react-router-dom';
import RentNow from './Pages/RentNow'


import Signature from './Pages/Signature'
import TransferRequest from './Pages/Transfer/TransferRequest'
import Form from './Pages/Transfer/Form'
import TransferOrder from './Pages/Transfer/TransferOrder'
import ApplicationForm from './Pages/Employment/ApplicationForm'
import RequestQuote from './Pages/RequestQuote/RequestQuote'
import HowItWorks from './Pages/HowItWorks'
import FAQ from './Pages/FAQ'
import BecomePartner from './Pages/BecomePartner'
import GetInTouch from './Pages/GetInTouch'
import TermsConditions from './Pages/TermsConditions'
import PrivacyPolicy from './Pages/PrivacyPolicy'

function App() {

  return (
    <>
    {/* <TransferOrder /> */}
    {/* <Form /> */}
    {/* <TransferRequest /> */}
     <NavBar />
     {/* <ApplicationForm /> */}

     {/* <Login /> */}
     {/* <SignUp /> */}
     <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/RentNow" element={<RentNow/>} />
      <Route path="/Signature" element={<Signature/>} />
      <Route path="/TransferRequest" element={<TransferRequest/>} />
      <Route path="/Form" element={<Form/>} />
      <Route path="/RequestQuote" element={<RequestQuote/>} />
      <Route path="/SignUp" element={<SignUp/>} />
      <Route path="/LogIn" element={<Login/>} />
      <Route path='/HowitWorks'element={<HowItWorks />}/>
      <Route path='/FAQ'element={<FAQ />}/>
      <Route path='/BecomePartner'element={<BecomePartner />}/>
      <Route path='/GetinTouch'element={<GetInTouch />}/>
      <Route path='/TermsConditions'element={<TermsConditions />}/>
      <Route path='/PrivacyPolicy'element={<PrivacyPolicy />}/>



      



      






     
    </Routes>
    {/* <TransferOrder /> */}

     <Footer />
    </>
  )
}

export default App
