import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMail, FiPhone, FiMapPin, FiClock, FiSend, FiUser, FiHome, FiMessageSquare } = FiIcons;

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Bedankt voor uw bericht! We nemen zo spoedig mogelijk contact met u op.');
  };

  const contactInfo = [
    {
      icon: FiPhone,
      title: 'Telefoon',
      content: '+31 (0)6 12 34 56 78',
      description: 'Bereikbaar tijdens kantooruren'
    },
    {
      icon: FiMail,
      title: 'Email',
      content: 'info@dunpleister.nl',
      description: 'We reageren binnen 24 uur'
    },
    {
      icon: FiMapPin,
      title: 'Werkgebied',
      content: 'Heel Nederland',
      description: 'Gespecialiseerd in nieuwbouw'
    },
    {
      icon: FiClock,
      title: 'Openingstijden',
      content: 'Ma-Vr: 08:00 - 18:00',
      description: 'Weekend op afspraak'
    }
  ];

  const projectTypes = [
    'Nieuwbouwwoning',
    'Appartement',
    'Kantoorpand',
    'Renovatie',
    'Anders'
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Neem Contact Met Ons Op
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              Klaar om uw nieuwbouwproject te starten met dunpleister? 
              Onze experts staan klaar om u te adviseren en een gratis offerte op maat te maken.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Vraag uw gratis offerte aan
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <SafeIcon icon={FiUser} className="inline w-4 h-4 mr-2" />
                      Naam *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="Uw volledige naam"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <SafeIcon icon={FiMail} className="inline w-4 h-4 mr-2" />
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="uw@email.nl"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <SafeIcon icon={FiPhone} className="inline w-4 h-4 mr-2" />
                      Telefoon
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="+31 6 12 34 56 78"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <SafeIcon icon={FiHome} className="inline w-4 h-4 mr-2" />
                      Type Project
                    </label>
                    <select
                      name="project"
                      value={formData.project}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    >
                      <option value="">Selecteer project type</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <SafeIcon icon={FiMessageSquare} className="inline w-4 h-4 mr-2" />
                    Bericht
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="Vertel ons meer over uw project, oppervlakte, gewenste planning, etc."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold py-4 px-6 rounded-lg hover:from-primary-700 hover:to-primary-800 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center"
                >
                  <SafeIcon icon={FiSend} className="w-5 h-5 mr-2" />
                  Verstuur Aanvraag
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Contactinformatie
                </h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Heeft u vragen over dunpleister of wilt u advies voor uw nieuwbouwproject? 
                  Neem gerust contact met ons op. We helpen u graag verder met vakkundig advies en een offerte op maat.
                </p>
              </div>

              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <SafeIcon icon={info.icon} className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                        <p className="text-primary-600 font-medium">{info.content}</p>
                        <p className="text-sm text-gray-500">{info.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Why Choose Us */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-xl p-6 border border-primary-200"
              >
                <h3 className="font-semibold text-gray-900 mb-4">Waarom voor ons kiezen?</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                    <span>15+ jaar ervaring met dunpleister</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                    <span>Gespecialiseerd in nieuwbouwprojecten</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                    <span>Gratis advies en offerte</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                    <span>Garantie op al ons werk</span>
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;