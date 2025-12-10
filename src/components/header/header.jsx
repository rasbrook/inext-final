import React, { useState, useContext } from "react";
import { motion, transform } from 'framer-motion'
import { useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './header.css'
import { LanguageContext } from '../../contexts/LanguageContext'

const Header = (props) => {
    const nav = useNavigate()
    const [isOpen, setIsOpen] = useState(false)
    const { lang, setLang } = useContext(LanguageContext)

    const translations = {
        Home: 'الصفحة الرئيسية',
        About: 'معلومات عنا',
        Contact: 'اتصل',
        Donate: 'تبرع'
    }

    const style = {
        main: {


        }
    }


    {/*packages i should install
        framer-motion
         react-router-dom
         react-icons
         */}


    {/* what the props do to custumize them(rightCornerComponent linkstyleondrop linkstyleonbig dropdownstyle Topofdropdown Bottomofdropdown CompanyColor hovereffectonnav)
        backgroundcolor:background color of the whole header
    color: color of the text in the header  
    name: name of the company 
    CompanyColor: the unique color of the company 
    logo:image src of the logo of the company 
    pages: it is a list
    hovereffectonnav: the animation style of the header links when hovering over them 
    Topofdropdown: elements you want to add at the top of the dropdown
    Bottomofdropdown:elements you want to add at the top of the dropdown
    linkstyleondrop: the style of the links in the dropdown header 
    linkstyleonbig: the style of the links in the header in big screen
    middleelement:any element you want to add to the middle of the header like search
    rightCornerComponent:any component you want to add the the right corner of the big screen header
    dropdownstyle: to style the dropdown of the header
    */ }

    {/* example
        <Header
                rightCornerComponent={<div style={{ height: '100%', alignContent: 'center', marginRight: 20 }}><button style={{ backgroundColor: '#73FA5A' }}>Click Me</button></div>}
                linkstyleondrop={{ fontSize: 24 }}
                linkstyleonbig={{ fontSize: 20 }}
                dropdownstyle={{ justifyContent: 'center', justifyItems: 'center', backgroundColor: '#5AE0FA44' }}
                Topofdropdown={<button>hola</button>}
                Bottomofdropdown={<button style={{ textAlign: 'center' }}>hello</button>}
                CompanyColor={'#73FA5A'} 
                logo={l} 
                pages={['Home', "About", "Contact", 'Donate']}
                hovereffectonnav={{ color: 'blue', scale: 1.4, fontWeight: 600 }} />
        
        */}


    return (
        <motion.div id='main' style={{ ...props.mainstyle, backgroundColor: props.backgroundcolor || 'white', color: props.color || 'black', overflowY: 'auto', overflowX: 'hidden', width: '99vw', position: 'sticky', zIndex: 1000, top: 0, left: 0, right: 0, display: 'flex', flexDirection: 'column', gap: 0 }} >


            <motion.div className="big-screen-nav">
                <motion.div id="logo-name" whileHover={{ cursor: 'pointer' }} onTap={() => { nav('/') }}>
                    {/*logo and name*/}
                    <motion.img style={{ ...props.logostyle }} src={props.logo} />
                    <motion.h2 style={{ fontSize: 18, marginLeft: '2vw', textAlign: 'center', color: props.CompanyColor || 'black' }}>
                        {props.name || 'Name'}
                    </motion.h2>


                </motion.div>


                <motion.div style={{ display: 'flex', gap: 30, alignItems: 'center' }}>
                    {!props.bigmiddleelement ?
                        props.pages ? props.pages.map((p) => (
                            <motion.div key={p} onClick={() => nav(`${p}`)} style={{ ...props.linkstyleonbig, marginRight: 10, color: props.color || 'black' }} transition={{ type: 'tween' }} whileHover={{ ...props.hovereffectonnav, cursor: 'pointer' }} >
                                <p style={{ ...props.linkstyleonbig }}>
                                    {lang === 'ar' ? (translations[p] || p) : p}
                                </p>

                            </motion.div>

                        )) :
                            <></> : props.bigmiddleelement
                    }

                </motion.div>


                {props.rightCornerComponent}

                {/* Language selector */}
                <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginLeft: 12 }}>
                    <button aria-pressed={lang === 'en'} onClick={() => setLang('en')} style={{ padding: '6px 8px', borderRadius: 6, border: '1px solid #ccc', background: lang === 'en' ? (props.CompanyColor || '#73FA5A') : 'transparent', color: lang === 'en' ? '#fff' : (props.color || 'black') }}>EN</button>
                    <button aria-pressed={lang === 'ar'} onClick={() => setLang('ar')} style={{ padding: '6px 8px', borderRadius: 6, border: '1px solid #ccc', background: lang === 'ar' ? (props.CompanyColor || '#73FA5A') : 'transparent', color: lang === 'ar' ? '#fff' : (props.color || 'black') }}>ع</button>
                    <span aria-live="polite" style={{ marginLeft: 8, fontSize: 14, color: props.color || 'black' }}>{lang === 'ar' ? 'العربية' : 'English'}</span>
                </div>


            </motion.div>




            {/*Small Screen */}


            <motion.div className="small-screen-nav">
                <motion.div style={{ alignContent: 'center' }}>
                    <motion.img onTap={() => { nav('/') }} src={props.logo} style={{ height: '75%', marginLeft: 20 }} />

                </motion.div>

                {props.middleelement}

                <motion.div style={{ alignContent: 'center', marginRight: 30 }}>

                    {isOpen ? <FaTimes size={35} onTouchEnd={() => { setIsOpen(!isOpen) }} color={props.CompanyColor || 'black'} /> :
                        <FaBars size={35} onTouchEnd={() => { setIsOpen(!isOpen) }} color={props.CompanyColor || 'black'} />
                    }


                </motion.div>

                {isOpen ? <motion.div className="dropdown"
                    style={{ ...props.dropdownstyle, position: 'fixed', top: '-100vh', width: 'contain' }}
                    initial={{ opacity: 0, top: '-50vh' }}
                    animate={{ opacity: 1, top: '3.9em' }}
                    exit={{ opacity: 0, top: '-50vh' }}
                    transition={{ duration: 0.5 }}
                >
                    {props.Topofdropdown}

                    {/* language selector in dropdown for small screens */}
                    <div style={{ display: 'flex', gap: 8, padding: 8, marginLeft: 10 }}>
                        <button aria-pressed={lang === 'en'} onClick={() => setLang('en')} style={{ padding: '6px 8px', borderRadius: 6, border: '1px solid #ccc', background: lang === 'en' ? (props.CompanyColor || '#73FA5A') : 'transparent', color: lang === 'en' ? '#fff' : (props.color || 'black') }}>EN</button>
                        <button aria-pressed={lang === 'ar'} onClick={() => setLang('ar')} style={{ padding: '6px 8px', borderRadius: 6, border: '1px solid #ccc', background: lang === 'ar' ? (props.CompanyColor || '#73FA5A') : 'transparent', color: lang === 'ar' ? '#fff' : (props.color || 'black') }}>ع</button>
                    </div>

                    {props.pages ? props.pages.map((p) => (
                        <motion.div key={p} onClick={() => { nav(`${p}`); setIsOpen(false); }} style={{ ...props.linkstyle, margin: 10, color: props.color || 'black', marginLeft: 20 }} transition={{ type: 'tween' }} whileHover={{ ...props.hovereffectonnav, cursor: 'pointer' }}>
                            <p style={{
                                ...props.linkstyleondrop
                            }}>
                                {lang === 'ar' ? (translations[p] || p) : p}
                            </p>
                        </motion.div>
                    )) : <></>}

                    {props.Bottomofdropdown}


                </motion.div> : <></>}


            </motion.div>

        </motion.div>
    );
};

export default Header;


