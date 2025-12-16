import React, { useContext } from 'react'
import { backgroundColor, maincolor } from "../constants/color";
import { LanguageContext } from '../contexts/LanguageContext'

const Contact = () => {
    const { lang } = useContext(LanguageContext)
    const isAr = lang === 'ar'

    return (
        <div dir={isAr ? 'rtl' : 'ltr'} style={{ background: backgroundColor || '#f5f7fb', minHeight: '100vh', padding: '3rem 1rem', color: '#222', width: '99vw', paddingTop: 80 }}>
            <div style={{ maxWidth: 900, margin: '0 auto' }}>
                <main style={{ background: 'white', padding: 24, borderRadius: 8, boxShadow: '0 8px 30px rgba(0,0,0,0.06)' }}>
                    <h1 style={{ marginTop: 0, color: maincolor || '#0b6' }}>{isAr ? 'اتصل بنا' : 'Contact Us'}</h1>

                    <p>{isAr ? 'للاستفسارات حول الشراكات، التمويل، أو أي من برامجنا، يرجى التواصل عبر الوسائل التالية أو إرسال رسالة طلب شراكة.' : 'For partnership, financing or program inquiries, please reach us via the following channels or submit a partnership request.'}</p>

                    <section style={{ marginTop: 12 }}>
                        <h3>{isAr ? 'معلومات الاتصال' : 'Contact Details'}</h3>
                        <p style={{ margin: 0 }}>{isAr ? 'البريد الإلكتروني: ' : 'Email: '}<a href="mailto:hello@i next scope vision.example">hello@i next scope vision.example</a></p>
                        <p style={{ margin: 0 }}>{isAr ? 'العنوان البريدي: ' : 'Postal Address: '}P.O Box 703215, Entebbe</p>
                        <p style={{ margin: 0 }}>{isAr ? 'أرقام الهاتف: ' : 'Phone(s): '}+971 544 513 745 — +966 595 646 657</p>
                        <p style={{ margin: 0 }}>{isAr ? 'تاريخ الانتهاء: ' : 'Expiry Date: '}2026-10-20</p>
                    </section>

                    <section style={{ marginTop: 12 }}>
                        <h3>{isAr ? 'طلب شراكة' : 'Partnership Request'}</h3>
                        <p>{isAr ? 'أرسل موجزًا عن مشروعك أو اهتمامك وسنعود إليك مع خطة مختصرة.' : 'Send a brief about your project or interest and we will return with a short plan.'}</p>
                        <p style={{ marginTop: 12 }}>{isAr ? 'أو اضغط الزر لإرسال طلب شراكة.' : 'Or click the button to submit a partnership request.'}</p>
                        <button style={{ marginTop: 8, background: maincolor || '#0b6', color: '#fff', border: 'none', padding: '10px 14px', borderRadius: 6 }}>{isAr ? 'إرسال طلب شراكة' : 'Submit Partnership Request'}</button>
                    </section>
                </main>
            </div>
        </div>
    )
}

export default Contact
