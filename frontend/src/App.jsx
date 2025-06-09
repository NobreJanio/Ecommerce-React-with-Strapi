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
import AddProductPage from './pages/AddProductPage';
import EditProductPage from './pages/EditProductPage';
import ProductsPage from './pages/ProductsPage';
import CategoryPage from './pages/CategoryPage';
import OrdersPage from './pages/OrdersPage';
import TrackOrderPage from './pages/TrackOrderPage';
import ContactUsPage from './pages/ContactUsPage';
import FAQPage from './pages/FAQPage';
import UserLoginPage from './pages/UserLoginPage';
import UserRegisterPage from './pages/UserRegisterPage';
import VendorAccountPage from './pages/VendorAccountPage';
import VendorLoginPage from './pages/VendorLoginPage';
import VendorRegisterPage from './pages/VendorRegisterPage';

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
              <Route path="/track-order" element={<TrackOrderPage />} />
              <Route path="/contact-us" element={<ContactUsPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/user/login" element={<UserLoginPage />} />
              <Route path="/user/register" element={<UserRegisterPage />} />
              <Route path="/vendor-account" element={<VendorAccountPage />} />
              <Route path="/vendor-account/login" element={<VendorLoginPage />} />
              <Route path="/vendor-account/register" element={<VendorRegisterPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/products/add" element={<AddProductPage />} />
              <Route path="/products/edit/:productId" element={<EditProductPage />} />
              {/* Ajuste a rota de edição de produto em ProductsPage.jsx para /products/edit/:productId se necessário */}
              <Route path="/mega-menu/products/add" element={<AddProductPage />} />
              <Route path="/mega-menu/products/edit/:productId" element={<EditProductPage />} /> 
              <Route path="/category/:categoryName" element={<CategoryPage />} />
              <Route path="/orders" element={<OrdersPage />} />
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
