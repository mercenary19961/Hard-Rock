import { Head, Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';
import Snowfall from 'react-snowfall';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';
import SmoothScroll from '@/components/SmoothScroll';

interface ServiceDetailProps {
    slug: string;
}

export default function ServiceDetail({ slug }: ServiceDetailProps) {
    const { t, i18n } = useTranslation('serviceDetail');
    const isArabic = i18n.language === 'ar';

    const serviceData = t(slug, { returnObjects: true }) as {
        name: string;
        hero: {
            title: string;
            subtitle: string;
        };
        sections: Array<{
            subtitle: string;
            description: string;
        }>;
        cta: {
            title: string;
            description: string;
            buttonText: string;
        };
    };

    const snowflake1 = useMemo(() => {
        const img = new Image();
        img.src = '/images/snowflake.webp';
        return img;
    }, []);

    const handleContactClick = () => {
        window.location.href = '/#contact';
    };

    return (
        <>
            <Head title={serviceData.name}>
                <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
                <meta httpEquiv="Pragma" content="no-cache" />
                <meta httpEquiv="Expires" content="0" />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                        })(window,document,'script','dataLayer','GTM-TJTKSH9J');`
                    }}
                />
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-TFQFC7Q08R" />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-TFQFC7Q08R');`
                    }}
                />
            </Head>

            <SmoothScroll>
                <div className="min-h-screen bg-background text-foreground font-sans antialiased selection:bg-primary/20 selection:text-primary">
                    <Snowfall
                        snowflakeCount={100}
                        color="#ffffff"
                        radius={[3.0, 16.0]}
                        speed={[0.5, 2.0]}
                        wind={[-0.5, 1.0]}
                        rotationSpeed={[-1.0, 1.0]}
                        images={[snowflake1]}
                        style={{
                            position: 'fixed',
                            width: '100vw',
                            height: '100vh',
                            zIndex: 50
                        }}
                    />
                    <noscript>
                        <iframe
                            src="https://www.googletagmanager.com/ns.html?id=GTM-TJTKSH9J"
                            height="0"
                            width="0"
                            style={{ display: 'none', visibility: 'hidden' }}
                        />
                    </noscript>
                    <Navbar />

                    <main className="relative">
                        {/* Hero Section */}
                        <section className="relative py-20 md:py-32 overflow-hidden bg-white dark:bg-black">
                            {/* Background Blurs */}
                            <div className="absolute top-20 ltr:left-20 rtl:right-20 w-40 h-40 bg-purple-500/20 dark:bg-purple-500/30 rounded-full blur-3xl" />
                            <div className="absolute bottom-20 ltr:right-20 rtl:left-20 w-48 h-48 bg-pink-500/20 dark:bg-pink-500/30 rounded-full blur-3xl" />

                            <div className="relative z-10 w-full px-6 sm:px-12 lg:px-16 xl:px-20">
                                <div className={`max-w-4xl mx-auto ${isArabic ? 'text-right' : 'text-left'}`} dir={isArabic ? 'rtl' : 'ltr'}>
                                    <motion.div
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.8 }}
                                    >
                                        <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 ${
                                            isArabic ? 'font-tajawal' : 'font-sf-pro'
                                        }`}>
                                            <span className="bg-gradient-to-r from-brand-purple to-brand-red bg-clip-text text-transparent">
                                                {serviceData.hero.title}
                                            </span>
                                        </h1>
                                        <p className={`text-lg md:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 ${
                                            isArabic ? 'font-tajawal font-normal' : 'font-poppins font-light'
                                        }`} style={{ lineHeight: '1.8' }}>
                                            {serviceData.hero.subtitle}
                                        </p>
                                    </motion.div>
                                </div>
                            </div>
                        </section>

                        {/* Content Sections */}
                        <section className="relative py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
                            <div className="relative z-10 w-full px-6 sm:px-12 lg:px-16 xl:px-20">
                                <div className="max-w-5xl mx-auto">
                                    <div className="space-y-12 md:space-y-16">
                                        {serviceData.sections.map((section, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, y: 30 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                                viewport={{ once: true, margin: "-100px" }}
                                                className={`${isArabic ? 'text-right' : 'text-left'}`}
                                                dir={isArabic ? 'rtl' : 'ltr'}
                                            >
                                                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 lg:p-10 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                                    <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-brand-purple to-brand-red bg-clip-text text-transparent ${
                                                        isArabic ? 'font-tajawal' : 'font-sf-pro'
                                                    }`}>
                                                        {section.subtitle}
                                                    </h2>
                                                    <p className={`text-base md:text-lg lg:text-xl text-gray-700 dark:text-gray-300 ${
                                                        isArabic ? 'font-tajawal font-normal' : 'font-poppins font-light'
                                                    }`} style={{ lineHeight: '1.8' }}>
                                                        {section.description}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* CTA Section */}
                        <section className="relative py-20 md:py-32 overflow-hidden bg-white dark:bg-black">
                            {/* Background Blurs */}
                            <div className="absolute top-20 ltr:left-20 rtl:right-20 w-40 h-40 bg-purple-500/20 dark:bg-purple-500/30 rounded-full blur-3xl" />
                            <div className="absolute bottom-20 ltr:right-20 rtl:left-20 w-48 h-48 bg-pink-500/20 dark:bg-pink-500/30 rounded-full blur-3xl" />

                            <div className="relative z-10 w-full px-6 sm:px-12 lg:px-16 xl:px-20">
                                <div className={`max-w-4xl mx-auto text-center`}>
                                    <motion.div
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.8 }}
                                        viewport={{ once: true }}
                                        dir={isArabic ? 'rtl' : 'ltr'}
                                    >
                                        <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 ${
                                            isArabic ? 'font-tajawal' : 'font-sf-pro'
                                        }`}>
                                            <span className="text-black dark:text-white">
                                                {serviceData.cta.title}
                                            </span>
                                        </h2>
                                        <p className={`text-lg md:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 mb-8 ${
                                            isArabic ? 'font-tajawal font-normal' : 'font-poppins font-light'
                                        }`} style={{ lineHeight: '1.8' }}>
                                            {serviceData.cta.description}
                                        </p>
                                        <button
                                            onClick={handleContactClick}
                                            className={`px-8 py-4 bg-gradient-to-r from-brand-purple to-brand-red text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 ${
                                                isArabic ? 'font-tajawal font-medium text-lg md:text-xl' : 'font-poppins font-medium text-base md:text-lg'
                                            }`}
                                        >
                                            {serviceData.cta.buttonText}
                                        </button>
                                    </motion.div>
                                </div>
                            </div>
                        </section>
                    </main>

                    <Footer />
                </div>
            </SmoothScroll>
        </>
    );
}
