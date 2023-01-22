import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { light } from "./styles/Theme";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navigation from "./components/Navigation";
import Form from "./components/sections/Form";
import Map from "./components/sections/Map";
import Home from "./components/sections/Home";
import "./App.css"

function App() {
  return (
    <Router>
      <GlobalStyles />
      <ThemeProvider theme={light}>
        <Navigation />
        <Content></Content>
      </ThemeProvider>
    </Router>
  );
}

function Content() {
  const location = useLocation();

  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState("scrollIn");

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) setTransitionStage("scrollOut");
    console.log(location)
    console.log(displayLocation)
  }, [location, displayLocation]);

  return (
    <div
      className={`${transitionStage}`}
      onAnimationEnd={() => {
        if (transitionStage === "scrollOut") {
          setTransitionStage("scrollIn");
          setDisplayLocation(location);
        }
      }}
    >
      <Routes location={displayLocation}>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />}></Route>
        <Route path="/app" element={<Map />} />
      </Routes>
    </div>
  );
}

export default App;
