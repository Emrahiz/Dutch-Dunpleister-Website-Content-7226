import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiLayers, FiHome, FiTool, FiCheckCircle, FiClock, FiDollarSign, FiShield, FiArrowRight } = FiIcons;

const ServicesPage = () => {
  const services = [
    {
      icon: FiLayers,
      title: 'Dunpleister Toepassing',
      description: 'Professionele toepassing van dunpleister voor nieuwbouwwoningen',
      features: [
        'Vakkundige voorbereiding van de ondergrond',
        'Toepassing in meerdere dunne lagen',
        'Perfect gladde afwerking',
        'Behangklaar resultaat',
        'Korte droogtijd'
      ],
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: 'Vanaf €25 per m²'
    },
    {
      icon: FiHome,
      title: 'Nieuwbouw Stucwerk',
      description: 'Complete stucoplossingen voor nieuwbouwprojecten',
      features: [
        'Traditioneel en modern stucwerk',
        'Plafond- en wandafwerking',
        'Hoekprofielen en detailwerk',
        'Verschillende texturen mogelijk',
        'Projectmatige aanpak'
      ],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: 'Op maat'
    },
    {
      icon: FiTool,
      title: 'Spuitpleister Technieken',
      description: 'Moderne spuittechnieken voor efficiënte toepassing',
      features: [
        'Machinaal spuiten voor grote oppervlakken',
        'Gelijkmatige dekking gegarandeerd',
        'Snellere uitvoering',
        'Consistent eindresultaat',
        'Ideaal voor commerciële projecten'
      ],
      image: 'https://images.unsplash.com/photo-1581092795442-6d8a5f5b8b0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: 'Vraag offerte aan'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Intake & Advies',
      description: 'Gratis adviesgesprek en projectbeoordeling ter plaatse'
    },
    {
      step: '02',
      title: 'Offerte',
      description: 'Gedetailleerde offerte binnen 48 uur na bezichtiging'
    },
    {
      step: '03',
      title: 'Planning',
      description: 'Afspraken maken en materialen bestellen'
    },
    {
      step: '04',
      title: 'Uitvoering',
      description: 'Vakkundige uitvoering volgens planning'
    },
    {
      step: '05',
      title: 'Oplevering',
      description: 'Eindcontrole en garantie op uitgevoerd werk'
    }
  ];

  const advantages = [
    {
      icon: FiClock,
      title: 'Snelle Uitvoering',
      description: 'Korte doorlooptijden dankzij efficiënte werkmethoden'
    },
    {
      icon: FiDollarSign,
      title: 'Scherpe Prijzen',
      description: 'Concurrerende tarieven zonder concessies aan kwaliteit'
    },
    {
      icon: FiShield,
      title: 'Kwaliteitsgarantie',
      description: 'Garantie op materiaal en uitvoering voor uw gemoedsrust'
    },
    {
      icon: FiCheckCircle,
      title: 'Ervaren Vakmensen',
      description: '15+ jaar ervaring in stucwerk en dunpleister'
    }
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
              Onze Diensten
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              Specialist in dunpleister en stucwerk voor nieuwbouwprojecten. 
              Wij bieden complete oplossingen van voorbereiding tot eindafwerking.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Onze Specialisaties
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Van traditioneel stucwerk tot moderne dunpleister technieken - 
              wij hebben de expertise voor elk nieuwbouwproject.
            </p>
          </motion.div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center">
                      <SafeIcon icon={service.icon} className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                      <p className="text-primary-600 font-medium">{service.price}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
                  >
                    Vraag Offerte Aan
                    <SafeIcon icon={FiArrowRight} className="ml-2 w-4 h-4" />
                  </Link>
                </div>

                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ons Werkproces
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Van eerste contact tot eindoplevering - zo werken wij aan uw project.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 to-primary-600 hidden lg:block"></div>

            <div className="space-y-12">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white font-bold">
                          {step.step}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                      </div>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden lg:block w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg relative z-10"></div>

                  <div className="lg:w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Waarom Kiezen Voor Ons?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Onze jarenlange ervaring en toewijding aan kwaliteit maken het verschil.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center group hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <SafeIcon icon={advantage.icon} className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{advantage.title}</h3>
                <p className="text-gray-600 text-sm">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Klaar Om Te Beginnen?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Neem contact met ons op voor een gratis offerte en persoonlijk advies voor uw project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-50 transition-all transform hover:scale-105 shadow-lg"
              >
                Gratis Offerte Aanvragen
                <SafeIcon icon={FiArrowRight} className="ml-2 w-5 h-5" />
              </Link>
              <a
                href="tel:+31612345678"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-600 transition-all"
              >
                Direct Bellen
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;