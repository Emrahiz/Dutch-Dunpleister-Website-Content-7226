import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiUsers, FiAward, FiTrendingUp, FiShield, FiCheckCircle, FiArrowRight, FiStar, FiClock } = FiIcons;

const AboutPage = () => {
  const stats = [
    { number: '15+', label: 'Jaar Ervaring', icon: FiClock },
    { number: '500+', label: 'Tevreden Klanten', icon: FiUsers },
    { number: '98%', label: 'Klanttevredenheid', icon: FiStar },
    { number: '100%', label: 'Garantie', icon: FiShield }
  ];

  const values = [
    {
      icon: FiAward,
      title: 'Kwaliteit',
      description: 'Wij streven naar perfectie in elke laag dunpleister die we aanbrengen. Kwaliteit staat bij ons voorop.'
    },
    {
      icon: FiUsers,
      title: 'Vakmanschap',
      description: 'Onze ervaren vakmensen hebben jarenlange expertise in stucwerk en dunpleister technieken.'
    },
    {
      icon: FiTrendingUp,
      title: 'Innovatie',
      description: 'We blijven investeren in nieuwe technieken en materialen om het beste resultaat te leveren.'
    },
    {
      icon: FiShield,
      title: 'Betrouwbaarheid',
      description: 'Op ons kunt u rekenen. Afspraken worden nagekomen en kwaliteit wordt gegarandeerd.'
    }
  ];

  const teamMembers = [
    {
      name: 'Jan van der Berg',
      role: 'Eigenaar & Hoofdstukadoor',
      experience: '20 jaar ervaring',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      specialties: ['Dunpleister', 'Traditioneel stucwerk', 'Projectleiding']
    },
    {
      name: 'Piet Janssen',
      role: 'Senior Stukadoor',
      experience: '15 jaar ervaring',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      specialties: ['Spuitpleister', 'Nieuwbouw', 'Detailafwerking']
    },
    {
      name: 'Kees de Vries',
      role: 'Stukadoor',
      experience: '10 jaar ervaring',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      specialties: ['Dunpleister', 'Renovatie', 'Herstelwerk']
    }
  ];

  const milestones = [
    { year: '2008', event: 'Bedrijf opgericht door Jan van der Berg' },
    { year: '2012', event: 'Specialisatie in dunpleister technieken' },
    { year: '2016', event: '250e project succesvol afgerond' },
    { year: '2020', event: 'Investering in moderne spuitapparatuur' },
    { year: '2024', event: 'Meer dan 500 tevreden klanten' }
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
              Over Ons
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              Al meer dan 15 jaar zijn wij dé specialist in dunpleister en stucwerk voor nieuwbouwprojecten. 
              Vakmanschap, kwaliteit en klanttevredenheid staan bij ons centraal.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={stat.icon} className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Ons Verhaal</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                In 2008 begon Jan van der Berg met een simpele missie: het leveren van hoogwaardige stucwerkdiensten 
                voor nieuwbouwprojecten. Wat begon als een eenmanszaak is uitgegroeid tot een gerespecteerd bedrijf 
                met een team van ervaren vakmensen.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Onze specialisatie in dunpleister ontstond uit de groeiende vraag naar moderne, efficiënte 
                wandafwerkingstechnieken. Door voortdurend te investeren in nieuwe technieken en materialen, 
                zijn wij uitgegroeid tot dé specialist in dunpleister voor nieuwbouwwoningen.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Vandaag de dag zijn we trots op onze reputatie voor vakmanschap, betrouwbaarheid en 
                klanttevredenheid. Elk project, groot of klein, krijgt onze volledige aandacht en toewijding.
              </p>
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
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Ons team aan het werk"
                  className="w-full h-80 object-cover"
                />
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">2008</div>
                  <div className="text-sm text-gray-600">Opgericht</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Onze Waarden
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deze kernwaarden vormen de basis van alles wat we doen en bepalen hoe we onze klanten bedienen.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <SafeIcon icon={value.icon} className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Ons Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Maak kennis met onze ervaren vakmensen die elke dag werken aan perfecte resultaten.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-primary-600 font-medium mb-2">{member.role}</p>
                <p className="text-sm text-gray-500 mb-4">{member.experience}</p>
                <div className="space-y-1">
                  {member.specialties.map((specialty, specialtyIndex) => (
                    <div key={specialtyIndex} className="flex items-center justify-center space-x-2">
                      <SafeIcon icon={FiCheckCircle} className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-700">{specialty}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
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
              Onze Mijlpalen
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Een overzicht van belangrijke momenten in onze bedrijfsgeschiedenis.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 to-primary-600 hidden md:block"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                      <div className="text-2xl font-bold text-primary-600 mb-2">{milestone.year}</div>
                      <p className="text-gray-700">{milestone.event}</p>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden md:block w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg relative z-10"></div>

                  <div className="md:w-1/2"></div>
                </motion.div>
              ))}
            </div>
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
              Klaar Om Met Ons Te Werken?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Ervaar zelf waarom meer dan 500 klanten hebben gekozen voor onze expertise in dunpleister.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-50 transition-all transform hover:scale-105 shadow-lg"
              >
                Neem Contact Op
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
    </div>
  );
};

export default AboutPage;