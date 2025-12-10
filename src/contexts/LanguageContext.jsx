import React, { createContext, useState, useEffect } from 'react'

export const LanguageContext = createContext({ lang: 'en', setLang: () => { } })

export const LanguageProvider = ({ children }) => {
    const [lang, setLangState] = useState(() => {
        try {
            return localStorage.getItem('lang') || document.documentElement.lang || 'en'
        } catch (e) {
            return 'en'
        }
    })

    useEffect(() => {
        try {
            localStorage.setItem('lang', lang)
            document.documentElement.lang = lang === 'ar' ? 'ar' : 'en'
            document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
        } catch (e) {
            // ignore
        }
    }, [lang])

    const setLang = (l) => setLangState(l)

    return (
        <LanguageContext.Provider value={{ lang, setLang }}>{children}</LanguageContext.Provider>
    )
}

export default LanguageProvider
