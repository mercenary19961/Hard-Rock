import { motion } from 'framer-motion';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface FormData {
    personalName: string;
    companyName: string;
    phoneNumber: string;
    email: string;
    services: string[];
    moreDetails: string;
}

export default function ContactUs() {
    const { t, i18n } = useTranslation('contactUs');
    const isArabic = i18n.language === 'ar';

    const [formData, setFormData] = useState<FormData>({
        personalName: '',
        companyName: '',
        phoneNumber: '',
        email: '',
        services: [],
        moreDetails: '',
    });

    const [focusedField, setFocusedField] = useState<string | null>(null);

    const availableServices = [
        'Paid Ads',
        'Social Media',
        'SEO',
        'Branding',
        'PR Services',
        'Q&Q Research',
        'Software & AI Solutions',
        'Social Listening',
    ];

    const availableServicesAr = [
        'الحملات الإعلانية',
        'التواصل الاجتماعي',
        'الاستماع الرقمي',
        'البحث الكمي والنوعي',
        'العلاقات العامة',
        'العلامة التجارية',
        'تحسين محركات البحث',
        'حلول البرمجيات والذكاء الاصطناعي',
    ];

    const services = isArabic ? availableServicesAr : availableServices;

    const handleServiceToggle = (service: string) => {
        setFormData((prev) => {
            const isSelected = prev.services.includes(service);
            const newServices = isSelected
                ? prev.services.filter((s) => s !== service)
                : [service, ...prev.services];
            return { ...prev, services: newServices };
        });
    };

    const isFormValid = () => {
        return (
            formData.personalName.trim() !== '' &&
            formData.phoneNumber.trim() !== '' &&
            formData.email.trim() !== '' &&
            formData.services.length > 0
        );
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isFormValid()) {
            console.log('Form submitted:', formData);
            // Handle form submission
        }
    };

    return (
        <section
            id="contact-us"
            className="relative py-20 md:py-32 overflow-hidden bg-white dark:bg-black"
        >
            {/* Background Blurs */}
            <div className="absolute top-20 ltr:left-20 rtl:right-20 w-40 h-40 bg-purple-500/20 dark:bg-purple-500/30 rounded-full blur-3xl" />
            <div className="absolute bottom-40 ltr:right-20 rtl:left-20 w-48 h-48 bg-pink-500/20 dark:bg-pink-500/30 rounded-full blur-3xl" />
            <div className="absolute top-1/2 ltr:right-1/3 rtl:left-1/3 w-32 h-32 bg-red-500/15 dark:bg-red-500/25 rounded-full blur-3xl" />

            <div className="relative z-10 w-full px-8 sm:px-12 lg:px-16 xl:px-20">
                {/* Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className={`text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-16 md:mb-20 ${
                        isArabic ? 'font-tajawal text-right' : 'font-sf-pro text-left'
                    }`}
                >
                    {isArabic ? (
                        <>
                            <span className="text-black dark:text-white">تواصـــــل </span>
                            <span className="bg-gradient-to-r from-brand-purple to-brand-red bg-clip-text text-transparent">
                                معنا
                            </span>
                        </>
                    ) : (
                        <>
                            <span className="text-black dark:text-white">CONTACT </span>
                            <span className="bg-gradient-to-r from-brand-purple to-brand-red bg-clip-text text-transparent">
                                US
                            </span>
                        </>
                    )}
                </motion.h1>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Left Column - Form */}
                    <motion.div
                        initial={{ opacity: 0, x: isArabic ? 50 : -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className={isArabic ? 'lg:order-2' : 'lg:order-1'}
                    >
                        <form onSubmit={handleSubmit} className="space-y-8">
                            {/* Personal Name */}
                            <div className="relative">
                                <input
                                    type="text"
                                    value={formData.personalName}
                                    onChange={(e) =>
                                        setFormData({ ...formData, personalName: e.target.value })
                                    }
                                    onFocus={() => setFocusedField('personalName')}
                                    onBlur={() =>
                                        !formData.personalName && setFocusedField(null)
                                    }
                                    className={`w-full bg-transparent py-3 px-0 outline-none transition-all duration-300 ${
                                        isArabic
                                            ? 'text-right font-tajawal font-normal'
                                            : 'text-left font-sf-pro-expanded font-thin'
                                    } text-white text-lg`}
                                    style={{
                                        border: 'none',
                                        borderTop: 'none',
                                        borderLeft: 'none',
                                        borderRight: 'none',
                                        borderBottom: focusedField === 'personalName'
                                            ? '2px solid #c93727'
                                            : '2px solid #704399',
                                        outline: 'none',
                                        boxShadow: 'none',
                                    }}
                                />
                                <label
                                    className={`absolute transition-all duration-300 pointer-events-none ${
                                        focusedField === 'personalName' || formData.personalName
                                            ? isArabic
                                                ? '-top-5 right-0 text-sm'
                                                : '-top-5 left-0 text-sm'
                                            : isArabic
                                                ? 'top-3 right-0'
                                                : 'top-3 left-0'
                                    } ${
                                        isArabic
                                            ? 'font-tajawal font-normal text-right'
                                            : 'font-sf-pro-expanded font-thin text-left'
                                    } ${
                                        focusedField === 'personalName' || formData.personalName
                                            ? 'text-white'
                                            : 'text-gray-400'
                                    } text-lg`}
                                >
                                    {isArabic ? 'الاســــــــــــم :' : 'PERSONAL NAME :'}
                                </label>
                            </div>

                            {/* Company Name */}
                            <div className="relative">
                                <input
                                    type="text"
                                    value={formData.companyName}
                                    onChange={(e) =>
                                        setFormData({ ...formData, companyName: e.target.value })
                                    }
                                    onFocus={() => setFocusedField('companyName')}
                                    onBlur={() =>
                                        !formData.companyName && setFocusedField(null)
                                    }
                                    className={`w-full bg-transparent py-3 px-0 outline-none transition-all duration-300 ${
                                        isArabic
                                            ? 'text-right font-tajawal font-normal'
                                            : 'text-left font-sf-pro-expanded font-thin'
                                    } text-white text-lg`}
                                    style={{
                                        border: 'none',
                                        borderTop: 'none',
                                        borderLeft: 'none',
                                        borderRight: 'none',
                                        borderBottom: focusedField === 'companyName'
                                            ? '2px solid #c93727'
                                            : '2px solid #704399',
                                        outline: 'none',
                                        boxShadow: 'none',
                                    }}
                                />
                                <label
                                    className={`absolute transition-all duration-300 pointer-events-none ${
                                        focusedField === 'companyName' || formData.companyName
                                            ? isArabic
                                                ? '-top-5 right-0 text-sm'
                                                : '-top-5 left-0 text-sm'
                                            : isArabic
                                                ? 'top-3 right-0'
                                                : 'top-3 left-0'
                                    } ${
                                        isArabic
                                            ? 'font-tajawal font-normal text-right'
                                            : 'font-sf-pro-expanded font-thin text-left'
                                    } ${
                                        focusedField === 'companyName' || formData.companyName
                                            ? 'text-white'
                                            : 'text-gray-400'
                                    } text-lg`}
                                >
                                    {isArabic ? 'اســـــــــم الشــــركـــة :' : 'COMPANY NAME :'}
                                </label>
                            </div>

                            {/* Phone Number */}
                            <div className="relative">
                                <input
                                    type="tel"
                                    value={formData.phoneNumber}
                                    onChange={(e) =>
                                        setFormData({ ...formData, phoneNumber: e.target.value })
                                    }
                                    onFocus={() => setFocusedField('phoneNumber')}
                                    onBlur={() =>
                                        !formData.phoneNumber && setFocusedField(null)
                                    }
                                    className={`w-full bg-transparent py-3 px-0 outline-none transition-all duration-300 ${
                                        isArabic
                                            ? 'text-right font-tajawal font-normal'
                                            : 'text-left font-sf-pro-expanded font-thin'
                                    } text-white text-lg`}
                                    style={{
                                        border: 'none',
                                        borderTop: 'none',
                                        borderLeft: 'none',
                                        borderRight: 'none',
                                        borderBottom: focusedField === 'phoneNumber'
                                            ? '2px solid #c93727'
                                            : '2px solid #704399',
                                        outline: 'none',
                                        boxShadow: 'none',
                                    }}
                                />
                                <label
                                    className={`absolute transition-all duration-300 pointer-events-none ${
                                        focusedField === 'phoneNumber' || formData.phoneNumber
                                            ? isArabic
                                                ? '-top-5 right-0 text-sm'
                                                : '-top-5 left-0 text-sm'
                                            : isArabic
                                                ? 'top-3 right-0'
                                                : 'top-3 left-0'
                                    } ${
                                        isArabic
                                            ? 'font-tajawal font-normal text-right'
                                            : 'font-sf-pro-expanded font-thin text-left'
                                    } ${
                                        focusedField === 'phoneNumber' || formData.phoneNumber
                                            ? 'text-white'
                                            : 'text-gray-400'
                                    } text-lg`}
                                >
                                    {isArabic ? 'رقـــــم الهـــاتــف :' : 'PHONE NUMBER :'}
                                </label>
                            </div>

                            {/* Email */}
                            <div className="relative">
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) =>
                                        setFormData({ ...formData, email: e.target.value })
                                    }
                                    onFocus={() => setFocusedField('email')}
                                    onBlur={() => !formData.email && setFocusedField(null)}
                                    className={`w-full bg-transparent py-3 px-0 outline-none transition-all duration-300 ${
                                        isArabic
                                            ? 'text-right font-tajawal font-normal'
                                            : 'text-left font-sf-pro-expanded font-thin'
                                    } text-white text-lg`}
                                    style={{
                                        border: 'none',
                                        borderTop: 'none',
                                        borderLeft: 'none',
                                        borderRight: 'none',
                                        borderBottom: focusedField === 'email'
                                            ? '2px solid #c93727'
                                            : '2px solid #704399',
                                        outline: 'none',
                                        boxShadow: 'none',
                                    }}
                                />
                                <label
                                    className={`absolute transition-all duration-300 pointer-events-none ${
                                        focusedField === 'email' || formData.email
                                            ? isArabic
                                                ? '-top-5 right-0 text-sm'
                                                : '-top-5 left-0 text-sm'
                                            : isArabic
                                                ? 'top-3 right-0'
                                                : 'top-3 left-0'
                                    } ${
                                        isArabic
                                            ? 'font-tajawal font-normal text-right'
                                            : 'font-sf-pro-expanded font-thin text-left'
                                    } ${
                                        focusedField === 'email' || formData.email
                                            ? 'text-brand-purple dark:text-brand-red'
                                            : 'text-gray-500 dark:text-gray-400'
                                    } text-lg`}
                                >
                                    {isArabic ? 'البريد الإلكترونــــــي :' : 'E-MAIL :'}
                                </label>
                            </div>

                            {/* Submit Button */}
                            <div className="flex justify-center">
                                <button
                                    type="submit"
                                    disabled={!isFormValid()}
                                    className={`w-2/4 py-6 px-8 rounded-full text-2xl transition-all duration-300 ${
                                        isFormValid()
                                            ? 'bg-gradient-to-r from-brand-purple to-brand-red text-white hover:shadow-lg hover:shadow-brand-purple/30 cursor-pointer'
                                            : 'bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-500 cursor-not-allowed'
                                    } ${
                                        isArabic
                                            ? 'font-tajawal font-extrabold'
                                            : 'font-poppins font-bold'
                                    }`}
                                >
                                    {isArabic ? 'قــــــــدّم' : 'SUBMIT'}
                                </button>
                            </div>
                        </form>
                    </motion.div>

                    {/* Right Column - Services */}
                    <motion.div
                        initial={{ opacity: 0, x: isArabic ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className={`${isArabic ? 'lg:order-1' : 'lg:order-2'} relative`}
                    >
                        {/* Background Image - Show left half for English, right half for Arabic */}
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                            <div
                                className="w-full h-full bg-no-repeat"
                                style={{
                                    backgroundImage: 'url(/images/contact-us.png)',
                                    backgroundSize: '200%',
                                    backgroundPosition: isArabic ? 'left center' : 'right center',
                                    opacity: 0.6,
                                }}
                            />
                        </div>
                        {/* Services Section */}
                        <div className="mb-12 relative z-10">
                            <h2
                                className={`text-2xl md:text-3xl mb-6 ${
                                    isArabic
                                        ? 'font-tajawal font-normal text-right'
                                        : 'font-sf-pro-expanded font-light text-left'
                                } text-black dark:text-white`}
                            >
                                {isArabic ? 'الخدمات المهتم بها' : 'Services you looking for'}
                            </h2>
                            <div className="flex flex-wrap gap-3">
                                {services.map((service) => {
                                    const isSelected = formData.services.includes(service);
                                    return (
                                        <span
                                            key={service}
                                            onClick={() => handleServiceToggle(service)}
                                            className={`cursor-pointer transition-all duration-300 ${
                                                isArabic
                                                    ? 'font-tajawal font-extralight'
                                                    : 'font-poppins font-extralight'
                                            } ${
                                                isSelected
                                                    ? 'text-white'
                                                    : 'text-gray-400 hover:text-gray-300'
                                            }`}
                                        >
                                            {service}
                                            {isSelected && <span className={isArabic ? 'mr-2' : 'ml-2'}>●</span>}
                                        </span>
                                    );
                                })}
                            </div>
                        </div>

                        {/* More Details Section */}
                        <div className="relative z-10">
                            <h2
                                className={`text-2xl md:text-3xl mb-6 ${
                                    isArabic
                                        ? 'font-tajawal font-normal text-right'
                                        : 'font-sf-pro-expanded font-light text-left'
                                } text-black dark:text-white`}
                            >
                                {isArabic ? 'ملاحظـــــــــات' : 'More Details'}
                            </h2>
                            <div
                                className={`border-2 rounded-3xl p-6 ${
                                    focusedField === 'moreDetails'
                                        ? 'border-brand-purple dark:border-brand-red'
                                        : 'border-gray-300 dark:border-gray-700'
                                } transition-all duration-300`}
                            >
                                <textarea
                                    value={formData.moreDetails}
                                    onChange={(e) =>
                                        setFormData({ ...formData, moreDetails: e.target.value })
                                    }
                                    onFocus={() => setFocusedField('moreDetails')}
                                    onBlur={() => setFocusedField(null)}
                                    rows={6}
                                    placeholder={
                                        isArabic
                                            ? 'اريد ملعقة كبيرة من العسل\nwelcome to jordan any time'
                                            : 'اريد ملعقة كبيرة من العسل\nwelcome to jordan any time'
                                    }
                                    className={`w-full bg-transparent outline-none resize-none ${
                                        isArabic
                                            ? 'font-tajawal font-light text-right'
                                            : 'font-poppins font-light text-left'
                                    } text-black dark:text-white text-base placeholder-gray-400 dark:placeholder-gray-500`}
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
