import React from 'react';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMail, FiPhone, FiMapPin, FiClock, FiStar } = FiIcons;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Diensten', href: '/diensten' },
    { name: 'Over Ons', href: '/over-ons' },
    { name: 'Contact', href: '/contact' }
  ];

  const services = [
    'Dunpleister toepassing',
    'Nieuwbouw stucwerk',
    'Wandafwerking',
    'Behangklaar stucwerk',
    'Gratis advies'
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-primary-600 to-primary-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <span className="font-bold text-xl">Dunpleister</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Specialist in dunpleister voor nieuwbouwwoningen. Wij leveren kwaliteit, 
              duurzaamheid en een perfecte afwerking voor uw project.
            </p>
            <div className="flex items-center space-x-2">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <SafeIcon key={i} icon={FiStar} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-sm text-gray-400">500+ tevreden klanten</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Snelle Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Onze Diensten</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="text-gray-300 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiPhone} className="w-5 h-5 text-primary-400" />
                <span className="text-gray-300">+31 (0)6 12 34 56 78</span>
              </div>
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiMail} className="w-5 h-5 text-primary-400" />
                <span className="text-gray-300">info@dunpleister.nl</span>
              </div>
              <div className="flex items-start space-x-3">
                <SafeIcon icon={FiMapPin} className="w-5 h-5 text-primary-400 mt-0.5" />
                <span className="text-gray-300">
                  Werkzaam in heel Nederland<br />
                  Voor nieuwbouwprojecten
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiClock} className="w-5 h-5 text-primary-400" />
                <span className="text-gray-300">Ma-Vr: 08:00 - 18:00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Dunpleister. Alle rechten voorbehouden.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy
              </Link>
              <Link to="/voorwaarden" className="text-gray-400 hover:text-white text-sm transition-colors">
                Voorwaarden
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;