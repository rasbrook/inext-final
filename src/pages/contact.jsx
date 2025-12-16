import React, { useContext } from "react";
import { motion } from "framer-motion";
import { LanguageContext } from "../contexts/LanguageContext";
import "./css/home.css";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay },
  }),
};

const Contact = () => {
  const { lang } = useContext(LanguageContext);
  const isAr = lang === "ar";

  return (
    <main className="home contact-page" dir={isAr ? "rtl" : "ltr"}>
      {/* HERO TEXT ONLY */}
      <section className="home-hero">
        <motion.div
          className="home-hero-text"
          initial={{ opacity: 0, x: isAr ? 40 : -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1 className="home-hero-title">
            {isAr ? "اتصل بنا" : "Contact & Partnership"}
          </h1>
          <p className="home-hero-subtitle">
            {isAr
              ? "للاستفسارات حول الشراكات، التمويل أو برامجنا، يمكنك التواصل مباشرة عبر القنوات التالية أو إرسال موجز عن مشروعك."
              : "For partnership, financing, or program inquiries, reach us via the channels below or send a brief about your project."}
          </p>
        </motion.div>
      </section>

      {/* CONTACT DETAILS + PARTNERSHIP INFO */}
      <motion.section
        className="home-content"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={fadeUp}
      >
        <h2 className="home-section-title">
          {isAr ? "طرق التواصل" : "How to Reach Us"}
        </h2>
        <div className="home-grid">
          <motion.div className="home-section-card" variants={fadeUp} custom={0.1}>
            <h4>{isAr ? "معلومات الاتصال" : "Contact Details"}</h4>
            <p>
              {isAr ? "البريد الإلكتروني: " : "Email: "}
              <a href="mailto:hello@i next scope visionscopevision.example">
                hello@i next scope visionscopevision.example
              </a>
            </p>
            <p>
              {isAr ? "العنوان البريدي: " : "Postal Address: "}
              P.O Box 703215, Entebbe
            </p>
            <p>
              {isAr ? "أرقام الهاتف: " : "Phone(s): "}
              +971 544 513 745 — +966 595 646 657
            </p>
            <p>
              {isAr ? "تاريخ الانتهاء: " : "Expiry Date: "}
              2026-10-20
            </p>
          </motion.div>

          <motion.div className="home-section-card" variants={fadeUp} custom={0.18}>
            <h4>{isAr ? "طلب شراكة" : "Partnership Request"}</h4>
            <p>
              {isAr
                ? "أرسل موجزًا عن مشروعك أو اهتمامك (الأهداف، المرحلة الحالية، التحديات الرئيسية) وسنعود إليك بخطة مختصرة."
                : "Send a short brief about your project or interest (objectives, current stage, key challenges) and we will respond with a concise plan."}
            </p>
            <p style={{ marginTop: "0.8rem" }}>
              {isAr
                ? "يمكنك أيضًا ذكر الإطار الزمني المفضل لديك وحجم الشراكة المتوقع."
                : "You may also share your preferred timeline and expected partnership scope."}
            </p>
            <motion.button
              className="home-cta-btn"
              style={{ marginTop: "1rem" }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                window.location.href =
                  "mailto:hello@i next scope visionscopevision.example?subject=Partnership%20Request";
              }}
            >
              {isAr ? "إرسال طلب شراكة" : "Submit Partnership Request"}
            </motion.button>
          </motion.div>

          <motion.div className="home-section-card" variants={fadeUp} custom={0.24}>
            <h4>{isAr ? "تفضّل بذكر التفاصيل" : "What to Include"}</h4>
            <ul>
              <li>
                {isAr ? "نبذة عن الجهة أو المشروع" : "Short background on your organization or project"}
              </li>
              <li>
                {isAr ? "أهداف الشراكة أو التمويل" : "Goals for partnership or financing"}
              </li>
              <li>
                {isAr ? "النطاق الجغرافي والقطاع" : "Geographic scope and sector focus"}
              </li>
              <li>
                {isAr ? "الإطار الزمني والتوقعات" : "Timeline and expectations"}
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
};

export default Contact;
