import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Header1 from "./components/header/Header1";
import Header2 from "./components/header/Header2";
import Header3 from "./components/header/Header3";
import Hero from "./components/hero/Hero";
import Main from "./components/main/main";
import Footer from "./components/footer/footer";
import ScrollToTop from "./components/scroll/ScrollToTop";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from './components/cart/Cart'; // Importar o componente do carrinho
import Checkout from './components/checkout/Checkout'; // Importar o componente de checkout

function App() {
  const [theme, colorMode] = useMode();
  return (
    <Router>
      <ColorModeContext.Provider
        // @ts-ignore
        value={colorMode}
      >
        <ThemeProvider
          // @ts-ignore
          theme={theme}
        >
          <CssBaseline />

          <Header1 />
          <Header2 />
          <Header3 />
          <Box bgcolor={theme.
            // @ts-ignore
            palette.bg.main
          }
          >
            <Routes>
              <Route path="/" element={<>
                <Hero />
                <Main />
              </>} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </Box>

          <Footer />

          <ScrollToTop />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </Router>
  );
}

// O código original abaixo será removido ou comentado, pois a lógica principal foi movida para dentro do Router
export default App;
