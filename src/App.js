import React, { Fragment } from "react";

import { Routes, Route, Link } from "react-router-dom";

import Admin from "./Front_side/Admin/Components/Admin";
import Show from "./Front_side/Admin/Components/Show";
import Services from "./Front_side/Admin/Components/Services";
import Orders from "./Front_side/client/Components/Orders";
import CreateWebsite from "./Front_side/Admin/Components/CreateWebsite";
import Chat from "./Front_side/Admin/Components/Chat";
import Users from "./Front_side/Admin/Components/Users";
import SignIn from "./Front_side/client/Components/SignIn";
import SignUp from "./Front_side/client/Components/SignUp";

import PrivacyPolicy from "./Front_side/client/Components/PrivacyPolicy";
import Home from "./Home";
import Error from "./Error";
import GoogleCallBack from "./Front_side/client/Components/GoogleCallBack";
import Profile from "./Front_side/client/Components/Profile";
import Logout from "./Front_side/client/Components/Logout";
import Websites from "./Front_side/client/Components/Websites";
import Website from "./Front_side/client/Components/Website";
import Payment from "./Front_side/client/Components/Payment";
import Blogs from "./Front_side/client/Components/Blogs";
import EmailVerify from "./Front_side/client/Components/EmailVerify";
import VerifyEmail from "./Front_side/client/Components/VerifyEmail";
import PaymentSuccess from "./Front_side/client/Components/CreditCard/PaymentSuccess";
import Order from "./Front_side/client/Components/Order";


function App() {




  return (
    <Fragment>



      <Routes>

        <Route exact path='/admin' element={<Admin />} />
        <Route exact path='/admin/services' element={<Services />} />
        <Route exact path='/admin/orders' element={<Orders />} />
        <Route exact path='/admin/order/:id' element={<Orders />} />
        <Route exact path='/admin/users' element={<Users />} />
        <Route exact path='/admin/user/:id' element={<Users />} />
        <Route exact path='/admin/createWebsite' element={<CreateWebsite />} />

        <Route exact path="/privacy&policy" element={<PrivacyPolicy />} />


        <Route exact path='/' element={<Home />} />
        <Route exact path='/websites' element={<Websites/>} />
        <Route exact path='/website/:token' element={<Website/>} />

        <Route exact path='/blogs' element={<Blogs/>} />

        <Route exact path="/signin" element={<SignIn />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route path="/email/check-verify/:email/:token" element={<EmailVerify />} />
        <Route path="/email/verify/:email/:token" element={<VerifyEmail />} />
        <Route exact path="/logout" element={<Logout />} />
        <Route path="/auth/google" element={<GoogleCallBack />}></Route>

        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/orders" element={<Orders />} />
        <Route exact path="/order/:order_token/:user_token/:user_id" element={<Order />} />
        <Route exact path="/buy/website/:token" element={<Payment />} />
        <Route exact path="/payment/:result" element={<PaymentSuccess />} />




        <Route exact path='*' element={<Error />} />


      </Routes>
    </Fragment >
  );
}

export default App;

