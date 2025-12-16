import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./css/home.css";
import { LanguageContext } from "../contexts/LanguageContext";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay },
  }),
};

const productCopy = (id, isAr) => {
  switch (id) {
    case "1":
      return {
        title: isAr ? "منتج 1 - حلول تغذية متكاملة" : "Product 1 – Integrated Nutrition Solution",
        body: isAr
          ? "حزمة متكاملة لإدارة سلاسل التوريد الغذائية، التحليلات، وضبط الجودة في بيئات متعددة الفروع."
          : "An end‑to‑end solution for managing food supply chains, analytics, and quality control across multi‑site environments.",
      };
    case "2":
      return {
        title: isAr ? "منتج 2 - منصة الزيوت الصحية" : "Product 2 – Healthy Oils Platform",
        body: isAr
          ? "منصة تتابع استخدام الزيوت، الاستهلاك، والمخاطر الصحية مع لوحات متابعة لحظية."
          : "A platform for tracking oil usage, consumption, and health risks, with real‑time monitoring dashboards.",
      };
    case "3":
      return {
        title: isAr ? "منتج 3 - إدارة المطابخ السحابية" : "Product 3 – Cloud Kitchen Management",
        body: isAr
          ? "حل لوجستي رقمي لإدارة المطابخ السحابية، الطلبات، وربط المنصات المختلفة في نقطة تحكم واحدة."
          : "A digital logistics layer to orchestrate cloud kitchens, orders, and multiple platforms from a single control point.",
      };
    case "4":
      return {
        title: isAr ? "منتج 4 - مراقبة صحة المجتمع" : "Product 4 – Community Health Monitor",
        body: isAr
          ? "لوحات تحليلية تساعد العيادات والمراكز الصحية على تتبع المؤشرات الحيوية والأنماط الصحية محليًا."
          : "Analytics boards helping clinics and health centers track vital indicators and health patterns across communities.",
      };
    case "5":
    case "6":
      return {
        title: isAr ? "حزمة مكملات وعي غذائي" : "Supplements & Awareness Bundle",
        body: isAr
          ? "مجموعة أدوات توعوية وتحليلية لدعم برامج التغذية والمكملات مع تقارير دورية قابلة للتخصيص."
          : "A toolkit for nutrition and supplement programs, including awareness content and customizable periodic reports.",
      };
    default:
      return {
        title: isAr ? "تفاصيل المنتج" : "Product Details",
        body: isAr
          ? "تفاصيل موسعة عن أحد حلولنا. تواصل معنا للحصول على عرض أو تجربة حية."
          : "Extended details about one of our solutions. Contact us to schedule a tailored walkthrough or live demo.",
      };
  }
};

const ProductDetail = () => {
  const { id } = useParams();
  const { lang } = useContext(LanguageContext);
  const isAr = lang === "ar";

  const copy = productCopy(id, isAr);

  useGSAP(() => {
    // subtle scroll-driven motion for detail cards
    gsap.utils.toArray(".home-section-card").forEach((card) => {
      gsap.fromTo(
        card,
        { y: 16 },
        {
          y: -10,
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        }
      );
    });
  }, []);

  return (
    <main className="home products-page" dir={isAr ? "rtl" : "ltr"}>
      <section className="home-hero">
        <motion.div
          className="home-hero-text"
          initial={{ opacity: 0, x: isAr ? 40 : -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1 className="home-hero-title">{copy.title}</h1>
          <p className="home-hero-subtitle">
            {isAr
              ? "صفحة مخصصة لعرض تفاصيل أعمق حول المنتج، حالات الاستخدام، والقيمة المضافة."
              : "A dedicated page for deeper product information, use‑cases, and value delivery."}
          </p>
        </motion.div>
      </section>

      <motion.section
        className="home-content"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <h2 className="home-section-title">
          {isAr ? "عن هذا المنتج" : "About This Product"}
        </h2>
        <div className="home-grid">
          <motion.div className="home-section-card home-section-wide" variants={fadeUp} custom={0.08}>
            <p>{copy.body}</p>
          </motion.div>

          <motion.div className="home-section-card" variants={fadeUp} custom={0.14}>
            <h4>{isAr ? "حالات الاستخدام" : "Use Cases"}</h4>
            <ul>
              <li>
                {isAr
                  ? "مؤسسات تبحث عن رقمنة عملياتها ورفع جودة الخدمة."
                  : "Organizations modernizing operations and service quality."}
              </li>
              <li>
                {isAr
                  ? "شركاء يرغبون في ربط البيانات الميدانية بلوحات تحكم تنفيذية."
                  : "Partners connecting field data with executive dashboards."}
              </li>
              <li>
                {isAr
                  ? "برامج تجريبية قبل التوسع على مستوى الأقاليم أو الدول."
                  : "Pilot programs before scaling across regions or countries."}
              </li>
            </ul>
          </motion.div>

          <motion.div className="home-section-card" variants={fadeUp} custom={0.18}>
            <h4>{isAr ? "القيمة المضافة" : "Key Outcomes"}</h4>
            <ul>
              <li>
                {isAr
                  ? "رؤية أوضح للبيانات التشغيلية وصنع قرارات أسرع."
                  : "Clearer operational visibility and faster decision‑making."}
              </li>
              <li>
                {isAr
                  ? "تقليل الهدر، الأخطاء، والتكاليف المخفية."
                  : "Reduced waste, errors, and hidden costs."}
              </li>
              <li>
                {isAr
                  ? "تحسين تجربة المستفيد أو العميل النهائي."
                  : "Improved experience for beneficiaries and end‑customers."}
              </li>
            </ul>
          </motion.div>

          <motion.div className="home-section-card" variants={fadeUp} custom={0.22}>
            <h4>{isAr ? "ابدأ الرحلة" : "Get Started"}</h4>
            <p>
              {isAr
                ? "تواصل معنا لتخصيص هذا الحل بما يتناسب مع احتياجاتك، أو لطلب عرض توضيحي مباشر."
                : "Contact us to tailor this solution to your needs, or to request a live demo session."}
            </p>
            <Link to="/Contact">
              <button className="home-cta-btn" style={{ marginTop: "1rem" }}>
                {isAr ? "تواصل معنا" : "Talk to Our Team"}
              </button>
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
};

export default ProductDetail;

