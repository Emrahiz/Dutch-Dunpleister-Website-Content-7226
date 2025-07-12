import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCheckCircle, FiArrowRight, FiStar, FiTrendingUp, FiShield, FiClock } = FiIcons;

const Conclusion = () => {
  const keyPoints = [
    {
      icon: FiCheckCircle,
      title: 'Strakke Afwerking',
      description: 'Dunpleister garandeert een perfect glad en strak eindresultaat'
    },
    {
      icon: FiClock,
      title: 'Efficiënte Aanbreng',
      description: 'Snelle toepassing met korte droogtijd voor minimale overlast'
    },
    {
      icon: FiShield,
      title: 'Duurzame Kwaliteit',
      description: 'Langdurige bescherming die de tand des tijds zal doorstaan'
    },
    {
      icon: FiTrendingUp,
      title: 'Toekomstbestendig',
      description: 'Moderne techniek die past bij hedendaagse bouwtrends'
    }
  ];

  const futureReasons = [
    'Superieure, gladde afwerking zonder dikke stuclagen',
    'Snelle en efficiënte oplossing voor moderne bouw',
    'Esthetisch aantrekkelijk en tijdloos design',
    'Kosteneffectief met minimale onderhoudsvereisten',
    'Verhoogt de waarde en uitstraling van uw woning'
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Conclusion */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Conclusie
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Dunpleister is de ideale keuze voor uw nieuwbouwwoning, dankzij de combinatie van esthetische aantrekkelijkheid, 
            duurzaamheid en efficiëntie. Het biedt een moderne uitstraling met een naadloze afwerking die klaar is voor 
            elke verdere afwerking.
          </p>
        </motion.div>

        {/* Key Points Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {keyPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <SafeIcon icon={point.icon} className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{point.title}</h3>
              <p className="text-gray-600 text-sm">{point.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Unbeatable Advantages */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16 border border-gray-100"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              De onbetwiste voordelen van dunpleister voor uw nieuwbouwwoning
            </h3>
            <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Dunpleister biedt een strakke afwerking, duurzaamheid, en is een economisch verstandige keuze die bijdraagt 
              aan de schoonheid en waarde van uw woning. Met dunpleister bent u verzekerd van een gladde afwerking en 
              een moderne uitstraling die jarenlang meegaat.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <SafeIcon icon={FiStar} className="w-10 h-10 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Superieure Kwaliteit</h4>
              <p className="text-gray-600 text-sm">Ongeëvenaarde gladde afwerking</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <SafeIcon icon={FiShield} className="w-10 h-10 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Duurzame Investering</h4>
              <p className="text-gray-600 text-sm">Jarenlange schoonheid gegarandeerd</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <SafeIcon icon={FiTrendingUp} className="w-10 h-10 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Waardeverhoging</h4>
              <p className="text-gray-600 text-sm">Verhoogt de waarde van uw woning</p>
            </div>
          </div>
        </motion.div>

        {/* Summary of Core Points */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-white mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Samenvatting van de kernpunten</h3>
            <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Dunpleister staat garant voor een strak en glad eindresultaat, efficiëntie in aanbreng, en duurzaamheid 
              die de tand des tijds zal doorstaan. Het is de perfecte keuze voor iedereen die zijn nieuwbouwwoning 
              een moderne, luxueuze uitstraling wilt geven met minimale onderhoudsvereisten.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiCheckCircle} className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span>Strak en glad eindresultaat gegarandeerd</span>
              </div>
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiCheckCircle} className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span>Efficiënte aanbreng met korte droogtijd</span>
              </div>
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiCheckCircle} className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span>Duurzaamheid die jarenlang meegaat</span>
              </div>
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiCheckCircle} className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span>Moderne, luxueuze uitstraling</span>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                <div className="text-4xl font-bold text-white mb-2">98%</div>
                <div className="text-gray-300">Klanttevredenheid</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Future of Wall Finishing */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Waarom dunpleister de toekomst is van wandafwerking
          </h3>
          <p className="text-gray-600 leading-relaxed max-w-4xl mx-auto mb-8">
            De toekomst van wandafwerking ligt bij dunpleister vanwege zijn superieure, gladde afwerking zonder de noodzaak 
            voor een dikke laag stucwerk. Het biedt een snelle, efficiënte oplossing die esthetisch aantrekkelijk is 
            en past bij de moderne bouwtrends.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {futureReasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start space-x-3">
                  <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 text-sm leading-relaxed">{reason}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white">
            <h4 className="text-xl font-bold mb-4">Kies voor dunpleister en zet de standaard in wandafwerking</h4>
            <p className="mb-6 opacity-90">
              Sluit u aan bij duizenden tevreden klanten die hebben gekozen voor de superieure kwaliteit van dunpleister.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-50 transition-all transform hover:scale-105 shadow-lg"
              >
                Start Uw Project Nu
                <SafeIcon icon={FiArrowRight} className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/diensten"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-600 transition-all"
              >
                Ontdek Onze Expertise
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Conclusion;