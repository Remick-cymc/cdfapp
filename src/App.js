import React from 'react'
// import navbar from Components 
import Navbar from "./components/Navbar"
// import Footer from components 

import Footer from './components/Footer';
import Payment from './components/Payment';
import Checkbalance from './components/Checkbalance'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from './components/NotFound';
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'


// Layout with Navbar and Footer
const MainLayout = ({ children }) => (
  <div>
  <Navbar />
  <div>{children}</div>
  <Footer />
  </div>
  );
  
  // Layout without Navbar and Footer
  const AuthLayout = ({ children }) => <div>{children}</div>;
  
  const App = () => {
  
  return (
  <BrowserRouter>
  <Routes>
  {/* Routes with Navbar and Footer */}
  <Route
  path="/"
  element={
  <MainLayout>
  <Home />
  </MainLayout>
  }
  />
  <Route
  path="/payment"
  element={
  <MainLayout>
  <Payment />
  </MainLayout>
  }


  />
  <Route
  path="/checkbalance"
  element={
  <MainLayout>
  <Checkbalance />
  </MainLayout>
  }


  />
  <Route
  path="*"
  element={
  <MainLayout>
  <NotFound />
  </MainLayout>
  }
  />
  
  {/* Routes without Navbar and Footer */}
  <Route
  path="/register"
  element={
  <AuthLayout>
  <Register />
  </AuthLayout>
  }
  />
  <Route
  path="/login"
  element={
  <AuthLayout>
  <Login />
  </AuthLayout>
  }
  />
  </Routes>
  </BrowserRouter>
  );
  };

export default App
