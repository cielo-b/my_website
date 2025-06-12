import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { services } from '../data/portfolioData';

const ServiceCard: React.FC<{ service: any; index: number; inView: boolean }> = ({ service, index, inView }) => {
  const getIconComponent = (iconClass: string) => {
    return <i className={`${iconClass} text-4xl`} />;
  };

  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <motion.div 
        className="relative h-full p-8 card glass bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-white/50 dark:border-gray-700/50 overflow-hidden group-hover:shadow-colored-lg transition-all duration-500"
        whileHover={{ y: -10, scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {/* Background Gradient on Hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Floating Icon Background */}
        <motion.div 
          className="absolute top-8 right-8 w-16 h-16 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-800/50 dark:to-secondary-800/50 rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />

        <div className="relative z-10 space-y-6">
          {/* Icon */}
          <motion.div 
            className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:shadow-colored transition-all duration-500"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            {getIconComponent(service.icon)}
          </motion.div>

          {/* Content */}
          <div className="space-y-4">
            <motion.h3 
              className="heading-tertiary text-gray-900 dark:text-white group-hover:text-primary-700 dark:group-hover:text-primary-400 transition-colors duration-300"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.3 }}
            >
              {service.title}
            </motion.h3>
            
            <motion.p 
              className="text-gray-600 dark:text-gray-300 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300"
              initial={{ opacity: 0.8 }}
              whileHover={{ opacity: 1 }}
            >
              {service.description}
            </motion.p>
          </div>

          {/* Learn More Link */}
          
        </div>

        {/* Decorative Elements */}
        <motion.div 
          className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-accent-200 to-accent-300 dark:from-accent-800/50 dark:to-accent-700/50 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-500"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360] 
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>
    </motion.div>
  );
};

const Services: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="service" className="section-padding bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-100 dark:bg-primary-900/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-100 dark:bg-secondary-900/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container-custom relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="flex items-center justify-center gap-3 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="px-4 py-2 bg-primary-50 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400 rounded-full text-sm font-semibold border border-primary-100 dark:border-primary-800">
              What I Do
            </span>
          </motion.div>

          <motion.h2 
            className="heading-secondary text-gray-900 dark:text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <span className="text-gradient-primary">Awesome Quality</span> Services
          </motion.h2>

          <motion.p 
            className="text-lead text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            I provide comprehensive digital solutions with expertise across multiple technologies
            and platforms, ensuring your project exceeds expectations.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              service={service} 
              index={index} 
              inView={inView}
            />
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.div 
            className="inline-flex items-center gap-4 p-8 glass bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-3xl border border-white/50 dark:border-gray-700/50"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-left">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Ready to start your project?</h3>
              <p className="text-gray-600 dark:text-gray-300">Let's discuss how I can help bring your ideas to life.</p>
            </div>
            <motion.button
              className="btn-primary whitespace-nowrap"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Get Started
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 