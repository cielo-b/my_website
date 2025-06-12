import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { experiences } from '../data/portfolioData';
import { Experience as ExperienceType } from '../types/portfolio';

const TimelineItem: React.FC<{ experience: ExperienceType; index: number; inView: boolean }> = ({ experience, index, inView }) => {
  const isLeft = experience.position === 'left';
  
  return (
    <motion.div 
      className={`relative flex items-center w-full ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : (isLeft ? -50 : 50) }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
    >
      {/* Content Card */}
      <motion.div 
        className={`w-full lg:w-5/12 ${isLeft ? 'lg:text-right lg:pr-8' : 'lg:text-left lg:pl-8'}`}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div 
          className="relative p-8 card glass bg-white/90 backdrop-blur-lg border border-white/50 group hover:shadow-colored-lg transition-all duration-500"
          whileHover={{ y: -5 }}
        >
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-secondary-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
          
          {/* Date Badge */}
          <motion.div 
            className={`absolute -top-4 ${isLeft ? 'lg:right-8' : 'lg:left-8'} left-8 lg:left-auto`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
            transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
          >
            <span className="px-4 py-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-sm font-bold rounded-full shadow-lg">
              {experience.year}
            </span>
          </motion.div>

          <div className="relative z-10 space-y-4 mt-4">
            {/* Job Title */}
            <motion.h3 
              className="heading-tertiary text-gray-900 group-hover:text-primary-700 transition-colors duration-300"
              whileHover={{ x: isLeft ? -5 : 5 }}
              transition={{ duration: 0.3 }}
            >
              {experience.title}
            </motion.h3>

            {/* Company */}
            <motion.h4 
              className="text-lg font-semibold text-secondary-600 group-hover:text-secondary-700 transition-colors duration-300"
              whileHover={{ x: isLeft ? -3 : 3 }}
              transition={{ duration: 0.3 }}
            >
              {experience.company}
            </motion.h4>

            {/* Description */}
            <motion.p 
              className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300"
              initial={{ opacity: 0.8 }}
              whileHover={{ opacity: 1 }}
            >
              {experience.description}
            </motion.p>
          </div>

          {/* Decorative Corner */}
          <motion.div 
            className={`absolute ${isLeft ? 'bottom-4 left-4' : 'bottom-4 right-4'} w-8 h-8 bg-gradient-to-br from-accent-400 to-accent-600 rounded-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500`}
            animate={{ rotate: 45 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
      </motion.div>

      {/* Timeline Dot */}
      <motion.div 
        className="absolute left-1/2 transform -translate-x-1/2 hidden lg:flex items-center justify-center z-20"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0 }}
        transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
      >
        <motion.div 
          className="timeline-dot relative"
          whileHover={{ scale: 1.3 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full animate-ping"
            style={{ animationDelay: `${index * 0.5}s` }}
          />
        </motion.div>
      </motion.div>

      {/* Spacer for opposite side */}
      <div className="hidden lg:block w-5/12" />
    </motion.div>
  );
};

const Experience: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.txt';
    link.download = 'IRUMVA_Regis_Dieu_Merci_Resume.txt';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="experience" className="section-padding bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-float" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-secondary-100 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-float" style={{ animationDelay: '3s' }} />
      </div>

      <div className="container-custom relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
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
            <span className="px-4 py-2 bg-primary-50 text-primary-600 rounded-full text-sm font-semibold border border-primary-100">
              My Resume
            </span>
          </motion.div>

          <motion.h2 
            className="heading-secondary text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Professional{' '}
            <span className="text-gradient-primary">Experience</span>{' '}
            Journey
          </motion.h2>

          <motion.p 
            className="text-lead text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            A comprehensive look at my professional journey, showcasing growth, 
            achievements, and the diverse experiences that have shaped my expertise.
          </motion.p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Timeline Line */}
          <motion.div 
            className="timeline-line hidden lg:block h-full"
            initial={{ height: 0 }}
            animate={{ height: inView ? '100%' : 0 }}
            transition={{ duration: 2, delay: 0.8 }}
          />

          {/* Timeline Items */}
          <div className="space-y-12 lg:space-y-16">
            {experiences.map((experience, index) => (
              <TimelineItem 
                key={index} 
                experience={experience} 
                index={index} 
                inView={inView}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <motion.div 
            className="inline-flex flex-col sm:flex-row items-center gap-6 p-8 glass bg-gradient-to-r from-primary-50 to-secondary-50 rounded-3xl border border-white/50"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Want to work together?
              </h3>
              <p className="text-gray-600">
                Let's discuss how my experience can contribute to your next project.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Hire Me
              </motion.button>
              
              <motion.button
                className="btn-outline border-primary-200 text-primary-600 hover:bg-primary-600"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={downloadResume}
              >
                <span className="flex items-center gap-2">
                  <i className="fas fa-download" />
                Download CV
                </span>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 