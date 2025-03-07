import React from 'react';
import { Helmet, HelmetProvider } from "react-helmet-async";
import { FaBook, FaBullseye, FaCalendarAlt, FaQuoteRight, FaStar, FaUsers, FaUserTie } from 'react-icons/fa';
import { aboutData } from '../constants/aboutData';

const About = () => {
  return (
    <section className="max-w-[1144px] w-[95%] mx-auto py-8">
      <HelmetProvider>
        <Helmet>
          <title>মাদ্রাসা সম্পর্কে</title>
        </Helmet>
      </HelmetProvider>
      <h2 className="text-2xl font-bold text-center mb-6 whitespace-nowrap">মাদ্রাসার সম্পর্কে বিস্তারিত</h2>

      {/* প্রতিষ্ঠাতা */}
      <div className="p-6 rounded-lg shadow-2xl mb-8">
        <h3 className="text-2xl font-semibold flex items-center mb-4">
          <FaUserTie className="mr-2" /> মাদ্রাসার প্রতিষ্ঠাতা
        </h3>
        <div className="p-4 rounded-lg">
          <h4 className="text-xl font-semibold">{aboutData.founder.name}</h4>
          <p className="mt-2 leading-relaxed">{aboutData.founder.description}</p>
        </div>
      </div>

      {/* ভূমিকা */}
      <div className="p-6 rounded-lg shadow-2xl mb-8">
        <h3 className="text-2xl font-semibold flex items-center mb-4">
          <FaBook className="mr-2" /> ভূমিকা
        </h3>
        <p className="leading-relaxed">{aboutData.introduction}</p>
      </div>

      {/* এক নজরে জামিয়া হুসাইনিয়া */}
      <div className="p-6 rounded-lg shadow-2xl mb-8">
        <h3 className="text-2xl font-semibold flex items-center mb-4">
          <FaStar className="mr-2" /> এক নজরে জামিয়া হুসাইনিয়া
        </h3>
        <ul className="list-disc list-inside">
          {aboutData.overview.map((item, index) => (
            <ol key={index} className="mt-2">
              <strong>{item.icon} {item.label}: </strong>
              {Array.isArray(item.value) ? (
                <ul className="list-disc list-inside ml-6">
                  {item.value.map((fund, idx) => (
                    <li key={idx}>{fund}</li>
                  ))}
                </ul>
              ) : (
                item.value
              )}
            </ol>
          ))}
        </ul>
      </div>

      {/* লক্ষ্য ও উদ্দেশ্য */}
      <div className="p-6 rounded-lg shadow-2xl mb-8">
        <h3 className="text-2xl font-semibold flex items-center mb-4">
          <FaBullseye className="mr-2" /> লক্ষ্য ও উদ্দেশ্য
        </h3>
        <ul className="list-disc list-inside">
          {aboutData.goals.map((goal, index) => (
            <ol key={index} className="mt-2">{goal}</ol>
          ))}
        </ul>
      </div>

      {/* তারবিয়ত বা ছাত্রগঠন বিভাগ */}
      <div className="p-6 rounded-lg shadow-2xl mb-8">
        <h3 className="text-2xl font-semibold flex items-center mb-4">
          <FaUsers className="mr-2" /> তারবিয়ত বা ছাত্রগঠন বিভাগ
        </h3>
        <ul className="list-disc list-inside">
          {aboutData.tarbiyat.map((item, index) => (
            <ol key={index} className="mt-2">{item}</ol>
          ))}
        </ul>
      </div>

      {/* বৈশিষ্ট্যসমূহ */}
      <div className="p-6 rounded-lg shadow-2xl mb-8">
        <h3 className="text-2xl font-semibold flex items-center mb-4">
          <FaStar className="mr-2" /> বৈশিষ্ট্যসমূহ
        </h3>
        <ul className="list-disc list-inside">
          {aboutData.features.map((feature, index) => (
            <ol key={index} className="mt-2">{feature}</ol>
          ))}
        </ul>
      </div>

      {/* ভবিষ্যৎ শিক্ষা পরিকল্পনা */}
      <div className="p-6 rounded-lg shadow-2xl mb-8">
        <h3 className="text-2xl font-semibold flex items-center mb-4">
          <FaCalendarAlt className="mr-2 " /> ভবিষ্যৎ শিক্ষা পরিকল্পনা
        </h3>
        <ul className="list-disc list-inside">
          {aboutData.futurePlans.education.map((plan, index) => (
            <ol key={index} className="mt-2">{plan}</ol>
          ))}
        </ul>
      </div>

      {/* ভবিষ্যৎ উন্নয়ন পরিকল্পনা */}
      <div className="p-6 rounded-lg shadow-2xl mb-8">
        <h3 className="text-2xl font-semibold flex items-center mb-4">
          <FaCalendarAlt className="mr-2" /> ভবিষ্যৎ উন্নয়ন পরিকল্পনা
        </h3>
        <ul className="list-disc list-inside">
          {aboutData.futurePlans.development.map((plan, index) => (
            <ol key={index} className="mt-2">{plan}</ol>
          ))}
        </ul>
      </div>

      {/* বাণী */}
      <div className="p-6 rounded-lg shadow-2xl">
        <h3 className="text-2xl font-semibold flex items-center mb-4">
          <FaQuoteRight className="mr-2" /> বাণী
        </h3>
        <div className="leading-relaxed">
          <p>{aboutData.quote.text}</p>
          <br />
          <p>{aboutData.quote.texts}</p>
          <br />
          <b>— {aboutData.quote.author}</b>
        </div>
      </div>
    </section>
  );
};

export default About;