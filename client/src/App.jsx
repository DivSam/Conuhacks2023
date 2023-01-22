import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { light } from './styles/Theme';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navigation from './components/Navigation';
import Form from './components/sections/Form';
import Map from './components/sections/Map';
import Home from './components/sections/Home';
import { motion } from "framer-motion";







function App() {

  return (
    <>
    <motion.div
      className="box"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    />
      <Router>
        <GlobalStyles />
        <ThemeProvider theme={light}>
          <Navigation/>
          <Routes>
            <Route path="/form" element={<Form/>}></Route>
            <Route path="/app" element={
              <Map />
              } 
            />
            <Route path="/" element={
              <Home />
              } 
            />
          </Routes>
        </ThemeProvider>
        </Router>
    </>
  );
}

export default App;
