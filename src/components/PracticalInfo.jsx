import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiClock, FiTool, FiDollarSign, FiHelpCircle, FiCheckCircle, FiAlertCircle } = FiIcons;

const PracticalInfo = () => {
  const practicalTips = [
    {
      icon: FiClock,
      title: 'Droogtijd en Onderhoud',
      items: [
        {
          question: 'Wat is de droogtijd van dunpleister?',
          answer: 'De droogtijd van dunpleister is relatief kort. Gemiddeld genomen moet u rekenen op 2 tot 3 dagen voordat de dunpleister volledig droog is en klaar voor verdere afwerking.'
        },
        {
          question: 'Hoe onderhoud ik mijn dunpleistermuren?',
          answer: 'Het onderhoud is eenvoudig. Regelmatig stof afnemen met een zachte doek en vlekken voorzichtig verwijderen met een licht vochtige doek is voldoende. Vermijd agressieve schoonmaakmiddelen.'
        }
      ]
    },
    {
      icon: FiDollarSign,
      title: 'Kostenbesparing en Budget',
      items: [
        {
          question: 'Hoe kan ik besparen op dunpleister?',
          answer: 'U kunt besparen door voorbereidende werkzaamheden zelf uit te voeren, zoals het schoonmaken van de muren. Daarnaast bieden wij scherpe tarieven en pakketten afgestemd op uw budget.'
        },
        {
          question: 'Wat kost dunpleister per vierkante meter?',
          answer: 'De kosten zijn afhankelijk van verschillende factoren zoals de ondergrond en totale oppervlakte. Voor een nauwkeurige schatting raden we aan contact met ons op te nemen.'
        }
      ]
    },
    {
      icon: FiTool,
      title: 'Toepassing en Techniek',
      items: [
        {
          question: 'Is het mogelijk om dunpleister zelf aan te brengen?',
          answer: 'Het is mogelijk, maar wij adviseren dit over te laten aan een professional voor het beste resultaat. Onze specialisten hebben de ervaring en het gereedschap voor vakkundige toepassing.'
        },
        {
          question: 'Hoe wordt dunpleister aangebracht?',
          answer: 'Dunpleister wordt aangebracht in dunne lagen om een egaal oppervlak te creëren. Met speciale gereedschappen strijken we het materiaal vlak en recht voor een strakke afwerking.'
        }
      ]
    }
  ];

  const maintenanceTips = [
    {
      icon: FiCheckCircle,
      title: 'Dagelijks Onderhoud',
      description: 'Stof regelmatig af met een zachte, droge doek',
      color: 'text-green-600 bg-green-50 border-green-200'
    },
    {
      icon: FiAlertCircle,
      title: 'Vlekken Verwijderen',
      description: 'Gebruik een licht vochtige doek, vermijd agressieve middelen',
      color: 'text-yellow-600 bg-yellow-50 border-yellow-200'
    },
    {
      icon: FiTool,
      title: 'Professionele Controle',
      description: 'Laat jaarlijks controleren door een specialist',
      color: 'text-blue-600 bg-blue-50 border-blue-200'
    }
  ];

  const costFactors = [
    { factor: 'Oppervlakte', impact: 'Hoog', description: 'Grotere oppervlakken zijn vaak voordeliger per m²' },
    { factor: 'Ondergrond', impact: 'Gemiddeld', description: 'Voorbewerking kan nodig zijn bij oneffenheden' },
    { factor: 'Toegankelijkheid', impact: 'Laag', description: 'Moeilijk bereikbare plekken kunnen extra kosten met zich meebrengen' },
    { factor: 'Timing', impact: 'Laag', description: 'Buiten het seizoen kan voordeliger zijn' }
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
            Praktische informatie rondom dunpleister
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Om het beste resultaat te garanderen, is het belangrijk om de juiste voorbereiding en nazorg voor dunpleister in acht te nemen. 
            Ons team staat klaar om u te adviseren en te begeleiden bij elke stap.
          </p>
        </motion.div>

        {/* FAQ Sections */}
        <div className="space-y-12 mb-20">
          {practicalTips.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: sectionIndex * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
            >
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
                  <SafeIcon icon={section.icon} className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{section.title}</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {section.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: itemIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-xl p-6 border border-primary-200"
                  >
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-start">
                      <SafeIcon icon={FiHelpCircle} className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                      {item.question}
                    </h4>
                    <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Maintenance Tips */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Onderhoudstips voor dunpleister</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {maintenanceTips.map((tip, index) => (
              <motion.div
                key={tip.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`rounded-xl p-6 border-2 ${tip.color}`}
              >
                <SafeIcon icon={tip.icon} className="w-8 h-8 mb-4" />
                <h4 className="font-semibold mb-2">{tip.title}</h4>
                <p className="text-sm">{tip.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Cost Factors */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Kostenfactoren dunpleister</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Factor</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Impact</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Beschrijving</th>
                </tr>
              </thead>
              <tbody>
                {costFactors.map((factor, index) => (
                  <motion.tr
                    key={factor.factor}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="border-b border-gray-100 hover:bg-gray-50"
                  >
                    <td className="py-3 px-4 font-medium text-gray-900">{factor.factor}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        factor.impact === 'Hoog' ? 'bg-red-100 text-red-800' :
                        factor.impact === 'Gemiddeld' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {factor.impact}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-gray-600">{factor.description}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PracticalInfo;