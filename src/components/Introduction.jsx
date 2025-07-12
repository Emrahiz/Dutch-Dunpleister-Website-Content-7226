import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiLayers, FiClock, FiDollarSign, FiTrendingUp } = FiIcons;

const Introduction = () => {
  const features = [
    {
      icon: FiLayers,
      title: 'Dunne Laag Techniek',
      description: 'Speciale dunne pleisterlaag voor nieuwbouwwoningen met relatief vlakke muren.'
    },
    {
      icon: FiClock,
      title: 'Snelle Droogtijd',
      description: 'Kortere droogtijd dan traditioneel stucwerk voor snellere projectvoortgang.'
    },
    {
      icon: FiDollarSign,
      title: 'Kosteneffectief',
      description: 'Minder materiaal en tijd nodig, resulterend in lagere kosten.'
    },
    {
      icon: FiTrendingUp,
      title: 'Superieure Kwaliteit',
      description: 'Uitzonderlijk gladde afwerking die bijdraagt aan de esthetiek van uw interieur.'
    }
  ];

  return (
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
            Een introductie tot dunpleister
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Dunpleister is een moderne stucmethode die een dunne, gladde laag op uw muren aanbrengt. 
            Het is speciaal ontworpen voor nieuwbouwwoningen waar de muren vaak al relatief vlak en zonder grote oneffenheden zijn.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <SafeIcon icon={feature.icon} className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Wat is dunpleister?</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Dunpleister is een fijne, dunne pleisterlaag die op de muren wordt aangebracht om een gladde afwerking te creëren. 
              Deze techniek is revolutionair omdat het een behangklaar stucwerk oplevert dat direct klaar is voor verdere afwerking.
            </p>
            
            <div className="space-y-4">
              <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-green-800 mb-2">De voordelen van dunpleister</h4>
                <p className="text-green-700">
                  Dunpleister zorgt voor een behangklaar stucwerk dat direct klaar is voor verdere afwerking. 
                  De snellere droogtijd zorgt ervoor dat uw renovatieproject sneller kan vorderen.
                </p>
              </div>
              
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Verschil met traditioneel stucwerk</h4>
                <p className="text-blue-700">
                  Traditioneel stucwerk vereist dikke lagen en meer tijd. Dunpleister wordt in dunnere lagen aangebracht 
                  en hecht efficiënt aan vlakke ondergronden, wat resulteert in een kosteneffectievere oplossing.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Dunpleister toepassing"
                className="w-full h-80 object-cover"
              />
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">2-3</div>
                <div className="text-sm text-gray-600">dagen droogtijd</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;