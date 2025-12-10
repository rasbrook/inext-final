import React, { useContext } from 'react'
import { backgroundColor, maincolor } from "../constants/color";
import { Link } from 'react-router-dom'
import { LanguageContext } from '../contexts/LanguageContext'

const About = () => {
    const { lang } = useContext(LanguageContext)
    const isAr = lang === 'ar'

    return (
        <div dir={isAr ? 'rtl' : 'ltr'} style={{
            background: backgroundColor || '#f5f7fb', minHeight: '100vh', padding: '3rem 1rem', color: '#222', width: '99vw', paddingTop: 80, alignSelf: 'flex-start'
        }}>
            <div style={{ maxWidth: 980, margin: '0 auto' }}>
                <h1 style={{ marginTop: 0, color: maincolor || '#0b6' }}>{isAr ? 'معلومات عنا - سكوب أسوشيتس' : 'About Inext Scope vision'}</h1>

                <p style={{ fontSize: 16, lineHeight: 1.6 }}>
                    {isAr ? 'سكوب أسوشيتس شريك للمنظمات التي تسعى لتحديث الخدمات، وتحسين استخدام الموارد، وتبني ممارسات ذكية ومستدامة. نجمع بين الخبرة الاستشارية ونظم البيانات وأدوات مدعومة بالذكاء الاصطناعي لمساعدة العملاء على تقليل المخاطر، وتحسين الأداء، والنمو بشكل مسؤول.' : 'Scope Associates is a partner for organizations seeking to modernize services, optimize resources, and adopt intelligent, sustainable practices. We combine professional advisory, research and data systems with AI-enabled tools to help clients reduce risk, improve performance, and scale responsibly.'}
                </p>

                <section style={{ marginTop: 18 }}>
                    <h3>{isAr ? 'الرؤية' : 'Vision'}</h3>
                    <p>{isAr ? 'أن نكون شريكًا رائدًا إقليميًا ودوليًا نوفر إدارة موارد ذات قيمة مضافة وأنظمة مستدامة تعزز المرونة والنمو.' : 'To be a pioneering regional and international partner, providing value-added resource management and sustainable systems that foster resilience and growth.'}</p>
                </section>

                <section style={{ marginTop: 12 }}>
                    <h3>{isAr ? 'المهمة' : 'Mission'}</h3>
                    <p>{isAr ? 'تقديم استشارات شاملة تنافسية مدعومة بمركز بيانات مركزي وموارد بيئية لتمكين تحول العملاء وتحقيق نتائج مستدامة.' : 'Deliver competitive, one-stop consultation supported by a centralized data hub and eco-resources to enable client transformation and sustainable outcomes.'}</p>
                </section>

                <section style={{ marginTop: 12 }}>
                    <h3>{isAr ? 'الخدمات' : 'Services'}</h3>
                    <ul>
                        <li>{isAr ? 'الاستشارات الاستراتيجية وتقييم المنظمات' : 'Strategic advisory & organizational assessment'}</li>
                        <li>{isAr ? 'قاعدة بيانات، أبحاث ومركز المعرفة' : 'Data bank, research & knowledge hub'}</li>
                        <li>{isAr ? 'تخصيص الموارد وتحسين التكاليف' : 'Resource allocation and cost optimization'}</li>
                        <li>{isAr ? 'تكامل أنظمة مدعوم بالذكاء الاصطناعي وهندسة الأداء' : 'AI-enabled systems integration and performance engineering'}</li>
                        <li>{isAr ? 'التدريب وبرامج بناء القدرات والتميز التشغيلي' : 'Training, capacity development & operational excellence programs'}</li>
                    </ul>
                </section>

                <section style={{ marginTop: 12 }}>
                    <h3>{isAr ? 'كيف نعمل' : 'How we work'}</h3>
                    <p>
                        {isAr ? 'نبدأ بتقييم معمق لنقاط القوة، والضعف، والمخاطر. ثم نصمم برامج مخصصة تجمع بين الخبرة الاستشارية والرؤى المبنية على البيانات ودعم التنفيذ العملي — من التجربة الأولية وحتى الحوكمة.' : 'Our approach starts with an in-depth assessment of strengths, weaknesses and risks. We then design tailored programs that combine advisory expertise, data-driven insights and practical implementation support — from pilot through governance.'}
                    </p>
                </section>

                <section style={{ marginTop: 18, display: 'flex', gap: 12, justifyContent: isAr ? 'flex-end' : 'flex-start' }}>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <button style={{ background: '#eee', border: '1px solid #ddd', padding: '8px 12px', borderRadius: 6 }}>{isAr ? 'العودة إلى الصفحة الرئيسية' : 'Back to Home'}</button>
                    </Link>


                </section>

                {/* Project Enlargement & Programs */}
                <section style={{ marginTop: 24 }}>
                    <h3>{isAr ? 'توسعة المشروع وصيغ المشاركة' : 'Project Enlargement & Participation'}</h3>
                    <p>{isAr ? 'نقدّم حلولًا لتمويل التوسعة الجزئية أو الكاملة، مع وضع صيغ مشاركة مرنة تضمن مصالح الشركاء.' : 'We provide solutions for partial or full project enlargement and design flexible participation formulas that protect partner interests.'}</p>

                    <h4 style={{ marginTop: 12 }}>{isAr ? 'مشروعات متعثرة' : 'Struggling Projects'}</h4>
                    <p>{isAr ? 'نقوم بعمليات تنقيب وإعادة هيكلة للمشروعات المتعثرة لاستعادة الجدوى وتشغيلها بكفاءة.' : 'We perform dig-out and restructuring for struggling projects to restore viability and operational efficiency.'}</p>

                    <h4 style={{ marginTop: 12 }}>{isAr ? 'الصناعات الصغيرة وتمويل المحفظة' : 'Small Scale Industries & Wallet Finance'}</h4>
                    <p>{isAr ? 'ندعم المشاريع الصغيرة عبر قنوات تمويل ملائمة وروابط سوقية لزيادة الدخل المحلي.' : 'We support small industries with wallet finance and market linkages to boost local income generation.'}</p>

                    <h4 style={{ marginTop: 12 }}>{isAr ? 'خطة العمل - المرحلة الأولى' : 'Action Plan — Phase 1'}</h4>
                    <p>{isAr ? 'مرحلة الإطلاق تتضمن خارطة طريق واضحة، مع تحديد المعالم، وتقييم الأولويات واختيار المشاريع ذات الأثر.' : 'Kick-start phase includes a clear roadmap with milestones, priority assessments and selection of high-impact projects.'}</p>

                    <h4 style={{ marginTop: 12 }}>{isAr ? 'تحليل الفجوات والآفاق الزمنية' : 'Market Gaps & Timing'}</h4>
                    <p>{isAr ? 'نقوم بقراءة الإمكانيات الحالية وتحديد فجوات السوق ووضع جداول زمنية قصيرة ومتوسطة وطويلة (مثلاً Oct → Feb → 2025 → 2026 → 2027).' : 'We assess current facilities, identify market gaps and prepare short/mid/long timelines (e.g. Oct → Feb → 2025 → 2026 → 2027).'}</p>

                    <h4 style={{ marginTop: 12 }}>{isAr ? 'القيمة المضافة' : 'Added Value'}</h4>
                    <p>{isAr ? 'رفع القيمة عبر استغلال الأصول، وتحسين العمليات، وتقليل التكاليف، وزيادة مصداقية الشراكات.' : 'Adding value through better asset utilization, operational improvements, cost reduction and stronger partnership credibility.'}</p>

                    <h4 style={{ marginTop: 12 }}>{isAr ? 'مجالات الاهتمام والفوائد' : 'Areas of Concern & Benefits'}</h4>
                    <ul>
                        <li>{isAr ? 'الاستفادة من المرافق غير المستغلة' : 'Utilization of unused facilities'}</li>
                        <li>{isAr ? 'خفض تكاليف التشغيل وزيادة الربحية' : 'Lower ops costs and higher profits'}</li>
                        <li>{isAr ? 'توسيع الشراكات والمصداقية' : 'Enlarge partnerships and credibility'}</li>
                        <li>{isAr ? 'إعادة هيكلة داعمة للنمو' : 'Restructuring that supports growth'}</li>
                    </ul>

                    <h4 style={{ marginTop: 12 }}>{isAr ? 'القطاعات المقترحة للتركيز' : 'Suggested Focus Sectors'}</h4>
                    <p>{isAr ? 'الصحة (نادي صحي للسيدات، تغذية، عيادات)، التعليم والتدريب (الدورات، دعم مشاريع التخرج، البحث)، والتجارة الإلكترونية للمواد التعليمية.' : 'Health (female health club, nutrition, clinics), Education & Training (courses, graduation project support, research), and e-commerce for educational materials.'}</p>
                </section>

                {/* Scope Holding & Partnerships section */}
                <section style={{ marginTop: 24 }}>
                    <h3>{isAr ? 'سكوب هولدينج والشراكات' : 'Scope Holding — Partnerships & Vision'}</h3>
                    <p>{isAr ? 'حالة الفن — مركز استشاري متكامل (One-stop consultancy holding hub). نعتمد تقنيات تقلل الأخطاء وتسهّل التشغيل بدون إجهاد أو عناء، ونفخر بنسبة رضا عملاء تصل إلى 98%.' : 'State-of-the-art one-stop consultancy holding hub. Technology reduces errors, facilitates smooth operation — no stress, no hassle. We are among the most reliable consortiums with 98% customer satisfaction.'}</p>

                    <h4 style={{ marginTop: 12 }}>{isAr ? 'جسر KSA/UK' : 'SCOPE KSA — UK Bridge'}</h4>
                    <p>{isAr ? 'البوابة إلى الموارد الأفريقية (The gate to the African resources). شبكة لوجستيات عبر البحار ورؤية دمج الخدمات.' : 'The gate to the African resources — state of overseas logistics and vision to incorporate services.'}</p>

                    <h4 style={{ marginTop: 12 }}>{isAr ? 'جهات وشركاء' : 'In Collaboration With'}</h4>
                    <ul>
                        <li>{isAr ? 'NCIT & group INT.' : 'NCIT & group INT.'}</li>
                        <li>{isAr ? 'UNIC UK INT.' : 'UNIC UK INT.'}</li>
                        <li>{isAr ? 'ABADAMAK & group INT.' : 'ABADAMAK & group INT.'}</li>
                        <li>{isAr ? 'Prince ALEXANDAR & Group' : 'Prince ALEXANDAR & Group'}</li>
                        <li>{isAr ? 'NOOR U.S.A. international' : 'NOOR U.S.A. international'}</li>
                        <li>{isAr ? 'Cornerstone UK' : 'Cornerstone UK'}</li>
                        <li>{isAr ? 'Real estate Developer / Finance (UK, Europe)' : 'Real estate Developer / Finance (UK, Europe)'}</li>
                    </ul>

                    <p style={{ marginTop: 12 }}>{isAr ? 'نقدم تغطية جغرافية عبر المملكة، المملكة المتحدة، أوروبا وآسيا، مع علاقات دولية لتعزيز القدرات والتمويل.' : 'We operate across KSA, UK, Europe and Asia with international relations to boost capacity building and financing.'}</p>
                </section>


            </div>
        </div>
    )
}

export default About

