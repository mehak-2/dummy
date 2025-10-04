import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Container,
  Typography,
  Button,
  Box,
  Grid,
} from "@mui/material";
import Vision from "./components/Vision/index";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import HowWeDifferent from "./components/HowWeDifferent";
import Footer from "./components/Footer";
import Terms from "./components/Terms";
import Policy from "./components/Policy";
import Disclosure from "./components/Disclosure";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    h1: {
      fontSize: "2rem",
      "@media (min-width:600px)": {
        fontSize: "2.5rem",
      },
      "@media (min-width:900px)": {
        fontSize: "3rem",
      },
    },
    body1: {
      fontSize: "0.875rem",
      "@media (min-width:600px)": {
        fontSize: "1rem",
      },
    },
  },
  spacing: 8,
});

function Home() {
  return (
    <>
      <Hero />
      <Vision />
      <HowWeDifferent />
    </>
  );
}

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <main>
                  <Home />
                </main>
                <Footer />
              </>
            }
          />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Policy />} />
          <Route path="/disclosure" element={<Disclosure />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}
export default App;
