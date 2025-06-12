import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '../data/portfolioData';
import { Skill } from '../types/portfolio';

const SkillBar: React.FC<{ skill: Skill; index: number; inView: boolean }> = ({ skill, index, inView }) => {
  return (
    <motion.div 
      className="group"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -20 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="flex justify-between items-center mb-3">
        <span className="text-gray-700 dark:text-gray-300 font-medium group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
          {skill.name}
        </span>
        <motion.span 
          className="text-primary-600 dark:text-primary-400 font-bold text-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
        >
          {skill.percentage}%
        </motion.span>
      </div>
      
      <div className="skill-bar group-hover:shadow-colored transition-all duration-300">
        <motion.div
          className="skill-progress shadow-inner"
          initial={{ width: 0 }}
          animate={{ width: inView ? `${skill.percentage}%` : 0 }}
          transition={{ 
            duration: 1.5, 
            delay: index * 0.1 + 0.5,
            ease: "easeOut"
          }}
        />
      </div>
    </motion.div>
  );
};

const About: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-100 dark:bg-primary-900/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-100 dark:bg-secondary-900/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container-custom relative z-10" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Image Section */}
          <motion.div 
            variants={itemVariants}
            className="relative"
          >
            <div className="relative max-w-lg mx-auto lg:max-w-none">
              {/* Main Image Card */}
              <motion.div 
                className="relative card card-hover p-4 bg-gradient-to-br from-white to-gray-50/50 dark:from-gray-800 dark:to-gray-700/50 backdrop-blur-lg border border-white/50 dark:border-gray-700/50"
                whileHover={{ 
                  rotate: 2,
                  scale: 1.02,
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <motion.img 
                    src="/images/merci.JPG" 
                    alt="D Regis Irumva" 
                    className="w-full h-auto object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>

              {/* Floating Stats */}
              <motion.div 
                className="absolute -bottom-6 -right-6 lg:-right-12 glass bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-white/50 dark:border-gray-700/50"
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8, rotate: inView ? 0 : -5 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
              >
                <div className="text-center">
                  <motion.div 
                    className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-1"
                    animate={{ 
                      scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    3+
                  </motion.div>
                  <div className="text-sm font-medium text-gray-600 dark:text-gray-300">Years Experience</div>
                </div>
              </motion.div>

              {/* Floating Badge */}
              <motion.div 
                className="absolute -top-6 -left-6 glass bg-gradient-to-r from-primary-500 to-secondary-500 text-white p-4 rounded-2xl shadow-xl"
                initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8, rotate: inView ? 0 : 5 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                whileHover={{ scale: 1.05, rotate: -2 }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-300 rounded-full animate-pulse" />
                  <span className="text-sm font-semibold">Available</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div 
            variants={itemVariants}
            className="space-y-8"
          >
            {/* Header */}
            <div className="space-y-4">
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-3"
              >
                <span className="px-4 py-2 bg-primary-50 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400 rounded-full text-sm font-semibold border border-primary-100 dark:border-primary-800">
                  Learn About Me
                </span>
                <div className="flex-1 h-px bg-gradient-to-r from-primary-200 dark:from-primary-700 to-transparent"></div>
              </motion.div>

              <motion.h2 
                variants={itemVariants}
                className="heading-secondary text-gray-900 dark:text-white"
              >
                Passionate{' '}
                <span className="text-gradient-primary">Full Stack</span>{' '}
                Developer
              </motion.h2>

              <motion.p 
                variants={itemVariants}
                className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed"
              >
                Hello, I'm{' '}
                <span className="font-semibold text-primary-600 dark:text-primary-400">Irumva Regis Dieu Merci</span>{' '}
                — a passionate and dedicated Full Stack developer on a mission to bring innovative 
                and elegant solutions to the world of web development. With{' '}
                <span className="font-semibold text-secondary-600 dark:text-secondary-400">3+ years of experience</span>, 
                I specialize in creating scalable, performant applications that deliver exceptional user experiences.
              </motion.p>
            </div>

            {/* Quick Stats */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-3 gap-6"
            >
              {[
                { number: '10+', label: 'Projects Completed' },
                { number: '15+', label: 'Happy Clients' },
                { number: '3+', label: 'Years Experience' },
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center p-4 rounded-2xl bg-gradient-to-br from-white to-primary-50/50 dark:from-gray-800 dark:to-primary-900/20 border border-primary-100/50 dark:border-primary-800/50 card-hover"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 1.2 }}
                >
                  <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Skills Section */}
            <motion.div 
              variants={itemVariants}
              className="space-y-6"
            >
              <h3 className="heading-tertiary text-gray-900 dark:text-white">Technical Skills</h3>
              
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <SkillBar key={index} skill={skill} index={index} inView={inView} />
                ))}
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div 
              variants={itemVariants}
              className="pt-4"
            >
              <motion.button
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.getElementById('portfolio');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <span className="flex items-center gap-2">
                  View My Work
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 