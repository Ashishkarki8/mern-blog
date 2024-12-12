import React from 'react'
import { BrowserRouter,Routes, Route } from "react-router-dom";  /* alias use gareko while importing */
import Home from './pages/Home';
import About from './pages/about';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import Header from './components/Header';
import Projects from './pages/Projects';


const App = () => {
  return (
     <BrowserRouter>
       <Header></Header>
       <Routes>
          <Route  path="/" element={<Home />}></Route>        
          <Route path="/about" element={<About/>}></Route>
          <Route path="/projects" element={<Projects/>}></Route>           
          <Route path="/sign-in" element={<SignIn />}></Route>  {/* "sign-in" This is the best choice for route naming in REST APIs, as it follows web standards and is SEO-friendly. */}
          <Route path="/sign-up" element={<SignUp />}></Route>        
          <Route path="/dashboard" element={<Dashboard />}></Route>        
               
                
       </Routes>
     </BrowserRouter>
 
  )
}

export default App