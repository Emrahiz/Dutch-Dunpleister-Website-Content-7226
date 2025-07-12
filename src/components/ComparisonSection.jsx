import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCheckCircle, FiX, FiTrendingUp, FiClock, FiDollarSign, FiShield } = FiIcons;

const ComparisonSection = () => {
  const comparisons = [
    {
      title: 'Dunpleister vs Renovlies',
      description: 'Bij de keuze tussen dunpleister en renovlies voor wanden van een nieuwbouwwoning, biedt dunpleister een naadloze en duurzamere oplossing.',
      dunpleister: [
        'Naadloze afwerking',
        'Duurzamer resultaat',
        'Strakke gladde afwerking',
        'Langere levensduur',
        'Professionele uitstraling'
      ],
      alternative: [
        'Zichtbare naden mogelijk',
        'Minder duurzaam',
        'Kan loslaten over tijd',
        'Beperkte levensduur',
        'Standaard afwerking'
      ],
      image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Dunpleister Spuiten vs Machinaal Stucwerk',
      description: 'Dunpleister spuiten biedt efficiëntie en een gelijkmatige dekking, vooral op grote vlakke ondergronden.',
      dunpleister: [
        'Snellere toepassing',
        'Gelijkmatige dekking',
        'Consistente kwaliteit',
        'Ideaal voor grote oppervlakken',
        'Kosteneffectief'
      ],
      alternative: [
        'Langzamere toepassing',
        'Variabele dekking',
        'Handmatige inconsistenties',
        'Arbeidsintensief',
        'Hogere kosten'
      ],
      image: 'https://images.unsplash.com/photo-1581092795442-6d8a5f5b8b0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const benefits = [
    {
      icon: FiTrendingUp,
      title: 'Superieure Kwaliteit',
      description: 'Dunpleister levert een ongeëvenaarde gladde afwerking die de waarde van uw woning verhoogt.'
    },
    {
      icon: FiClock,
      title: 'Tijdsbesparing',
      description: 'Korte droogtijd en efficiënte toepassing zorgen voor snellere projectvoortgang.'
    },
    {
      icon: FiDollarSign,
      title: 'Kostenvoordeel',
      description: 'Minder materiaal en arbeidsuren resulteren in aanzienlijke kostenbesparingen.'
    },
    {
      icon: FiShield,
      title: 'Duurzaamheid',
      description: 'Langdurige bescherming en minimaal onderhoud maken het een slimme investering.'
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
            Dunpleister versus andere materialen
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Dunpleister biedt een superieure afwerking voor wanden van een nieuwbouwwoning. 
            Het is strak, duurzaam, en heeft een moderne uitstraling die niet makkelijk te evenaren is met andere materialen.
          </p>
        </motion.div>

        {/* Comparisons */}
        <div className="space-y-20">
          {comparisons.map((comparison, index) => (
            <motion.div
              key={comparison.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{comparison.title}</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">{comparison.description}</p>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Dunpleister advantages */}
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-4 flex items-center">
                      <SafeIcon icon={FiCheckCircle} className="w-5 h-5 mr-2" />
                      Dunpleister
                    </h4>
                    <ul className="space-y-2">
                      {comparison.dunpleister.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start space-x-2 text-green-700">
                          <SafeIcon icon={FiCheckCircle} className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Alternative disadvantages */}
                  <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-xl p-6 border border-red-200">
                    <h4 className="font-semibold text-red-800 mb-4 flex items-center">
                      <SafeIcon icon={FiX} className="w-5 h-5 mr-2" />
                      Alternatief
                    </h4>
                    <ul className="space-y-2">
                      {comparison.alternative.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start space-x-2 text-red-700">
                          <SafeIcon icon={FiX} className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={comparison.image}
                    alt={comparison.title}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-12 text-center">
            Waarom klanten kiezen voor dunpleister
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <SafeIcon icon={benefit.icon} className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8 md:p-12"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Ervaringen dunpleister bij nieuwbouw</h3>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              Vele van onze klanten zijn verrast door de transformatie die dunpleister teweegbrengt in hun nieuwbouwwoning. 
              De gladde, strakke afwerking geeft elke ruimte een moderne en verfijnde uitstraling, 
              iets wat met traditionele methodes vaak lastiger te bereiken is.
            </p>
            <div className="flex justify-center mt-8">
              <div className="flex items-center space-x-4 bg-white rounded-lg p-4 shadow-lg">
                <div className="text-3xl font-bold text-primary-600">98%</div>
                <div className="text-left">
                  <div className="font-semibold text-gray-900">Tevredenheid</div>
                  <div className="text-sm text-gray-600">Van onze klanten</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonSection;