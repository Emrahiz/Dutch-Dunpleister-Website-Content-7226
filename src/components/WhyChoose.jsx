import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiStar, FiShield, FiTrendingUp, FiClock, FiCheckCircle, FiArrowRight, FiHome, FiAward } = FiIcons;

const WhyChoose = () => {
  const advantages = [
    {
      icon: FiStar,
      title: 'Esthetisch Voordeel',
      description: 'De naadloze afwerking van dunpleister biedt een esthetisch voordeel dat ongeëvenaard is.',
      details: 'Het gladde oppervlak creëert een gevoel van ruimte en licht in elke kamer, en is de perfecte basis voor verdere afwerking.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: FiShield,
      title: 'Duurzaamheid',
      description: 'Dunpleister is niet alleen mooi, maar ook duurzaam en efficiënt.',
      details: 'Het hecht goed op diverse ondergronden en biedt een langdurige bescherming tegen dagelijkse slijtage.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: FiTrendingUp,
      title: 'Waardevermeerdering',
      description: 'Kiezen voor dunpleister betekent kiezen voor een investering in de toekomst.',
      details: 'Het zorgt voor muren die lang mooi blijven, weinig onderhoud vereisen en de waarde van uw woning verhogen.',
      color: 'from-blue-500 to-purple-500'
    },
    {
      icon: FiClock,
      title: 'Efficiëntie',
      description: 'Snelle toepassing en korte droogtijd voor minimale overlast.',
      details: 'Uw project wordt sneller voltooid, zodat u eerder kunt genieten van uw nieuwe afwerking.',
      color: 'from-red-500 to-pink-500'
    }
  ];

  const longTermBenefits = [
    'Muren die lang mooi blijven',
    'Minimaal onderhoud vereist',
    'Verhoogt de waarde van uw woning',
    'Strakke afwerking die niet veroudert',
    'Duurzame investering voor de toekomst'
  ];

  const comparisonData = [
    { aspect: 'Duurzaamheid', dunpleister: 'Superieur', renovlies: 'Goed', winner: 'dunpleister' },
    { aspect: 'Afwerking', dunpleister: 'Naadloos', renovlies: 'Zichtbare naden', winner: 'dunpleister' },
    { aspect: 'Onderhoud', dunpleister: 'Minimaal', renovlies: 'Regelmatig', winner: 'dunpleister' },
    { aspect: 'Levensduur', dunpleister: '15-20 jaar', renovlies: '10-15 jaar', winner: 'dunpleister' },
    { aspect: 'Kosten', dunpleister: 'Investering', renovlies: 'Lager initieel', winner: 'equal' }
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
            Waarom kiezen voor dunpleister in uw nieuwbouwwoning?
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Dunpleister biedt een moderne, strakke afwerking voor uw muren en plafonds. Het is ideaal voor nieuwbouwwoningen 
            omdat het behangklaar wordt opgeleverd en een glad stucwerk garandeert.
          </p>
        </motion.div>

        {/* Main Advantages */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                <div className={`w-16 h-16 bg-gradient-to-r ${advantage.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <SafeIcon icon={advantage.icon} className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{advantage.title}</h3>
                <p className="text-gray-600 mb-4">{advantage.description}</p>
                <p className="text-sm text-gray-500">{advantage.details}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 md:p-12 mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Wat is duurzamer, dunpleister of renovlies?</h3>
            <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Hoewel zowel dunpleister als renovlies duurzame opties zijn, biedt dunpleister een hogere duurzaamheid 
              voor de wanden van een nieuwbouwwoning. Dunpleister is strak en kan scheuren en oneffenheden beter verbergen.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg">
              <thead>
                <tr className="bg-gradient-to-r from-primary-600 to-primary-700 text-white">
                  <th className="text-left py-4 px-6 rounded-tl-xl">Aspect</th>
                  <th className="text-left py-4 px-6">Dunpleister</th>
                  <th className="text-left py-4 px-6 rounded-tr-xl">Renovlies</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <motion.tr
                    key={row.aspect}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="border-b border-gray-100 last:border-b-0"
                  >
                    <td className="py-4 px-6 font-semibold text-gray-900">{row.aspect}</td>
                    <td className={`py-4 px-6 ${row.winner === 'dunpleister' ? 'bg-green-50 text-green-800 font-semibold' : ''}`}>
                      <div className="flex items-center space-x-2">
                        {row.winner === 'dunpleister' && <SafeIcon icon={FiAward} className="w-4 h-4" />}
                        <span>{row.dunpleister}</span>
                      </div>
                    </td>
                    <td className={`py-4 px-6 ${row.winner === 'renovlies' ? 'bg-green-50 text-green-800 font-semibold' : ''}`}>
                      {row.renovlies}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Long-term Benefits */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              De lange termijn voordelen van het kiezen voor dunpleister
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Kiezen voor dunpleister betekent kiezen voor een investering in de toekomst. De strakke afwerking 
              en duurzaamheid van dunpleister zijn onbetwistbare voordelen die elke woning ten goede komen.
            </p>
            
            <div className="space-y-4">
              {longTermBenefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-lg hover:from-primary-700 hover:to-primary-800 transition-all transform hover:scale-105 shadow-lg mt-8"
            >
              Plan een Consultatie
              <SafeIcon icon={FiArrowRight} className="ml-2 w-5 h-5" />
            </Link>
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
                src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Moderne woonkamer met dunpleister afwerking"
                className="w-full h-80 object-cover"
              />
            </div>
            
            {/* Floating statistics */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 border border-gray-100">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <SafeIcon icon={FiHome} className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">15-20</div>
                  <div className="text-sm text-gray-600">jaar levensduur</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 md:p-12 text-white"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Klaar om uw nieuwbouwwoning af te werken met dunpleister?
          </h3>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Ontdek waarom duizenden klanten hebben gekozen voor de superieure kwaliteit en duurzaamheid van dunpleister.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-50 transition-all transform hover:scale-105 shadow-lg"
            >
              Gratis Offerte Aanvragen
              <SafeIcon icon={FiArrowRight} className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/diensten"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-600 transition-all"
            >
              Bekijk Onze Diensten
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChoose;