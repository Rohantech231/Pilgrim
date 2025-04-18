import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

interface GameShowcaseProps {
  title: string;
  description: string;
  features: string[];
  imageUrl: string;
  ctaText: string;
  ctaLink: string;
  reverse?: boolean;
}

const GameShowcase: React.FC<GameShowcaseProps> = ({
  title,
  description,
  features,
  imageUrl,
  ctaText,
  ctaLink,
  reverse = false,
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section className="py-20 bg-dark">
      <div className="container mx-auto px-4">
        <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}>
          {/* Image Side */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: reverse ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <img 
                src={imageUrl} 
                alt={title} 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div 
            className="w-full lg:w-1/2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6 text-light"
              variants={itemVariants}
            >
              {title}
            </motion.h2>
            
            <motion.p 
              className="text-lg text-gray-300 mb-8 leading-relaxed"
              variants={itemVariants}
            >
              {description}
            </motion.p>
            
            <motion.ul className="space-y-3 mb-10" variants={itemVariants}>
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-6 w-6 text-primary mr-3 flex-shrink-0" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </motion.ul>
            
            <motion.div variants={itemVariants}>
              <Button 
                variant="primary" 
                size="lg"
                onClick={() => window.location.href = ctaLink}
              >
                {ctaText}
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GameShowcase; 