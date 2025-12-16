import { BrowserRouter, Link, Route, Routes, useNavigate } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Header from './components/header/header'
import LanguageProvider from './contexts/LanguageContext'
import Contact from './pages/contact'
import Products from './pages/products'
import gsap from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { maincolor } from './constants/color'



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
          color={maincolor}
          mainstyle={{ backgroundImage: 'radial-gradient(circle at 150% , white, transparent)' }}
          middleelement={<Link to="/" style={{ color: maincolor, textDecoration: 'none', fontSize: '1.8rem', marginTop: '0.5rem', fontWeight: 700 }}>I next scope vision</Link>}
          dropdownstyle={{ backgroundImage: 'radial-gradient(circle at 150% , white, transparent)' }}
        />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
          <Route path="/Products" element={<Products />} />

        </Routes>

      </BrowserRouter>

    </LanguageProvider>)

}

export default App
