import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  return (
    <>
   
      <Router>
        <Header />
        
          <Routes>
            <Route
              
              path='/home'
              element={
                <Home/>
              }
            />

            <Route  path='/about' element={<About/>} />
            <Route  path='/contact' element={<Contact/>} />
            <Route path="" element={<Navigate to="/home" />} />
             
          </Routes>
  
        
        
      </Router>
     
    
    </>
  );
}

export default App;
