import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from '../contexts/LanguageContext'
import './css/home.css';
import { color } from "framer-motion";
import { accentColor, backgroundColor, maincolor, secondaryColor } from "../constants/color";
import smart from '../assets/smartmoney.jpg';




const Home = (props) => {
    const { lang } = useContext(LanguageContext)
    const isAr = lang === 'ar'

    return (
        <div dir={isAr ? 'rtl' : 'ltr'} >
            {/* <img style={styles.backgroundimg} src={bgImage} alt="Background" /> */}
            <div style={{ ...styles.div1 }}>

                <header style={styles.header}>
                    <h1 style={styles.header.h1}>{isAr ? 'نحو تحويل الموارد وتمكين المستقبل' : 'Transforming Resources, Empowering Futures'}</h1>
                    <p style={{ ...styles.header.p, }}>
                        {isAr ? 'شريككم في تحديث الخدمات وإدارة الموارد باستخدام حلول ذكية ومستدامة — حماية العملاء من المخاطر وتمكين النمو القابل للتوسع.' : '"Partnering to modernize services and resources using intelligent, sustainable solutions — protecting clients from hazards while unlocking scalable growth."'}
                    </p>


                </header>

                <div style={styles.maindiv}>
                    <main style={{ ...styles.whatwedo, display: 'flex', flexWrap: 'wrap' }} >
                        <section>
                            <div style={{ ...styles.whatwedo.div }}>
                                <div>
                                    <h2 >{isAr ? 'ماذا نفعل' : 'What We Do'}</h2>
                                    <p>
                                        {isAr ? 'نقدم خدمات استشارية متكاملة تجمع بين الذكاء الاصطناعي وإدارة الموارد والممارسات المستدامة. نساعد الشركات على تحويل العمليات، وتقليل المخاطر، وتحقيق ميزة تنافسية عبر القطاعات.' : 'We provide integrated advisory and consultation services that combine artificial intelligence, resource management and sustainability practices. Our work helps businesses transform operations, mitigate risks, and capture competitive advantage across sectors.'}
                                    </p>
                                </div>
                                <img style={{ ...styles.whatwedo.div.img }} src={smart} alt="What we do image" />
                            </div>


                            <div style={{ ...styles.whatwedo.div1, }}>
                                <h3 >{isAr ? 'الخدمات الأساسية' : 'Core Services'}</h3>
                                <ul>
                                    <li>{isAr ? 'الاستشارات الاستراتيجية وخدمة الاستشارة الشاملة' : 'Strategic advisory & one-stop consultation'}</li>
                                    <li>{isAr ? 'قاعدة بيانات وموارد Eco-Hub لاتخاذ قرارات مبنية على البيانات' : 'Data bank & eco-hub resources for informed decision-making'}</li>
                                    <li>{isAr ? 'تخصيص الموارد وتحسين المنتجات والخدمات' : 'Resource allocation, product and services optimization'}</li>
                                    <li>{isAr ? 'البحث والتدريب وبرامج بناء القدرات' : 'Research, training & capacity development programs'}</li>
                                    <li>{isAr ? 'تحسين الأداء والتكلفة بدعم الذكاء الاصطناعي' : 'AI-enabled performance and cost optimization'}</li>
                                </ul>
                            </div>





                        </section>


                        <div style={styles.horscroldiv}>
                            <div style={styles.mainhorscroll}>
                                <h3 style={styles.mainhorscroll.title}>{isAr ? 'المنهجية' : 'Approach'}</h3>
                                <p style={styles.mainhorscroll.detail}>
                                    {isAr ? 'نجمع بين الخبرة العميقة وأنظمة البيانات القابلة للتوسع لتقديم مشاريع وبرامج مصممة حسب الحاجة. يغطي نهجنا التقييم وإعادة الهندسة والتنفيذ والحوكمة طويلة الأمد.' : 'We combine deep domain expertise with scalable data systems to deliver tailor-made projects and programs. Our end-to-end approach covers assessment, re-engineering, implementation and long-term governance.'}
                                </p>
                            </div>
                            <div style={styles.mainhorscroll}>
                                <h3 style={styles.mainhorscroll.title}>{isAr ? 'لماذا يهم' : 'Why it matters'}</h3>
                                <p>
                                    {isAr ? 'تعد التحديثات والممارسات الذكية للطاقة أمرًا حيويًا لتقليل المخاطر، وتعزيز المرونة، وجعل الموارد تعمل بفعالية أكبر لصالح عملك. نربط الحلول التقنية بنتائج أعمال قابلة للقياس.' : 'Modernization and intelligent energy practices are essential to reduce hazards, improve resilience, and make resources work harder for your business. We align technical solutions with measurable business outcomes.'}
                                </p>
                            </div>
                            <div style={styles.mainhorscroll}>
                                <h4 >{isAr ? 'الرؤية' : 'Vision'}</h4>
                                <p >{isAr ? 'أن نكون شريكًا رائدًا إقليميًا ودوليًا نوفر إدارة موارد ذات قيمة مضافة وأنظمة مستدامة.' : 'To be a pioneering regional and international partner providing value-added resource management and sustainable systems.'}</p>
                            </div>

                            <div style={styles.mainhorscroll}>
                                <h4 style={styles.mainhorscroll.title}>{isAr ? 'المهمة' : 'Mission'}</h4>
                                <p style={styles.mainhorscroll.detail}>{isAr ? 'تقديم استشارات شاملة تنافسية مدعومة بمركز بيانات مركزي وموارد بيئية لتمكين تحول العملاء وتحقيق نتائج مستدامة.' : 'Deliver competitive, one-stop consultation supported by a centralized data hub and eco-resources to enable client transformation.'}</p>
                            </div>

                            <div style={styles.mainhorscroll}>
                                <h4 style={styles.mainhorscroll.title}>{isAr ? 'مجالات التركيز' : 'Focus Areas'}</h4>
                                <ul >
                                    <li>{isAr ? 'التقييم وتحليل المخاطر' : 'Assessment & Risk Analysis'}</li>
                                    <li>{isAr ? 'تحسين الأداء والتكلفة' : 'Performance & Cost Optimization'}</li>
                                    <li>{isAr ? 'التدريب ومركز المعرفة' : 'Training & Knowledge Hub'}</li>
                                    <li>{isAr ? 'الذكاء الاصطناعي وتكامل النظم' : 'AI + Systems Integration'}</li>
                                </ul>
                            </div>

                            <div style={styles.mainhorscroll}>
                                <h4 style={styles.mainhorscroll.title}>{isAr ? 'ابدأ الآن' : 'Get Started'}</h4>
                                <p style={styles.mainhorscroll.detail}>{isAr ? 'حدد موعدًا لاكتشاف الأهداف والتحديات الخاصة بكم.' : 'Schedule a discovery call to review your objectives and challenges.'}</p>
                                <Link to="/About" >
                                    <button >{isAr ? 'التواصل والاكتشاف' : 'Contact & Discovery'}</button>
                                </Link>
                            </div>
                        </div>

                    </main>

                    {/* Programs & Projects section */}
                    <section >
                        <h2 >{isAr ? 'البرامج والمشاريع' : 'Programs & Projects'}</h2>

                        <h4>{isAr ? 'الشراكات والتمويل' : 'Agencies & Partnership Finance'}</h4>
                        <p>{isAr ? 'ننشئ شراكات مالية ومؤسسية (شراكة ذكية) لتمويل التوسعة الجزئية أو الكاملة للمشروعات، ونطور صيغ مشاركة تناسب جميع الأطراف.' : 'We facilitate agency relationships and partnership financing to support partial or full project enlargement and create participation formulas that work for partners.'}</p>

                        <h4 >{isAr ? 'مشروعات مكبرة ومشروعات متعثرة' : 'Project Enlargement & Struggling Projects'}</h4>
                        <p>{isAr ? 'نحدد المشروعات ذات الحاجة للدعم (تنقيب/تعافي) ونقترح تدخلات تمويلية وتشغيلية لاستعادة الجدوى.' : 'We identify struggling projects (dig-out) and propose financial and operational interventions to restore viability.'}</p>

                        <h4 >{isAr ? 'الصناعات الصغيرة' : 'Small Scale Industries (Wallet Finance)'}</h4>
                        <p>{isAr ? 'ندعم المشاريع الصغيرة المنتجة للدخل عبر روابط السوق وتمويل ذي تكلفة مناسبة، مع بناء قدرات تشغيلية.' : 'We support small-scale income-generating industries with market linkages and wallet-style finance, alongside capacity building.'}</p>

                        <h4 >{isAr ? 'المرحلة الأولى وخارطة الطريق' : 'Phase 1 — Kick Start & Roadmap'}</h4>
                        <p>{isAr ? 'خطة عمل تنفيذية بمراحل: إطلاق، تقييم، تطوير، واستدامة. نحدد المعالم (Milestones) ونُعِد أولويات التقييم.' : 'Action plan with phases: kick-start, assessment, development and sustainability. We define milestones and assessment priorities.'}</p>

                        <h4 >{isAr ? 'تقييم وإختيار المشاريع' : 'Assess, Identify & Select Projects'}</h4>
                        <p>{isAr ? 'نُقيّم الفرص ونختار مشاريع منتجة للدخل مبنية على إمكانيات المرافق الحالية والفجوات السوقية.' : 'We analyze potentials and select income-generating projects based on existing facilities and market gaps.'}</p>

                        <h4 >{isAr ? 'إستراتيجية المدى الزمني' : 'Timing & Scale (Short / Mid / Long)'}</h4>
                        <p>{isAr ? 'نُعد جدول زمني مرحلي (قصير — متوسط — طويل) مع أهداف قابلة للقياس (Oct → Feb → 2025 → 2026 → 2027).' : 'We prepare phased timelines (short, mid, long) with measurable targets (Oct → Feb → 2025 → 2026 → 2027).'}</p>

                        <h4 >{isAr ? 'القيمة المُضافة ومجالات الاهتمام' : 'Added Value & Areas of Concern'}</h4>
                        <p>{isAr ? 'نضيف قيمة عبر تحسين استغلال الأصول، مشاركة المرافق، وخفض تكاليف التشغيل لزيادة الربحية والمصداقية.' : 'We add value by optimizing asset utilization, leveraging shared facilities, and reducing operating costs to increase profitability and credibility.'}</p>

                        <h4 >{isAr ? 'الفوائد' : 'Benefits'}</h4>
                        <ul>
                            <li>{isAr ? 'زيادة استغلال المعدات والتسهيلات' : 'Upgrade facility utilization'}</li>
                            <li>{isAr ? 'خفض التكاليف التشغيلية ورفع الأرباح' : 'Reduce overall ops costs and increase profits'}</li>
                            <li>{isAr ? 'توسيع الشراكات والمصداقية' : 'Enlarge credibility & partnerships'}</li>
                            <li>{isAr ? 'إعادة هيكلة تدعم النمو' : 'Apply restructuring to support scale'}</li>
                        </ul>

                        <h4 >{isAr ? 'القطاعات المقترحة' : 'Suggested Sectors'}</h4>
                        <p>{isAr ? 'الصحة، التغذية، التعليم، التدريب، البحث، والتجارة الإلكترونية للكتب والمواد التعليمية.' : 'Health, nutrition clinics, education & training (EST), research support centers, distance learning & e-bookstores.'}</p>

                        <div >
                            <Link to="/Contact" >
                                <button >{isAr ? 'اطلب شراكة' : 'Request Partnership'}</button>
                            </Link>
                        </div>
                    </section>
                </div>
            </div>
        </div >









    );
};

const styles = {
    div1: {
        fontFamily: 'system-ui, Avenir, Helvetica, Arial, sans-serif',
        zIndex: -1,
        overflow: 'hidden',


    },
    header: {
        marginTop: 100,
        position: "fixed",
        zIndex: -1,
        h1: {
            color: maincolor,
            marginLeft: '0vw',
            textAlign: 'center',
            fontSize: '4rem',
            marginTop: '10vh',
            width: '90vw',
            zIndex: -1,
            alignSelf: 'center',

        },
        p: {
            color: `${maincolor}bb`,
            marginLeft: '15vw',
            marginRight: '15vw',
            width: '30vw',
            minWidth: 250,
            textAlign: "left",
            zIndex: -1,



        }


    },
    maindiv: {
        backgroundColor: backgroundColor,
        borderTop: `1px solid ${maincolor}`,
        width: '100vw',
        margin: "90vh 0 0 0 ",
    },
    whatwedo: {

        div: {
            width: '80vw',
            textAlign: 'left',
            minWidth: 300,
            letterSpacing: 0.8,
            position: 'relative',
            left: '2vw',
            display: 'flex',
            flexWrap: 'wrap',

            img: {
                width: '15vw',
                minWidth: 150,
                left: '60vw',
                marginTop: '5vh',
            }

        },

        div1: {
            width: '40%',
            minWidth: 300,
            letterSpacing: 0.8,
            position: 'relative',
            left: '2vw',


        },

    },
    horscroldiv: {



    },
    mainhorscroll: {
        margin: 20,
        width: 300,
        borderRadius: 10,
        backgroundImage: `radial-gradient(circle at 300% , white, transparent)`,
        padding: 10,
        title: {
            color: accentColor,
            fontSize: 20,

        },
        detail: {
            textSpacing: 0.8,
            letterSpacing: 0.8,

        }


    }

};

export default Home