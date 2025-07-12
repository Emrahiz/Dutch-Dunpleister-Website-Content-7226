import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiArrowRight, FiCheckCircle, FiStar } = FiIcons;

const Hero = () => {
  const benefits = [
    'Behangklaar stucwerk',
    'Snelle droogtijd',
    'Duurzame afwerking',
    'Kosteneffectief'
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-blue-50"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="flex items-center space-x-2">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <SafeIcon key={i} icon={FiStar} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="text-sm text-gray-600 font-medium">Beoordeeld door 500+ klanten</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              <span className="text-primary-600">Dunpleister:</span><br />
              De ideale wandafwerking voor{' '}
              <span className="bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent">
                nieuwbouwwoningen
              </span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Dunpleister is de perfecte keuze voor iedereen die een moderne en strakke look voor hun nieuwe huis wil. 
              Deze techniek biedt een gladde afwerking die klaar is voor verdere afwerking, zonder de noodzaak van een dikke laag stucwerk.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-lg hover:from-primary-700 hover:to-primary-800 transition-all transform hover:scale-105 shadow-lg"
              >
                Gratis Offerte Aanvragen
                <SafeIcon icon={FiArrowRight} className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/diensten"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary-600 text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-all"
              >
                Meer Over Onze Diensten
              </Link>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Moderne nieuwbouwwoning met dunpleister afwerking"
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 border border-gray-100"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <SafeIcon icon={FiCheckCircle} className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">24-48 uur droogtijd</p>
                  <p className="text-sm text-gray-600">Sneller dan traditioneel stucwerk</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;