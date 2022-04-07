import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";

import { TransitionGroup, CSSTransition } from "react-transition-group";

import About from "./components/About";
import Contact from "./components/Contact";
import { FcMauritaniaProvider } from "./context/FcMauritaniaContext";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Footer from "./components/Footer";
import Spinner from "./components/Spinner";

function App() {
  const [isLoading, setIsLoading] = useState(true);
   const [inProp, setInProp] = useState(false);
  useEffect(() => {
    setIsLoading(false);
    setInProp(true)
  }, []);
  return (
    <>
      <FcMauritaniaProvider>
        <Router>
          <Header />
          <TransitionGroup>
            <CSSTransition
              in={inProp} 
              classNames="page"
              timeout={1000}
            >
              <Routes>
                <Route
                  path="/home"
                  element={isLoading ? <Spinner /> : <Home />}
                />

                <Route
                  path="/about"
                  element={isLoading ? <Spinner /> : <About />}
                />
                <Route
                  path="/contact"
                  element={isLoading ? <Spinner /> : <Contact />}
                />
                <Route
                  path=""
                  element={isLoading ? <Spinner /> : <Navigate to="/home" />}
                />
              </Routes>
            </CSSTransition>
          </TransitionGroup>
          <Footer />
        </Router>
      </FcMauritaniaProvider>
    </>
  );
}

export default App;
