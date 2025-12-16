import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { LanguageContext } from "../contexts/LanguageContext";
import "./css/home.css";
import i0 from "../assets/smartmoney.jpg";
import i1 from '../assets/img1.jpg'
import i2 from '../assets/mission.jpg'
import i3 from '../assets/vision.jpg'

gsap.registerPlugin(useGSAP, ScrollTrigger);

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay },
  }),
};

const Home = () => {
  const images = [i0, i1, i2, i3];
  let smart = Math.floor(Math.random() * images.length);
  smart = images[smart];


  const { lang } = useContext(LanguageContext);
  const isAr = lang === "ar";

  const heroGlowRef = useRef(null);

  useGSAP(() => {
    if (!heroGlowRef.current) return;

    gsap.to(heroGlowRef.current, {
      scale: 1.04,
      rotate: 1.5,
      duration: 4,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });

    // subtle parallax on hero text
    ScrollTrigger.matchMedia({
      "(min-width: 768px)": () => {
        gsap.to(".home-hero-text", {
          yPercent: -8,
          scrollTrigger: {
            trigger: ".home-hero",
            start: "top top",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      },
    });

    // glassy cards drifting slightly with scroll
    gsap.utils.toArray(".home-section-card").forEach((card, i) => {
      gsap.fromTo(
        card,
        { y: 16 },
        {
          y: -12,
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
    <main className="home" dir={isAr ? "rtl" : "ltr"}>
      {/* HERO */}
      <section className="home-hero">
        <motion.div
          className="home-hero-text"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <h1 className="home-hero-title">
            {isAr
              ? "نحو تحويل الموارد وتمكين المستقبل"
              : "Transforming Resources, Empowering Futures"}
          </h1>
          <p className="home-hero-subtitle">
            {isAr
              ? "شريككم في تحديث الخدمات وإدارة الموارد باستخدام حلول ذكية ومستدامة — حماية العملاء من المخاطر وتمكين النمو القابل للتوسع."
              : "Partnering to modernize services and resources using intelligent, sustainable solutions — protecting clients from hazards while unlocking scalable growth."}
          </p>

          <div className="home-hero-actions">
            <Link to="/Contact">
              <motion.button
                className="home-cta-btn"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                {isAr ? "ابدأ الشراكة الآن" : "Start a Partnership"}
              </motion.button>
            </Link>
            <Link to="/About">
              <motion.button
                className="home-secondary-btn"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {isAr ? "تعرف علينا أكثر" : "Learn More About Us"}
              </motion.button>
            </Link>
          </div>
        </motion.div>


        <motion.img
          src={smart}
          alt={isAr ? "استثمار ذكي" : "Smart resource management"}
          style={{
            width: "35vw",
            minWidth: 350,
            borderRadius: "1.5rem",
            objectFit: "cover",
            boxShadow: "0 24px 80px rgba(15,23,42,0.9)",
          }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.25 }}
        />

      </section>

      {/* WHAT WE DO + APPROACH */}
      <motion.section
        className="home-content"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={fadeUp}
      >
        <h2 className="home-section-title">
          {isAr ? "ماذا نفعل" : "What We Do"}
        </h2>
        <div className="home-grid">
          <motion.div
            className="home-section-card home-section-wide"
            variants={fadeUp}
            custom={0.1}
          >
            <p>
              {isAr
                ? "نقدم خدمات استشارية متكاملة تجمع بين الذكاء الاصطناعي وإدارة الموارد والممارسات المستدامة. نساعد الشركات على تحويل العمليات، وتقليل المخاطر، وتحقيق ميزة تنافسية عبر القطاعات."
                : "We provide integrated advisory and consultation services that combine artificial intelligence, resource management and sustainability practices. Our work helps businesses transform operations, mitigate risks, and capture competitive advantage across sectors."}
            </p>
          </motion.div>

          <motion.div
            className="home-section-card"
            variants={fadeUp}
            custom={0.15}
          >
            <h4>{isAr ? "الخدمات الأساسية" : "Core Services"}</h4>
            <ul>
              <li>
                {isAr
                  ? "الاستشارات الاستراتيجية وخدمة الاستشارة الشاملة"
                  : "Strategic advisory & one-stop consultation"}
              </li>
              <li>
                {isAr
                  ? "قاعدة بيانات وموارد Eco-Hub لاتخاذ قرارات مبنية على البيانات"
                  : "Data bank & eco-hub resources for informed decision-making"}
              </li>
              <li>
                {isAr
                  ? "تخصيص الموارد وتحسين المنتجات والخدمات"
                  : "Resource allocation, product and services optimization"}
              </li>
              <li>
                {isAr
                  ? "البحث والتدريب وبرامج بناء القدرات"
                  : "Research, training & capacity development programs"}
              </li>
              <li>
                {isAr
                  ? "تحسين الأداء والتكلفة بدعم الذكاء الاصطناعي"
                  : "AI-enabled performance and cost optimization"}
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="home-section-card"
            variants={fadeUp}
            custom={0.2}
          >
            <h4>{isAr ? "المنهجية" : "Approach"}</h4>
            <p>
              {isAr
                ? "نجمع بين الخبرة العميقة وأنظمة البيانات القابلة للتوسع لتقديم مشاريع وبرامج مصممة حسب الحاجة. يغطي نهجنا التقييم وإعادة الهندسة والتنفيذ والحوكمة طويلة الأمد."
                : "We combine deep domain expertise with scalable data systems to deliver tailor-made projects and programs. Our end-to-end approach covers assessment, re-engineering, implementation and long-term governance."}
            </p>
          </motion.div>

          <motion.div
            className="home-section-card"
            variants={fadeUp}
            custom={0.25}
          >
            <h4>{isAr ? "لماذا يهم" : "Why it matters"}</h4>
            <p>
              {isAr
                ? "تعد التحديثات والممارسات الذكية للطاقة أمرًا حيويًا لتقليل المخاطر، وتعزيز المرونة، وجعل الموارد تعمل بفعالية أكبر لصالح عملك. نربط الحلول التقنية بنتائج أعمال قابلة للقياس."
                : "Modernization and intelligent energy practices are essential to reduce hazards, improve resilience, and make resources work harder for your business. We align technical solutions with measurable business outcomes."}
            </p>
          </motion.div>

          <motion.div
            className="home-section-card"
            variants={fadeUp}
            custom={0.3}
          >
            <h4>{isAr ? "الرؤية" : "Vision"}</h4>
            <p>
              {isAr
                ? "أن نكون شريكًا رائدًا إقليميًا ودوليًا نوفر إدارة موارد ذات قيمة مضافة وأنظمة مستدامة."
                : "To be a pioneering regional and international partner providing value-added resource management and sustainable systems."}
            </p>
          </motion.div>

          <motion.div
            className="home-section-card"
            variants={fadeUp}
            custom={0.35}
          >
            <h4>{isAr ? "المهمة" : "Mission"}</h4>
            <p>
              {isAr
                ? "تقديم استشارات شاملة تنافسية مدعومة بمركز بيانات مركزي وموارد بيئية لتمكين تحول العملاء وتحقيق نتائج مستدامة."
                : "Deliver competitive, one-stop consultation supported by a centralized data hub and eco-resources to enable client transformation."}
            </p>
          </motion.div>

          <motion.div
            className="home-section-card"
            variants={fadeUp}
            custom={0.4}
          >
            <h4>{isAr ? "مجالات التركيز" : "Focus Areas"}</h4>
            <ul>
              <li>
                {isAr
                  ? "التقييم وتحليل المخاطر"
                  : "Assessment & Risk Analysis"}
              </li>
              <li>
                {isAr
                  ? "تحسين الأداء والتكلفة"
                  : "Performance & Cost Optimization"}
              </li>
              <li>
                {isAr
                  ? "التدريب ومركز المعرفة"
                  : "Training & Knowledge Hub"}
              </li>
              <li>
                {isAr
                  ? "الذكاء الاصطناعي وتكامل النظم"
                  : "AI + Systems Integration"}
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="home-section-card"
            variants={fadeUp}
            custom={0.45}
          >
            <h4>{isAr ? "ابدأ الآن" : "Get Started"}</h4>
            <p>
              {isAr
                ? "حدد موعدًا لاكتشاف الأهداف والتحديات الخاصة بكم."
                : "Schedule a discovery call to review your objectives and challenges."}
            </p>
            <Link to="/About">
              <motion.button
                className="home-cta-btn"
                style={{ marginTop: "1rem" }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {isAr ? "التواصل والاكتشاف" : "Contact & Discovery"}
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* PROGRAMS & PROJECTS */}
      <motion.section
        className="home-content"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={fadeUp}
      >
        <h2 className="home-section-title">
          {isAr ? "البرامج والمشاريع" : "Programs & Projects"}
        </h2>
        <div className="home-grid">
          <motion.div className="home-section-card" variants={fadeUp} custom={0.1}>
            <h4>
              {isAr ? "الشراكات والتمويل" : "Agencies & Partnership Finance"}
            </h4>
            <p>
              {isAr
                ? "ننشئ شراكات مالية ومؤسسية (شراكة ذكية) لتمويل التوسعة الجزئية أو الكاملة للمشروعات، ونطور صيغ مشاركة تناسب جميع الأطراف."
                : "We facilitate agency relationships and partnership financing to support partial or full project enlargement and create participation formulas that work for partners."}
            </p>
          </motion.div>

          <motion.div className="home-section-card" variants={fadeUp} custom={0.15}>
            <h4>
              {isAr
                ? "مشروعات مكبرة ومشروعات متعثرة"
                : "Project Enlargement & Struggling Projects"}
            </h4>
            <p>
              {isAr
                ? "نحدد المشروعات ذات الحاجة للدعم (تنقيب/تعافي) ونقترح تدخلات تمويلية وتشغيلية لاستعادة الجدوى."
                : "We identify struggling projects (dig-out) and propose financial and operational interventions to restore viability."}
            </p>
          </motion.div>

          <motion.div className="home-section-card" variants={fadeUp} custom={0.2}>
            <h4>
              {isAr
                ? "الصناعات الصغيرة"
                : "Small Scale Industries (Wallet Finance)"}
            </h4>
            <p>
              {isAr
                ? "ندعم المشاريع الصغيرة المنتجة للدخل عبر روابط السوق وتمويل ذي تكلفة مناسبة، مع بناء قدرات تشغيلية."
                : "We support small-scale income-generating industries with market linkages and wallet-style finance, alongside capacity building."}
            </p>
          </motion.div>

          <motion.div className="home-section-card" variants={fadeUp} custom={0.25}>
            <h4>
              {isAr
                ? "المرحلة الأولى وخارطة الطريق"
                : "Phase 1 — Kick Start & Roadmap"}
            </h4>
            <p>
              {isAr
                ? "خطة عمل تنفيذية بمراحل: إطلاق، تقييم، تطوير، واستدامة. نحدد المعالم (Milestones) ونُعِد أولويات التقييم."
                : "Action plan with phases: kick-start, assessment, development and sustainability. We define milestones and assessment priorities."}
            </p>
          </motion.div>

          <motion.div className="home-section-card" variants={fadeUp} custom={0.3}>
            <h4>
              {isAr ? "تقييم وإختيار المشاريع" : "Assess, Identify & Select Projects"}
            </h4>
            <p>
              {isAr
                ? "نُقيّم الفرص ونختار مشاريع منتجة للدخل مبنية على إمكانيات المرافق الحالية والفجوات السوقية."
                : "We analyze potentials and select income-generating projects based on existing facilities and market gaps."}
            </p>
          </motion.div>

          <motion.div className="home-section-card" variants={fadeUp} custom={0.35}>
            <h4>
              {isAr
                ? "إستراتيجية المدى الزمني"
                : "Timing & Scale (Short / Mid / Long)"}
            </h4>
            <p>
              {isAr
                ? "نُعد جدول زمني مرحلي (قصير — متوسط — طويل) مع أهداف قابلة للقياس (Oct → Feb → 2025 → 2026 → 2027)."
                : "We prepare phased timelines (short, mid, long) with measurable targets (Oct → Feb → 2025 → 2026 → 2027)."}{" "}
            </p>
          </motion.div>

          <motion.div className="home-section-card" variants={fadeUp} custom={0.4}>
            <h4>
              {isAr
                ? "القيمة المُضافة ومجالات الاهتمام"
                : "Added Value & Areas of Concern"}
            </h4>
            <p>
              {isAr
                ? "نضيف قيمة عبر تحسين استغلال الأصول، مشاركة المرافق، وخفض تكاليف التشغيل لزيادة الربحية والمصداقية."
                : "We add value by optimizing asset utilization, leveraging shared facilities, and reducing operating costs to increase profitability and credibility."}
            </p>
          </motion.div>

          <motion.div className="home-section-card" variants={fadeUp} custom={0.45}>
            <h4>{isAr ? "الفوائد" : "Benefits"}</h4>
            <ul>
              <li>
                {isAr
                  ? "زيادة استغلال المعدات والتسهيلات"
                  : "Upgrade facility utilization"}
              </li>
              <li>
                {isAr
                  ? "خفض التكاليف التشغيلية ورفع الأرباح"
                  : "Reduce overall ops costs and increase profits"}
              </li>
              <li>
                {isAr
                  ? "توسيع الشراكات والمصداقية"
                  : "Enlarge credibility & partnerships"}
              </li>
              <li>
                {isAr
                  ? "إعادة هيكلة تدعم النمو"
                  : "Apply restructuring to support scale"}
              </li>
            </ul>
          </motion.div>

          <motion.div className="home-section-card" variants={fadeUp} custom={0.5}>
            <h4>{isAr ? "القطاعات المقترحة" : "Suggested Sectors"}</h4>
            <p>
              {isAr
                ? "الصحة، التغذية، التعليم، التدريب، البحث، والتجارة الإلكترونية للكتب والمواد التعليمية."
                : "Health, nutrition clinics, education & training (EST), research support centers, distance learning & e-bookstores."}
            </p>
            <Link to="/Contact">
              <motion.button
                className="home-secondary-btn"
                style={{ marginTop: "1rem" }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {isAr ? "اطلب شراكة" : "Request Partnership"}
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
};

export default Home;