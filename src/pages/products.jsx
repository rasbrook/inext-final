import React, { useRef, useEffect, useState, useContext } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";
import "./css/home.css";
import "./css/products.css";
import { LanguageContext } from "../contexts/LanguageContext";

gsap.registerPlugin(useGSAP);

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay },
  }),
};

const Products = () => {
  const { lang } = useContext(LanguageContext);
  const isAr = lang === "ar";

  const trackRef = useRef(null);
  const prevPercentageRef = useRef(0);
  const startXRef = useRef(0);
  const isDownRef = useRef(false);
  const [showHint, setShowHint] = useState(false);
  const hintRef = useRef(null);
  const hidingHintRef = useRef(false);
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

  const dismissHint = () => {
    try {
      localStorage.setItem("swipeHintSeen", "1");
    } catch (err) {}
    if (!showHint || hidingHintRef.current) return;
    const el = hintRef.current;
    if (el) {
      hidingHintRef.current = true;
      gsap.to(el, {
        duration: 0.45,
        opacity: 0,
        y: 12,
        ease: "power2.out",
        onComplete: () => {
          hidingHintRef.current = false;
          setShowHint(false);
        },
      });
    } else {
      setShowHint(false);
    }
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const images = track.getElementsByClassName("image");

    try {
      const isTouch =
        (window.matchMedia && window.matchMedia("(pointer: coarse)").matches) ||
        "ontouchstart" in window;
      const seen = localStorage.getItem("swipeHintSeen");
      if (isTouch && !seen) setShowHint(true);
    } catch (err) {
      /* ignore */
    }

    const applyPercentage = (next) => {
      next = Math.max(Math.min(next, 100), 0);

      gsap.to(track, {
        duration: 0.8,
        ease: "power3.out",
        css: { transform: `translate(${next}%, -50%)` },
      });

      for (const img of images) {
        gsap.to(img, {
          duration: 0.8,
          ease: "power3.out",
          css: { objectPosition: `${-next + 100}% center` },
        });
      }

      track.dataset.percentage = String(next);
      prevPercentageRef.current = next;
    };

    const onPointerDown = (e) => {
      dismissHint();
      isDownRef.current = true;
      startXRef.current = e.clientX;
      track.setPointerCapture && track.setPointerCapture(e.pointerId);
    };

    const onPointerMove = (e) => {
      if (!isDownRef.current) return;
      const mouseDelta = e.clientX - startXRef.current;
      const maxDelta = window.innerWidth / 2;

      const percentage = (mouseDelta / maxDelta) * 100;
      const next = prevPercentageRef.current + percentage;

      applyPercentage(next);
    };

    const onPointerUp = (e) => {
      isDownRef.current = false;
      try {
        track.releasePointerCapture && track.releasePointerCapture(e.pointerId);
      } catch (err) {}
    };

    const onWheel = (e) => {
      const delta = e.deltaX !== 0 ? e.deltaX : e.deltaY;
      const sensitivity = 0.5;
      const percentageDelta = -(delta / window.innerWidth) * 100 * sensitivity;
      const next = prevPercentageRef.current + percentageDelta;
      applyPercentage(next);
      dismissHint();
      e.preventDefault();
    };

    track.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("pointercancel", onPointerUp);
    track.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      track.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointercancel", onPointerUp);
      track.removeEventListener("wheel", onWheel);
    };
  }, []);

  return (
    <main className="home products-page" dir={isAr ? "rtl" : "ltr"}>
      {/* HERO */}
      <section className="home-hero">
        <motion.div
          className="home-hero-text"
          initial={{ opacity: 0, x: isAr ? 40 : -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1 className="home-hero-title">
            {isAr ? "منتجاتنا وحلولنا" : "Products & Solutions"}
          </h1>
          <p className="home-hero-subtitle">
            {isAr
              ? "مجموعة حلول تغطي الاستشارات، البيانات، والتكامل التقني، مع تجارب تفاعلية."
              : "A portfolio of advisory-led, data-driven, and tech-integrated solutions, delivered with immersive experiences."}
          </p>
          <div className="home-hero-actions">
            <Link to="/Contact">
              <motion.button
                className="home-cta-btn"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                {isAr ? "احجز تجربة" : "Book a Demo"}
              </motion.button>
            </Link>
            <Link to="/About">
              <motion.button
                className="home-secondary-btn"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {isAr ? "تعرف على الفريق" : "Meet the Team"}
              </motion.button>
            </Link>
          </div>
        </motion.div>

        
      </section>

      {/* OFFERINGS */}
      <motion.section
        className="home-content"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={fadeUp}
      >
        <h2 className="home-section-title">
          {isAr ? "مجالات المنتجات" : "Product Pillars"}
        </h2>
        <div className="home-grid">
          <motion.div className="home-section-card" variants={fadeUp} custom={0.1}>
            <h4>{isAr ? "حلول البيانات والذكاء" : "Data & Intelligence"}</h4>
            <p>
              {isAr
                ? "مخازن بيانات، تحليلات موجهة، ولوحات أداء تساعد في اتخاذ قرارات فورية."
                : "Data stores, guided analytics, and performance dashboards for instant decisions."}
            </p>
          </motion.div>

          <motion.div className="home-section-card" variants={fadeUp} custom={0.14}>
            <h4>{isAr ? "تكامل الأنظمة" : "Systems Integration"}</h4>
            <p>
              {isAr
                ? "تكامل APIs، أتمتة العمليات، وربط فرق العمليات بالتقنية بسلاسة."
                : "API integrations, process automation, and seamless ops-tech connectivity."}
            </p>
          </motion.div>

          <motion.div className="home-section-card" variants={fadeUp} custom={0.18}>
            <h4>{isAr ? "منتجات المعرفة" : "Knowledge Products"}</h4>
            <p>
              {isAr
                ? "مراكز معرفة، مكتبات محتوى تفاعلية، ودعم تدريبي مدفوع بالبيانات."
                : "Knowledge hubs, interactive content libraries, and data-backed training support."}
            </p>
          </motion.div>

          <motion.div className="home-section-card" variants={fadeUp} custom={0.22}>
            <h4>{isAr ? "برامج التمكين" : "Enablement Programs"}</h4>
            <p>
              {isAr
                ? "برامج بناء قدرات، إرشاد تشغيلي، ومرافقة من الإطلاق إلى الحوكمة."
                : "Capacity building, operational mentoring, and guidance from launch through governance."}
            </p>
          </motion.div>

          <motion.div className="home-section-card" variants={fadeUp} custom={0.26}>
            <h4>{isAr ? "حزم مرنة" : "Flexible Bundles"}</h4>
            <p>
              {isAr
                ? "خيارات اشتراك شهرية أو حسب الاستخدام لتمكين سرعة التبني وتقليل المخاطر."
                : "Monthly or usage-based bundles to accelerate adoption and reduce risk."}
            </p>
          </motion.div>

          <motion.div className="home-section-card" variants={fadeUp} custom={0.3}>
            <h4>{isAr ? "خدمات إضافية" : "Add-ons"}</h4>
            <p>
              {isAr
                ? "مراقبة مستمرة، تدقيق أمني، وتحديثات مدفوعة بالبيانات لضمان الجودة."
                : "Continuous monitoring, security audits, and data-driven refreshes to keep quality high."}
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* INTERACTIVE GALLERY */}
      <motion.section
        className="home-content products-gallery-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={fadeUp}
      >
        <div className="products-gallery-header">
          <div>
            <h2 className="home-section-title" style={{ marginBottom: "0.6rem" }}>
              {isAr ? "معرض تفاعلي" : "Interactive Gallery"}
            </h2>
            <p className="home-hero-subtitle" style={{ margin: 0 }}>
              {isAr
                ? "اسحب أفقيًا أو استخدم عجلة التمرير للتنقل عبر المعرض." 
                : "Drag horizontally or use your trackpad/wheel to explore the gallery."}
            </p>
          </div>
          <Link to="/Contact">
            <motion.button
              className="home-cta-btn"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              {isAr ? "اطلب عرضًا مباشرًا" : "Request a Live Demo"}
            </motion.button>
          </Link>
        </div>

        <div className="products-gallery">
          <div
            ref={trackRef}
            data-prev-percentage="0"
            data-mouse-down-at="0"
            id="image-track"
            role="region"
            aria-label={isAr ? "معرض المنتجات" : "Product images"}
          >
            <img
              className="image"
              src="https://cdn.pixabay.com/photo/2023/02/06/18/33/mixed-fruits-7772552_1280.jpg"
              draggable="false"
              alt="product 1"
            />
            <img
              className="image"
              src="https://sustainhealth.fit/wp-content/uploads/2024/06/Seed-oils.jpg"
              draggable="false"
              alt="product 2"
            />
            <img
              className="image"
              src="https://delicious-usa.com/wp-content/uploads/2021/07/Visuals-Pitch-5-1220x792.jpg"
              draggable="false"
              alt="product 3"
            />
            <img
              className="image"
              src="https://domf5oio6qrcr.cloudfront.net/medialibrary/11435/b3c65ed2-1c85-4f8f-9bd0-b3503d592ffe.jpg"
              draggable="false"
              alt="product 4"
            />
            <img
              className="image"
              src="https://news.okstate.edu/articles/agricultural-sciences-natural-resources/images/dietary_supplement_banner.jpg"
              draggable="false"
              alt="product 5"
            />
            <img
              className="image"
              src="https://news.okstate.edu/articles/agricultural-sciences-natural-resources/images/dietary_supplement_banner.jpg"
              draggable="false"
              alt="product 6"
            />
          </div>
          {showHint && (
            <div className="swipe-hint" ref={hintRef} aria-hidden>
              {isAr ? "اسحب أفقيًا" : "Swipe horizontally"}
            </div>
          )}
        </div>
      </motion.section>
    </main>
  );
};

export default Products;
