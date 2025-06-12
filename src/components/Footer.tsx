import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Footer: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [currentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const footerLinks = [
    { label: 'Home', sectionId: 'home' },
    { label: 'About', sectionId: 'about' },
    { label: 'Services', sectionId: 'service' },
    { label: 'Portfolio', sectionId: 'portfolio' },
    { label: 'Contact', sectionId: 'contact' },
  ];

  const socialLinks = [
    { 
      icon: 'fab fa-twitter', 
      url: 'https://twitter.com/DregisMerci', 
      label: 'Twitter',
      color: 'hover:bg-blue-400',
    },
    { 
      icon: 'fab fa-linkedin-in', 
      url: 'https://www.linkedin.com/in/d-regis-9aa310255/', 
      label: 'LinkedIn',
      color: 'hover:bg-blue-600',
    },
    { 
      icon: 'fab fa-github', 
      url: 'https://www.github.com/cielo-b', 
      label: 'GitHub',
      color: 'hover:bg-gray-700',
    },
  ];

  const quickStats = [
    { number: '3+', label: 'Years Experience' },
    { number: '50+', label: 'Projects Done' },
    { number: '15+', label: 'Happy Clients' },
    { number: '100%', label: 'Satisfaction' },
  ];

  return (
    <>
      <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full mix-blend-multiply filter blur-xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-500/10 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '3s' }} />
          <div className="absolute inset-0 bg-hero-pattern opacity-5" />
        </div>

        <div className="container-custom relative z-10">
          {/* Main Footer Content */}
          <motion.div 
            className="pt-20 pb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid lg:grid-cols-4 gap-12">
              {/* Brand Section */}
              <motion.div 
                className="lg:col-span-2 space-y-6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="flex items-center gap-3"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center">
                    <span className="text-xl font-bold">DR</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold font-display">D Regis Irumva</h3>
                    <p className="text-primary-400 font-medium">Full Stack Developer</p>
                  </div>
                </motion.div>

                <p className="text-gray-300 leading-relaxed max-w-md">
                  Passionate about creating innovative digital solutions with modern technologies. 
                  Let's build something amazing together.
                </p>

                {/* Contact Info */}
                <div className="space-y-3">
                  {[
                    { icon: 'fas fa-map-marker-alt', text: 'Kigali, Rwanda' },
                    { icon: 'fas fa-phone', text: '+250790539402' },
                    { icon: 'fas fa-envelope', text: 'irumvaregisdmc@gmail.com' },
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-center gap-3 text-gray-300 hover:text-primary-400 transition-colors duration-300"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <i className={`${item.icon} text-primary-400 w-5`} />
                      <span>{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Quick Links */}
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                <div className="space-y-3">
                  {footerLinks.map((link, index) => (
                    <motion.button
                      key={index}
                      onClick={() => scrollToSection(link.sectionId)}
                      className="block text-gray-300 hover:text-primary-400 transition-colors duration-300 text-left"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {link.label}
                    </motion.button>
                  ))}
                </div>
              </motion.div>

              {/* Stats */}
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold text-white mb-4">Quick Stats</h4>
                <div className="grid grid-cols-2 gap-4">
                  {quickStats.map((stat, index) => (
                    <motion.div 
                      key={index}
                      className="text-center p-4 glass bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10"
                      whileHover={{ scale: 1.05, y: -2 }}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.8 }}
                    >
                      <motion.div 
                        className="text-xl font-bold text-primary-400 mb-1"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                      >
                        {stat.number}
                      </motion.div>
                      <div className="text-xs text-gray-400">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Social Links Section */}
          <motion.div 
            className="py-8 border-t border-gray-700/50"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h4 className="text-lg font-semibold text-white mb-2">Let's Connect</h4>
                <p className="text-gray-400">Follow me on social media for updates</p>
              </div>
              
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-white/10 backdrop-blur-lg rounded-xl flex items-center justify-center text-white border border-white/20 transition-all duration-300 ${social.color}`}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 + 1.0 }}
                    viewport={{ once: true }}
                  >
                    <i className={social.icon} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Copyright */}
          <motion.div 
            className="py-8 border-t border-gray-700/50 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <motion.p 
                className="text-gray-400"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                © {currentYear}{' '}
                <span className="text-primary-400 font-semibold">D Regis</span>. 
                All rights reserved.
              </motion.p>
              
              <motion.p 
                className="text-gray-400"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                Designed & Built with{' '}
                <motion.span 
                  className="text-red-400"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  ❤️
                </motion.span>{' '}
                by{' '}
                <span className="text-primary-400 font-semibold">D Regis</span>
              </motion.p>
            </div>
          </motion.div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            className="back-to-top group"
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0, rotate: 180 }}
            whileHover={{ 
              scale: 1.1, 
              y: -2,
              boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)",
            }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <motion.i 
              className="fas fa-chevron-up text-lg"
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            
            {/* Ripple Effect */}
            <motion.div
              className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100"
              animate={{ scale: [0.8, 1.2, 0.8] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default Footer; 