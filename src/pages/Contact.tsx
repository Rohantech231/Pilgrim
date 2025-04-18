import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle form submission to a backend service here
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    
    // Reset form after a delay for demo purposes
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setFormSubmitted(false);
    }, 3000);
  };

  const contactMethods = [
    {
      icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
      title: 'Email',
      description: 'info@pilgrimstudios.com',
      link: 'mailto:info@pilgrimstudios.com'
    },
    {
      icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
      title: 'Phone',
      description: '+91 33 2345 6789',
      link: 'tel:+913323456789'
    },
    {
      icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
      title: 'Location',
      description: 'Kolkata, West Bengal, India',
      link: 'https://maps.google.com/?q=Kolkata,India'
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 bg-dark">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary/30 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/30 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-light mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Contact Us
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Have questions, feedback, or just want to say hello? We'd love to hear from you.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-24 bg-dark">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                className="bg-dark/30 backdrop-blur-sm p-8 rounded-lg border border-gray-800 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-6 w-6 text-primary" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={method.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-light">{method.title}</h3>
                <a
                  href={method.link}
                  className="text-gray-300 hover:text-primary transition-colors duration-300"
                  target={method.title === 'Location' ? '_blank' : undefined}
                  rel={method.title === 'Location' ? 'noopener noreferrer' : undefined}
                >
                  {method.description}
                </a>
              </motion.div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-8 text-light">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded bg-dark/50 border border-gray-700 text-light focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded bg-dark/50 border border-gray-700 text-light focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded bg-dark/50 border border-gray-700 text-light focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Partnership">Partnership</option>
                    <option value="Press">Press</option>
                    <option value="Careers">Careers</option>
                    <option value="Support">Support</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded bg-dark/50 border border-gray-700 text-light focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="How can we help you?"
                  />
                </div>
                
                <div>
                  <Button
                    type="submit"
                    variant="primary"
                    fullWidth
                    disabled={formSubmitted}
                  >
                    {formSubmitted ? 'Message Sent!' : 'Send Message'}
                  </Button>
                </div>
              </form>
            </motion.div>
            
            {/* Map / Office Image */}
            <motion.div
              className="relative rounded-lg overflow-hidden shadow-2xl"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-800 w-full h-full aspect-square md:aspect-auto md:h-full">
                <div className="absolute inset-0 flex items-center justify-center flex-col p-8 text-center">
                  <h3 className="text-2xl font-bold text-light mb-4">Visit Our Studio</h3>
                  <div className="text-gray-400 space-y-2 mb-6">
                    <p>Pilgrim Studios</p>
                    <p>123 Game Street, Salt Lake</p>
                    <p>Kolkata, West Bengal 700091</p>
                    <p>India</p>
                  </div>
                  <div className="text-gray-500">
                    [Interactive map would be embedded here]
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-b from-dark to-dark/80">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-light">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Find answers to the most common questions about Pilgrim Studios and our games.
            </p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto">
            {[
              {
                question: 'Are you hiring?',
                answer: 'Yes! We\'re always looking for talented individuals to join our team. Please check our Careers page for current openings or send your portfolio to careers@pilgrimstudios.com.'
              },
              {
                question: 'Where can I buy your games?',
                answer: 'Our upcoming game Project AV will be available on Steam, PlayStation Store, and Xbox Store. You can wishlist it now on Steam to be notified when it launches.'
              },
              {
                question: 'Do you hire interns or juniors?',
                answer: 'Yes! We are always looking for passionate people to join our team. Check our careers page for current openings or send us your portfolio for consideration.'
              },
              {
                question: 'Can I visit your studio?',
                answer: 'We occasionally host studio visits for educational purposes or industry events. Please contact us in advance to arrange a visit.'
              },
              {
                question: 'How can I get support for your games?',
                answer: 'For technical support, please email support@pilgrimstudios.com or visit the support section on our website where we have FAQs and troubleshooting guides.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold mb-3 text-light">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact; 