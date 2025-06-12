import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';
import { ContactForm } from '../types/portfolio';

const Contact: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Partial<ContactForm>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name as keyof ContactForm]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactForm> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Please enter a subject';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      // EmailJS configuration - you'll need to replace these with your actual EmailJS credentials
      const result = await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'irumvaregisdmc@gmail.com', // Your email
        },
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );

      console.log('Email sent successfully:', result);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setFocusedField(null);
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Location',
      value: 'Kigali, Rwanda',
      description: 'Available for remote work worldwide',
    },
    {
      icon: 'fas fa-phone',
      title: 'Phone',
      value: '+250790539402',
      description: 'Available 9 AM - 6 PM (CAT)',
    },
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      value: 'irumvaregisdmc@gmail.com',
      description: 'Response within 24 hours',
    },
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 dark:bg-primary-500/10 rounded-full mix-blend-multiply filter blur-xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 dark:bg-secondary-500/10 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '5s' }} />
        <div className="absolute inset-0 bg-hero-pattern opacity-5" />
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
            <span className="px-4 py-2 bg-white/10 dark:bg-gray-800/50 text-white rounded-full text-sm font-semibold border border-white/20 dark:border-gray-700">
              Get In Touch
            </span>
          </motion.div>

          <motion.h2 
            className="heading-secondary text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Let's Create Something{' '}
            <span className="text-gradient-rainbow">Amazing</span>{' '}
            Together
          </motion.h2>

          <motion.p 
            className="text-lead text-white/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Ready to bring your ideas to life? Let's discuss your project and 
            see how we can collaborate to create extraordinary digital experiences.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div 
                  key={index}
                  className="group flex items-start gap-6 p-6 glass bg-white/10 dark:bg-gray-800/30 backdrop-blur-lg rounded-2xl border border-white/20 dark:border-gray-700/50 hover:bg-white/15 dark:hover:bg-gray-700/40 transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 1.0 }}
                >
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:shadow-colored transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <i className={`${item.icon} text-lg`} />
                  </motion.div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                    <p className="text-white/90 font-medium mb-1">{item.value}</p>
                    <p className="text-white/60 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div 
              className="p-6 glass bg-white/10 dark:bg-gray-800/30 backdrop-blur-lg rounded-2xl border border-white/20 dark:border-gray-700/50"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 1.3 }}
            >
              <h3 className="text-lg font-semibold text-white mb-4">Follow Me</h3>
              <div className="flex gap-4">
                {[
                  { icon: 'fab fa-twitter', url: 'https://twitter.com/DregisMerci', color: 'hover:bg-blue-500' },
                  { icon: 'fab fa-linkedin-in', url: 'https://www.linkedin.com/in/d-regis-9aa310255/', color: 'hover:bg-blue-600' },
                  { icon: 'fab fa-github', url: 'https://www.github.com/cielo-b', color: 'hover:bg-gray-700' },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-white/10 dark:bg-gray-700/50 backdrop-blur-lg rounded-xl flex items-center justify-center text-white border border-white/20 dark:border-gray-600 transition-all duration-300 ${social.color}`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
                    transition={{ duration: 0.3, delay: index * 0.1 + 1.5 }}
                  >
                    <i className={social.icon} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <motion.div 
              className="p-8 glass bg-white/10 dark:bg-gray-800/30 backdrop-blur-lg rounded-3xl border border-white/20 dark:border-gray-700/50"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              {/* Success/Error Messages */}
              <AnimatePresence>
                {submitStatus === 'success' && (
                  <motion.div
                    className="mb-6 p-4 bg-green-500/20 border border-green-400/30 rounded-2xl text-green-300"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-3">
                      <i className="fas fa-check-circle text-green-400" />
                      <span className="font-medium">Message sent successfully! I'll get back to you soon.</span>
                    </div>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    className="mb-6 p-4 bg-red-500/20 border border-red-400/30 rounded-2xl text-red-300"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-3">
                      <i className="fas fa-exclamation-circle text-red-400" />
                      <span className="font-medium">There was an error sending your message. Please try again.</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <motion.div 
                    className="relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                  >
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-6 py-4 bg-white/10 dark:bg-gray-800/50 backdrop-blur-lg border-2 rounded-2xl text-white placeholder-white/60 dark:placeholder-gray-400 focus:outline-none transition-all duration-300 ${
                        errors.name 
                          ? 'border-red-400/50 focus:border-red-400' 
                          : focusedField === 'name' 
                            ? 'border-primary-400 focus:border-primary-400' 
                            : 'border-white/20 dark:border-gray-600 focus:border-white/40 dark:focus:border-gray-500'
                      }`}
                      placeholder="Your Name"
                    />
                    {errors.name && (
                      <motion.p 
                        className="mt-2 text-red-300 text-sm flex items-center gap-2"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <i className="fas fa-exclamation-circle" />
                        {errors.name}
                      </motion.p>
                    )}
                  </motion.div>

                  {/* Email Field */}
                  <motion.div 
                    className="relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                    transition={{ duration: 0.5, delay: 1.3 }}
                  >
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-6 py-4 bg-white/10 dark:bg-gray-800/50 backdrop-blur-lg border-2 rounded-2xl text-white placeholder-white/60 dark:placeholder-gray-400 focus:outline-none transition-all duration-300 ${
                        errors.email 
                          ? 'border-red-400/50 focus:border-red-400' 
                          : focusedField === 'email' 
                            ? 'border-primary-400 focus:border-primary-400' 
                            : 'border-white/20 dark:border-gray-600 focus:border-white/40 dark:focus:border-gray-500'
                      }`}
                      placeholder="Your Email"
                    />
                    {errors.email && (
                      <motion.p 
                        className="mt-2 text-red-300 text-sm flex items-center gap-2"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <i className="fas fa-exclamation-circle" />
                        {errors.email}
                      </motion.p>
                    )}
                  </motion.div>
                </div>

                {/* Subject Field */}
                <motion.div 
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                  transition={{ duration: 0.5, delay: 1.4 }}
                >
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('subject')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-6 py-4 bg-white/10 dark:bg-gray-800/50 backdrop-blur-lg border-2 rounded-2xl text-white placeholder-white/60 dark:placeholder-gray-400 focus:outline-none transition-all duration-300 ${
                      errors.subject 
                        ? 'border-red-400/50 focus:border-red-400' 
                        : focusedField === 'subject' 
                          ? 'border-primary-400 focus:border-primary-400' 
                          : 'border-white/20 dark:border-gray-600 focus:border-white/40 dark:focus:border-gray-500'
                    }`}
                    placeholder="Subject"
                  />
                  {errors.subject && (
                    <motion.p 
                      className="mt-2 text-red-300 text-sm flex items-center gap-2"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <i className="fas fa-exclamation-circle" />
                      {errors.subject}
                    </motion.p>
                  )}
                </motion.div>

                {/* Message Field */}
                <motion.div 
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                  transition={{ duration: 0.5, delay: 1.5 }}
                >
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    rows={6}
                    className={`w-full px-6 py-4 bg-white/10 dark:bg-gray-800/50 backdrop-blur-lg border-2 rounded-2xl text-white placeholder-white/60 dark:placeholder-gray-400 focus:outline-none transition-all duration-300 resize-none ${
                      errors.message 
                        ? 'border-red-400/50 focus:border-red-400' 
                        : focusedField === 'message' 
                          ? 'border-primary-400 focus:border-primary-400' 
                          : 'border-white/20 dark:border-gray-600 focus:border-white/40 dark:focus:border-gray-500'
                    }`}
                    placeholder="Tell me about your project..."
                  />
                  {errors.message && (
                    <motion.p 
                      className="mt-2 text-red-300 text-sm flex items-center gap-2"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <i className="fas fa-exclamation-circle" />
                      {errors.message}
                    </motion.p>
                  )}
                </motion.div>

                {/* Submit Button */}
                <motion.div 
                  className="pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                  transition={{ duration: 0.5, delay: 1.6 }}
                >
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-colored transition-all duration-300 transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none ${
                      isSubmitting ? 'cursor-wait' : ''
                    }`}
                    whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                  >
                    <span className="flex items-center justify-center gap-3">
                      {isSubmitting ? (
                        <>
                          <motion.div
                            className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <motion.i 
                            className="fas fa-paper-plane"
                            animate={{ x: [0, 3, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          />
                        </>
                      )}
                    </span>
                  </motion.button>
                </motion.div>
              </form>

              {/* EmailJS Setup Instructions */}
              {/* <motion.div 
                className="mt-6 p-4 bg-yellow-500/20 border border-yellow-400/30 rounded-2xl text-yellow-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
              >
                <div className="flex items-start gap-3">
                  <i className="fas fa-info-circle text-yellow-400 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-medium mb-1">EmailJS Setup Required</p>
                    <p className="text-yellow-200/80">
                      To enable email functionality, please set up EmailJS with your credentials in the Contact component.
                    </p>
                  </div>
                </div>
              </motion.div> */}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 