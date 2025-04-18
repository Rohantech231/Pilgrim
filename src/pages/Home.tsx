import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/ui/HeroSection';
import GameShowcase from '../components/ui/GameShowcase';
import Button from '../components/ui/Button';

const Home: React.FC = () => {
  const teamMembers = [
    {
      name: 'Arjun Sharma',
      role: 'Founder & CEO',
      image: '/team-member-1.jpg'
    },
    {
      name: 'Priya Patel',
      role: 'Creative Director',
      image: '/team-member-2.jpg'
    },
    {
      name: 'Vikram Mehta',
      role: 'Lead Developer',
      image: '/team-member-3.jpg'
    },
    {
      name: 'Ananya Roy',
      role: 'Art Director',
      image: '/team-member-4.jpg'
    }
  ];

  return (
    <>
      <HeroSection
        title="Crafting Unforgettable Gaming Experiences"
        subtitle="Pilgrim Studios is a cutting-edge game development company based in Kolkata, India. We're passionate about creating immersive worlds and innovative gameplay."
        ctaText="Discover Project AV"
        ctaLink="/games/project-av"
        backgroundImage="/hero-bg.jpg"
      />

      <section className="py-24 bg-dark">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-light">Welcome to Pilgrim Studios</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Founded in 2023, we are a passionate team of game developers, artists, and storytellers dedicated to creating memorable gaming experiences. Based in Kolkata, West Bengal, we bring Indian creativity and innovation to the global gaming industry.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Studio Values */}
            {['Innovation', 'Passion', 'Quality'].map((value, index) => (
              <motion.div 
                key={value}
                className="bg-dark/30 backdrop-blur-sm p-8 rounded-lg border border-gray-800"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-6 w-6 text-primary" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-light">{value}</h3>
                <p className="text-gray-400">
                  {value === 'Innovation' && 'We continuously push boundaries to create unique gameplay mechanics and stories.'}
                  {value === 'Passion' && 'Our love for games drives us to craft experiences that players will remember.'}
                  {value === 'Quality' && 'We pride ourselves on polished, optimized games that exceed expectations.'}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <GameShowcase
        title="Project AV"
        description="Our debut title combines atmospheric storytelling with innovative gameplay mechanics. Set in a richly detailed world, Project AV invites players to explore, discover, and overcome challenges in a unique gaming experience."
        features={[
          'Immersive narrative-driven gameplay',
          'Stunning visuals and atmospheric world',
          'Innovative mechanics that evolve throughout the game',
          'Original soundtrack composed for a captivating experience',
        ]}
        imageUrl="/project-av.jpg"
        ctaText="Learn More"
        ctaLink="/games/project-av"
      />

      <section className="py-24 bg-gradient-to-b from-dark to-dark/80">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-light">Our Team</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Meet the creative minds behind Pilgrim Studios. Our diverse team brings together expertise from various backgrounds to create exceptional gaming experiences.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={member.name}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mb-4 relative overflow-hidden rounded-lg aspect-square">
                  <div className="bg-gradient-to-b from-primary/20 to-dark/50 absolute inset-0" />
                  <div className="bg-gray-700 w-full h-full flex items-center justify-center">
                    <span className="text-4xl text-gray-500">{member.name.charAt(0)}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-light">{member.name}</h3>
                <p className="text-gray-400">{member.role}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.location.href = '/about'}
            >
              Learn More About Our Team
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary/30 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/30 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="bg-dark/50 backdrop-blur-md p-12 rounded-xl border border-gray-800 max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-light">Join Us on Our Journey</h2>
            <p className="text-lg text-gray-300 mb-10 leading-relaxed">
              We're always looking for talented individuals to join our growing team. Whether you're a developer, artist, or designer, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="primary"
                size="lg"
                onClick={() => window.location.href = '/careers'}
              >
                View Open Positions
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.location.href = '/contact'}
              >
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home; 