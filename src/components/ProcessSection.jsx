import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiSearch, FiTool, FiShield, FiBox, FiLayers, FiClock, FiEdit3, FiTrash2, FiCheckCircle, FiEye } = FiIcons;

const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  const processSteps = [
    {
      icon: FiSearch,
      title: 'Controle van de ondergrond',
      description: 'We beginnen met een grondige controle van de ondergrond om oneffenheden groter dan 2 mm te identificeren.',
      details: 'Deze worden genoteerd en voorbereid voor correctie om een optimale hechting en afwerking van de dunpleister te garanderen.',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: FiTool,
      title: 'Afsteken van de wanden',
      description: 'Daarna steken we de wanden af om losse deeltjes te verwijderen.',
      details: 'Dit zorgt voor een schoon en effen oppervlak dat klaar is voor de dunpleister.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: FiShield,
      title: 'Afplakken van kwetsbare delen',
      description: 'Kwetsbare delen zoals raamkozijnen, deuren en vloeren worden zorgvuldig afgeplakt.',
      details: 'Dit beschermt ze tegen spetters en andere beschadigingen tijdens het aanbrengen van de dunpleister.',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: FiBox,
      title: 'Plaatsen van hoekprofielen',
      description: 'In nieuwbouwwoningen plaatsen we hoekprofielen om scherpe en duurzame hoeken te garanderen.',
      details: 'Dit verhoogt de kwaliteit en duurzaamheid van het eindresultaat aanzienlijk.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: FiLayers,
      title: 'Eerste laag dunpleister',
      description: 'De eerste laag dunpleister wordt nauwkeurig aangebracht om een egale basis te vormen.',
      details: 'Deze laag zorgt voor de basis van de gladde afwerking die dunpleister kenmerkt.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: FiLayers,
      title: 'Tweede laag dunpleister',
      description: 'Na voldoende uitgehard te zijn, brengen we een tweede laag aan.',
      details: 'Deze laag verfijnt de afwerking en zorgt voor een perfect glad oppervlak.',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: FiClock,
      title: 'Droogtijd',
      description: 'De droogtijd van dunpleister is relatief kort, maar essentieel voor de beste resultaten.',
      details: 'We zorgen ervoor dat de pleister volledig droog is voordat we verder gaan.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: FiEdit3,
      title: 'Schuren van de ondergrond',
      description: 'Na het drogen schuren we de wanden glad om eventuele kleine oneffenheden te verwijderen.',
      details: 'Dit zorgt voor een perfect gladde afwerking, klaar voor verdere decoratie.',
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: FiTrash2,
      title: 'Opruimen',
      description: 'We verwijderen alle afplaktape en beschermingsmaterialen.',
      details: 'Uw ruimte blijft netjes en stofvrij achter, zodat u direct kunt genieten van uw nieuw afgewerkte muren.',
      color: 'from-gray-500 to-gray-600'
    },
    {
      icon: FiEye,
      title: 'Laatste controle en afwerking',
      description: 'Een grondige controle van de wanden om zeker te zijn van een strak en egaal resultaat.',
      details: 'Indien nodig voeren we kleine correcties uit en adviseren over verdere afwerking.',
      color: 'from-teal-500 to-teal-600'
    }
  ];

  return (
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
            Het aanbrengen van dunpleister
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Het proces van het aanbrengen van dunpleister vereist vakmanschap en precisie om een perfecte afwerking te garanderen. 
            Onze gespecialiseerde technieken zorgen voor een glad en duurzaam resultaat.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Process Steps */}
          <div className="space-y-4">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                  activeStep === index
                    ? 'border-primary-500 bg-primary-50 shadow-lg'
                    : 'border-gray-200 bg-white hover:border-primary-300 hover:shadow-md'
                }`}
                onClick={() => setActiveStep(index)}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${step.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <SafeIcon icon={step.icon} className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-sm font-semibold text-primary-600">Stap {index + 1}</span>
                      {activeStep === index && (
                        <SafeIcon icon={FiCheckCircle} className="w-4 h-4 text-green-500" />
                      )}
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Active Step Details */}
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:sticky lg:top-8"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className={`w-16 h-16 bg-gradient-to-r ${processSteps[activeStep].color} rounded-2xl flex items-center justify-center mb-6`}>
                <SafeIcon icon={processSteps[activeStep].icon} className="w-8 h-8 text-white" />
              </div>
              
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-sm font-semibold text-primary-600">Stap {activeStep + 1}</span>
                <div className="h-1 flex-1 bg-gray-200 rounded">
                  <div 
                    className="h-1 bg-gradient-to-r from-primary-500 to-primary-600 rounded transition-all duration-500"
                    style={{ width: `${((activeStep + 1) / processSteps.length) * 100}%` }}
                  ></div>
                </div>
                <span className="text-sm text-gray-500">{activeStep + 1}/{processSteps.length}</span>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {processSteps[activeStep].title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {processSteps[activeStep].description}
              </p>
              
              <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-lg p-4 border-l-4 border-primary-500">
                <p className="text-gray-700 leading-relaxed">
                  {processSteps[activeStep].details}
                </p>
              </div>

              <div className="flex justify-between mt-6">
                <button
                  onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                  disabled={activeStep === 0}
                  className="px-4 py-2 text-primary-600 hover:bg-primary-50 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Vorige Stap
                </button>
                <button
                  onClick={() => setActiveStep(Math.min(processSteps.length - 1, activeStep + 1))}
                  disabled={activeStep === processSteps.length - 1}
                  className="px-4 py-2 bg-primary-600 text-white hover:bg-primary-700 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Volgende Stap
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Veelgestelde vragen</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <h4 className="font-semibold text-gray-900 mb-3">Kan dunpleister direct worden overgeschilderd?</h4>
              <p className="text-gray-600">
                Ja, dunpleister kan meestal binnen 24 uur na aanbrengen overgeschilderd worden. 
                We adviseren echter om de droogtijd te respecteren voor het mooiste resultaat.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <h4 className="font-semibold text-gray-900 mb-3">Op welke ondergronden kan dunpleister worden aangebracht?</h4>
              <p className="text-gray-600">
                Dunpleister kan op verschillende ondergronden worden aangebracht, zolang deze schoon, droog en stabiel zijn. 
                Goede voorbereiding is essentieel voor optimale hechting.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;