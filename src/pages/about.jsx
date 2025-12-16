import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { LanguageContext } from "../contexts/LanguageContext";
import "./css/home.css";

gsap.registerPlugin(useGSAP);

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay },
  }),
};

const About = () => {
  const { lang } = useContext(LanguageContext);
  const isAr = lang === "ar";
  const heroGlowRef = useRef(null);

  useGSAP(() => {
    if (!heroGlowRef.current) return;
    gsap.to(heroGlowRef.current, {
      scale: 1.04,
      rotate: 1.2,
      duration: 4,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });
  }, []);

  return (
    <main className="home about-page" dir={isAr ? "rtl" : "ltr"}>
      {/* HERO */}
      <section className="home-hero">
        <motion.div
          className="home-hero-text"
          initial={{ opacity: 0, x: isAr ? 40 : -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1 className="home-hero-title">
            {isAr ? "معلومات عنا - سكوب أسوشيتس" : "About I next scope vision Scope Vision"}
          </h1>
          <p className="home-hero-subtitle">
            {isAr
              ? "سكوب أسوشيتس شريك للمنظمات التي تسعى لتحديث الخدمات، وتحسين استخدام الموارد، وتبني ممارسات ذكية ومستدامة."
              : "Scope Associates partners with organizations to modernize services, optimize resources, and adopt intelligent, sustainable practices."}
          </p>
          <div className="home-hero-actions">
            <Link to="/">
              <motion.button
                className="home-secondary-btn"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {isAr ? "العودة إلى الرئيسية" : "Back to Home"}
              </motion.button>
            </Link>
            <Link to="/Contact">
              <motion.button
                className="home-cta-btn"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                {isAr ? "اطلب استشارة" : "Request a Consultation"}
              </motion.button>
            </Link>
          </div>
        </motion.div>

        
      </section>

      {/* WHO WE ARE */}
      <motion.section
        className="home-content"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={fadeUp}
      >
        <h2 className="home-section-title">
          {isAr ? "من نحن" : "Who We Are"}
        </h2>
        <div className="home-grid">
          <motion.div
            className="home-section-card home-section-wide"
            variants={fadeUp}
            custom={0.08}
          >
            <p>
              {isAr
                ? "نجمع بين الخبرة الاستشارية، البحث، ونظم البيانات مع أدوات مدعومة بالذكاء الاصطناعي لمساعدة العملاء على تقليل المخاطر، تحسين الأداء، والنمو بمسؤولية."
                : "We blend advisory expertise, research, and data systems with AI-powered tools to help clients reduce risk, improve performance, and scale responsibly."}
            </p>
          </motion.div>

          <motion.div className="home-section-card" variants={fadeUp} custom={0.12}>
            <h4>{isAr ? "الرؤية" : "Vision"}</h4>
            <p>
              {isAr
                ? "أن نكون شريكًا رائدًا إقليميًا ودوليًا نوفر إدارة موارد ذات قيمة مضافة وأنظمة مستدامة تعزز المرونة والنمو."
                : "Be a pioneering partner delivering value-added resource management and sustainable systems that foster resilience and growth."}
            </p>
          </motion.div>

          <motion.div className="home-section-card" variants={fadeUp} custom={0.16}>
            <h4>{isAr ? "المهمة" : "Mission"}</h4>
            <p>
              {isAr
                ? "تقديم استشارات شاملة تنافسية مدعومة بمركز بيانات مركزي وموارد بيئية لتمكين تحول العملاء وتحقيق نتائج مستدامة."
                : "Deliver competitive, one-stop consultation backed by a central data hub and eco-resources to enable sustainable client transformation."}
            </p>
          </motion.div>

          <motion.div className="home-section-card" variants={fadeUp} custom={0.2}>
            <h4>{isAr ? "الخدمات" : "Services"}</h4>
            <ul>
              <li>
                {isAr
                  ? "الاستشارات الاستراتيجية وتقييم المنظمات"
                  : "Strategic advisory & organizational assessment"}
              </li>
              <li>
                {isAr ? "قاعدة بيانات، أبحاث ومركز المعرفة" : "Data bank, research & knowledge hub"}
              </li>
              <li>
                {isAr ? "تخصيص الموارد وتحسين التكاليف" : "Resource allocation and cost optimization"}
              </li>
              <li>
                {isAr
                  ? "تكامل أنظمة مدعوم بالذكاء الاصطناعي وهندسة الأداء"
                  : "AI-enabled systems integration and performance engineering"}
              </li>
              <li>
                {isAr
                  ? "التدريب وبرامج بناء القدرات والتميز التشغيلي"
                  : "Training, capacity development & operational excellence programs"}
              </li>
            </ul>
          </motion.div>

          <motion.div className="home-section-card" variants={fadeUp} custom={0.24}>
            <h4>{isAr ? "كيف نعمل" : "How We Work"}</h4>
            <p>
              {isAr
                ? "نبدأ بتقييم معمق لنقاط القوة والضعف والمخاطر. نصمم برامج مخصصة تجمع بين الخبرة والرؤى المبنية على البيانات ودعم التنفيذ العملي — من التجربة الأولى إلى الحوكمة."
                : "We start with an in-depth assessment of strengths, weaknesses, and risks. We design tailored programs that merge expertise, data-driven insight, and hands-on execution—from pilot through governance."}
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* PROGRAMS & VALUE */}
      <motion.section
        className="home-content"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={fadeUp}
      >
        <h2 className="home-section-title">
          {isAr ? "البرامج والقيمة" : "Programs & Value"}
        </h2>
        <div className="home-grid">
          <motion.div className="home-section-card" variants={fadeUp} custom={0.1}>
            <h4>{isAr ? "توسعة المشروع وصيغ المشاركة" : "Project Enlargement & Participation"}</h4>
            <p>
              {isAr
                ? "حلول تمويل جزئية أو كاملة مع صيغ مشاركة مرنة تحمي مصالح الشركاء."
                : "Partial or full enlargement funding with flexible participation formulas that protect partner interests."}
            </p>
          </motion.div>

          <motion.div className="home-section-card" variants={fadeUp} custom={0.14}>
            <h4>{isAr ? "مشروعات متعثرة" : "Struggling Projects"}</h4>
            <p>
              {isAr
                ? "عمليات تنقيب وإعادة هيكلة للمشروعات المتعثرة لاستعادة الجدوى والتشغيل بكفاءة."
                : "Dig-out and restructuring to restore viability and operational efficiency for struggling projects."}
            </p>
          </motion.div>

          <motion.div className="home-section-card" variants={fadeUp} custom={0.18}>
            <h4>{isAr ? "الصناعات الصغيرة وتمويل المحفظة" : "Small Scale Industries & Wallet Finance"}</h4>
            <p>
              {isAr
                ? "تمويل ملائم وروابط سوقية لدعم الصناعات الصغيرة وزيادة الدخل."
                : "Wallet-friendly financing and market linkages to support small industries and boost local income."}
            </p>
          </motion.div>

          <motion.div className="home-section-card" variants={fadeUp} custom={0.22}>
            <h4>{isAr ? "خطة العمل - المرحلة الأولى" : "Action Plan — Phase 1"}</h4>
            <p>
              {isAr
                ? "خارطة طريق واضحة مع معالم، تقييم أولويات، واختيار مشاريع ذات أثر."
                : "Clear roadmap with milestones, priority assessments, and selection of high-impact projects."}
            </p>
          </motion.div>

          <motion.div className="home-section-card" variants={fadeUp} custom={0.26}>
            <h4>{isAr ? "تحليل الفجوات والآفاق الزمنية" : "Market Gaps & Timing"}</h4>
            <p>
              {isAr
                ? "قراءة الإمكانيات الحالية وتحديد فجوات السوق مع جداول زمنية قصيرة/متوسطة/طويلة (Oct → Feb → 2025 → 2026 → 2027)."
                : "Assess current facilities, identify market gaps, and prepare short/mid/long timelines (Oct → Feb → 2025 → 2026 → 2027)."}{" "}
            </p>
          </motion.div>

          <motion.div className="home-section-card" variants={fadeUp} custom={0.3}>
            <h4>{isAr ? "القيمة المضافة" : "Added Value"}</h4>
            <p>
              {isAr
                ? "رفع القيمة عبر استغلال الأصول، تحسين العمليات، تقليل التكاليف، وزيادة مصداقية الشراكات."
                : "Increase value via better asset use, operational improvements, cost reduction, and stronger partnership credibility."}
            </p>
          </motion.div>

          <motion.div className="home-section-card" variants={fadeUp} custom={0.34}>
            <h4>{isAr ? "مجالات الاهتمام والفوائد" : "Areas of Concern & Benefits"}</h4>
            <ul>
              <li>{isAr ? "الاستفادة من المرافق غير المستغلة" : "Utilize unused facilities"}</li>
              <li>{isAr ? "خفض تكاليف التشغيل وزيادة الربحية" : "Lower ops costs and higher profits"}</li>
              <li>{isAr ? "توسيع الشراكات والمصداقية" : "Enlarge partnerships and credibility"}</li>
              <li>{isAr ? "إعادة هيكلة داعمة للنمو" : "Restructuring that supports growth"}</li>
            </ul>
          </motion.div>

          <motion.div className="home-section-card" variants={fadeUp} custom={0.38}>
            <h4>{isAr ? "القطاعات المقترحة للتركيز" : "Suggested Focus Sectors"}</h4>
            <p>
              {isAr
                ? "الصحة (نادي صحي للسيدات، تغذية، عيادات)، التعليم والتدريب (دورات، دعم مشاريع التخرج، البحث)، والتجارة الإلكترونية للمواد التعليمية."
                : "Health (female health club, nutrition, clinics), Education & Training (courses, graduation project support, research), and e-commerce for educational materials."}
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* HOLDING & PARTNERSHIPS */}
      <motion.section
        className="home-content"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={fadeUp}
      >
        <h2 className="home-section-title">
          {isAr ? "سكوب هولدينج والشراكات" : "Scope Holding & Partnerships"}
        </h2>
        <div className="home-grid">
          <motion.div className="home-section-card home-section-wide" variants={fadeUp} custom={0.1}>
            <h4>{isAr ? "مركز استشاري متكامل" : "One-Stop Consultancy Holding"}</h4>
            <p>
              {isAr
                ? "تقنيات تقلل الأخطاء وتسهّل التشغيل بدون إجهاد أو عناء، مع معدل رضا 98%."
                : "Technology that reduces errors and enables frictionless operations — backed by 98% customer satisfaction."}
            </p>
          </motion.div>

          <motion.div className="home-section-card" variants={fadeUp} custom={0.14}>
            <h4>{isAr ? "جسر KSA/UK" : "SCOPE KSA — UK Bridge"}</h4>
            <p>
              {isAr
                ? "بوابة إلى الموارد الأفريقية مع لوجستيات عبر البحار ورؤية دمج الخدمات."
                : "Gateway to African resources with overseas logistics and a vision to integrate services."}
            </p>
          </motion.div>

          <motion.div className="home-section-card" variants={fadeUp} custom={0.18}>
            <h4>{isAr ? "جهات وشركاء" : "In Collaboration With"}</h4>
            <ul>
              <li>NCIT & group INT.</li>
              <li>UNIC UK INT.</li>
              <li>ABADAMAK & group INT.</li>
              <li>Prince ALEXANDAR & Group</li>
              <li>NOOR U.S.A. international</li>
              <li>Cornerstone UK</li>
              <li>Real estate Developer / Finance (UK, Europe)</li>
            </ul>
          </motion.div>

          <motion.div className="home-section-card" variants={fadeUp} custom={0.22}>
            <h4>{isAr ? "تغطية جغرافية" : "Geographic Coverage"}</h4>
            <p>
              {isAr
                ? "نغطي المملكة، المملكة المتحدة، أوروبا وآسيا مع علاقات دولية لتعزيز القدرات والتمويل."
                : "Coverage across KSA, UK, Europe, and Asia with international relations to boost capacity building and financing."}
            </p>
            <Link to="/Contact">
              <motion.button
                className="home-cta-btn"
                style={{ marginTop: "1rem" }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {isAr ? "تواصل معنا" : "Connect with Us"}
              </motion.button>
            </Link>
          </motion.div>

          <motion.div className="home-section-card" variants={fadeUp} custom={0.26}>
            <h4>{isAr ? "قيمنا" : "Our Values"}</h4>
            <p>
              {isAr
                ? "الشفافية، السرعة في الإنجاز، ومخرجات موثوقة تحقق نتائج قابلة للقياس."
                : "Transparency, operational speed, and trustworthy outputs that deliver measurable outcomes."}
            </p>
          </motion.div>

          <motion.div className="home-section-card" variants={fadeUp} custom={0.3}>
            <h4>{isAr ? "حوكمة وموثوقية" : "Governance & Reliability"}</h4>
            <p>
              {isAr
                ? "نضمن التزام حوكمة المشاريع مع منظومة متابعة وتقارير دقيقة."
                : "We enforce project governance with a monitoring system and precise reporting."}
            </p>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
};

export default About;

