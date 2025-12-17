import { BrowserRouter, Link, Route, Routes, useNavigate } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Header from './components/header/header'
import LanguageProvider from './contexts/LanguageContext'
import Contact from './pages/contact'
import Products from './pages/products'
import ProductDetail from './pages/productDetail'
import gsap from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { maincolor } from './constants/color'
import logo from './assets/inextlogo.jpg'



gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

function App() {


  return (
    <LanguageProvider>

      <BrowserRouter>

        <Header
          name="I next scope vision"
          pages={['Home', "About", "Products", "Contact"]}
          CompanyColor={maincolor}
          backgroundcolor={'#000000d4'}
          logo={logo}
          color={maincolor}
          mainstyle={{ backgroundImage: 'radial-gradient(circle at 150% ,#1a1f38, transparent)' }}
          middleelement={<Link to="/" style={{ color: maincolor, textDecoration: 'none', fontSize: '1.2rem', marginTop: '1rem', fontWeight: 700 }}>I next scope vision</Link>}
          dropdownstyle={{ backgroundImage: 'radial-gradient(circle at 150% ,#1a1f38, 50%)' }}
        />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Products/:id" element={<ProductDetail />} />

        </Routes>

      </BrowserRouter>

    </LanguageProvider>)

}

export default App
