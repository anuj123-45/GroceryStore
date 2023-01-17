import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Ren from "./render";

import CartList from "./cartlist";
import Cat from "./cat_sec";
import Payment from "./payment";
import FormValidation from "./checkout";

import Signup from "./signup";
import Login from "./Login";
import { useState } from "react";

export default function App() {
  const [user, setLoginUser] = useState({});
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login setLoginUser={setLoginUser} />} />
        <Route exact path="/gotohome" element={<Ren />} />
        <Route exact path="/register" element={<Signup />} />

        <Route
          exact
          path="/home"
          element={user && user._id ? <Cat /> : <Login setLoginUser={setLoginUser}/>}
        />
        <Route path="/mainpage/home" element={<Cat />} />
        <Route path="/cartlist" element={<CartList />} />
        <Route path="/goto/payment/paymentgateway" element={<Payment />} />
        <Route path="/checkout" element={<FormValidation />} />
      </Routes>
    </BrowserRouter>
  );
}
