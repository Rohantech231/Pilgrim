import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const teamMembers = [
    {
      name: 'Arjun Sharma',
      role: 'Founder & CEO',
      bio: 'With over 10 years of experience in game development, Arjun founded Pilgrim Studios with a vision to create memorable gaming experiences that showcase Indian creativity on the global stage.',
      image: '/team-member-1.jpg'
    },
    {
      name: 'Priya Patel',
      role: 'Creative Director',
      bio: 'Priya brings her artistic vision and storytelling expertise to every project. She has previously worked on several acclaimed titles and ensures that each game has a compelling narrative and artistic direction.',
      image: '/team-member-2.jpg'
    },
    {
      name: 'Vikram Mehta',
      role: 'Lead Developer',
      bio: 'A programming wizard with expertise in multiple engines and frameworks, Vikram leads our development team in creating innovative gameplay mechanics and ensuring technical excellence.',
      image: '/team-member-3.jpg'
    },
    {
      name: 'Ananya Roy',
      role: 'Art Director',
      bio: 'Ananya\'s artistic talent shapes the visual identity of our games. Her background in traditional and digital art brings a unique aesthetic to the immersive worlds we create.',
      image: '/team-member-4.jpg'
    },
    {
      name: 'Rajiv Kumar',
      role: 'Audio Designer',
      bio: 'Rajiv crafts the soundscapes that bring our games to life. His expertise in music composition and sound design creates atmospheric and emotionally resonant audio experiences.',
      image: '/team-member-5.jpg'
    },
    {
      name: 'Neha Singh',
      role: 'Marketing Director',
      bio: 'With a background in digital marketing and a passion for games, Neha leads our efforts to connect with players and build a community around our titles.',
      image: '/team-member-6.jpg'
    }
  ];

  const timeline = [
    {
      year: '2023',
      title: 'Pilgrim Studios Founded',
      description: 'Established in Kolkata with a small team of passionate developers and artists.'
    },
    {
      year: '2023',
      title: 'Project AV Development Begins',
      description: 'Started development on our debut title, Project AV, with an innovative concept and gameplay mechanics.'
    },
    {
      year: '2024',
      title: 'Studio Expansion',
      description: 'Growing our team and moving to a larger office to accommodate our expanding projects.'
    },
    {
      year: '2024',
      title: 'Project AV Release',
      description: 'Scheduled release of our debut title across multiple platforms.'
    }
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
              About Pilgrim Studios
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We are a passionate team of game developers based in Kolkata, India, dedicated to creating immersive and innovative gaming experiences.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-dark">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-light">Our Story</h2>
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  Pilgrim Studios was founded in 2023 by a group of passionate game developers with a shared vision: to create memorable gaming experiences that showcase Indian creativity and storytelling on the global stage.
                </p>
                <p>
                  Based in the vibrant city of Kolkata, West Bengal, we draw inspiration from the rich cultural heritage of India while embracing modern game design principles and technologies.
                </p>
                <p>
                  Our journey began with a small team working out of a modest office, united by our love for games and our desire to build something meaningful. Today, we're growing steadily, but our core values remain the same - creating quality games that connect with players on an emotional level.
                </p>
                <p>
                  With our debut title "Project AV" in development, we're excited to introduce players to our unique vision and establish Pilgrim Studios as a notable presence in the global indie game development community.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              className="relative rounded-lg overflow-hidden shadow-2xl"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="aspect-square bg-gray-800 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-4xl font-bold text-primary">PILGRIM</div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-gradient-to-b from-dark to-dark/80">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-light">Our Values</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              These core principles guide everything we do at Pilgrim Studios.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Creativity',
                description: 'We push boundaries and think outside the box to create unique and engaging experiences.',
                icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
              },
              {
                title: 'Quality',
                description: 'We are committed to excellence in every aspect of our games, from design to implementation.',
                icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z'
              },
              {
                title: 'Player-Centric',
                description: 'Our players are at the heart of everything we do. We create games that resonate with and respect our audience.',
                icon: 'M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
              },
              {
                title: 'Innovation',
                description: 'We constantly explore new ideas and technologies to create fresh and exciting gaming experiences.',
                icon: 'M13 10V3L4 14h7v7l9-11h-7z'
              },
              {
                title: 'Diversity',
                description: 'We believe that diverse perspectives lead to better games and a more inclusive gaming community.',
                icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
              },
              {
                title: 'Sustainability',
                description: 'We aim to build a sustainable studio with ethical practices and long-term growth.',
                icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={value.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-light">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-24 bg-dark">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-light">Our Journey</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              The milestones that have shaped our studio's growth and development.
            </p>
          </motion.div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-800" />
            
            {/* Timeline Events */}
            <div className="relative space-y-12">
              {timeline.map((event, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} gap-8`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="bg-dark/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 inline-block">
                      <h3 className="text-xl font-bold mb-2 text-primary">{event.year}</h3>
                      <h4 className="text-lg font-semibold mb-3 text-light">{event.title}</h4>
                      <p className="text-gray-400">{event.description}</p>
                    </div>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-primary z-10" />
                  </div>
                  
                  <div className="w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-24 bg-gradient-to-b from-dark to-dark/80">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-light">Meet Our Team</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              The talented individuals behind Pilgrim Studios who bring our games to life.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                className="bg-dark/30 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-800"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="aspect-square bg-gray-800 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-5xl text-gray-600">{member.name.charAt(0)}</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-light mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-4">{member.role}</p>
                  <p className="text-gray-400">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About; 