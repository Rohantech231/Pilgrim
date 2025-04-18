import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';

const ProjectAV: React.FC = () => {
  const gameScreenshots = [
    { id: 1, src: '/screenshot-1.jpg', alt: 'Project AV gameplay screenshot 1' },
    { id: 2, src: '/screenshot-2.jpg', alt: 'Project AV gameplay screenshot 2' },
    { id: 3, src: '/screenshot-3.jpg', alt: 'Project AV gameplay screenshot 3' },
    { id: 4, src: '/screenshot-4.jpg', alt: 'Project AV gameplay screenshot 4' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0 bg-dark">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark z-10" />
          <div className="h-full w-full bg-center bg-cover bg-no-repeat opacity-50" style={{ backgroundImage: 'url(/project-av-hero.jpg)' }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-20 mt-16">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-light mb-6">
                Project <span className="text-primary">AV</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                A groundbreaking adventure from Pilgrim Studios. Coming soon to PC and consoles.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button 
                  variant="primary" 
                  size="lg"
                  onClick={() => window.open('https://store.steampowered.com', '_blank')}
                >
                  Wishlist on Steam
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => {
                    document.getElementById('trailer')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Watch Trailer
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Game Overview */}
      <section className="py-24 bg-dark">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-light">Game Overview</h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Project AV is a narrative-driven adventure game that combines atmospheric storytelling with innovative gameplay mechanics. Set in a richly detailed world, players will explore, discover, and overcome challenges in a unique gaming experience.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                As the protagonist, you'll navigate through a mysterious world filled with secrets, puzzles, and unexpected allies. Your choices will shape the story and determine the fate of this world and its inhabitants.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold mb-3 text-primary">Release Date</h3>
                  <p className="text-gray-300">Coming 2024</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-primary">Platforms</h3>
                  <p className="text-gray-300">PC, PlayStation 5, Xbox Series X/S</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-primary">Genre</h3>
                  <p className="text-gray-300">Action Adventure, Puzzle</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-primary">Players</h3>
                  <p className="text-gray-300">Single-player</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="relative aspect-video rounded-lg overflow-hidden shadow-2xl"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              id="trailer"
            >
              <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-24 w-24 text-primary opacity-80" 
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-gradient-to-b from-dark to-dark/80">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-light">Key Features</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Explore a meticulously crafted world with innovative gameplay mechanics that will keep you engaged from start to finish.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Immersive Storytelling',
                description: 'A deep, emotional narrative that evolves based on your choices and actions throughout the game.',
                icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
              },
              {
                title: 'Stunning Visuals',
                description: 'Breathtaking environments and detailed character designs that bring the world of Project AV to life.',
                icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
              },
              {
                title: 'Innovative Mechanics',
                description: 'Unique gameplay systems that evolve as you progress, presenting fresh challenges throughout your journey.',
                icon: 'M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
              },
              {
                title: 'Dynamic World',
                description: 'A living, breathing environment that responds to your actions and changes over time.',
                icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
              },
              {
                title: 'Challenging Puzzles',
                description: 'Mind-bending puzzles that will test your problem-solving skills and creativity.',
                icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z'
              },
              {
                title: 'Original Soundtrack',
                description: 'A captivating musical score that enhances the emotional impact of your journey.',
                icon: 'M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3'
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-light">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="py-24 bg-dark">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-light">Screenshots</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Get a glimpse of the stunning visuals and atmospheric environments in Project AV.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {gameScreenshots.map((screenshot, index) => (
              <motion.div
                key={screenshot.id}
                className="relative aspect-video rounded-lg overflow-hidden"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-gray-700 w-full h-full flex items-center justify-center">
                  <div className="text-gray-500 text-lg">Screenshot {screenshot.id}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-t from-dark to-dark/80 relative overflow-hidden">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-light">Stay Updated</h2>
            <p className="text-lg text-gray-300 mb-10 leading-relaxed">
              Sign up for our newsletter to receive the latest news, updates, and exclusive content about Project AV.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:w-auto px-4 py-3 rounded bg-dark/50 border border-gray-700 text-light focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button variant="primary" size="lg">
                Subscribe
              </Button>
            </div>
            
            <div className="mt-8 flex justify-center space-x-6">
              {['twitter', 'facebook', 'instagram', 'discord'].map(platform => (
                <a 
                  key={platform}
                  href={`https://${platform}.com/pilgrimstudios`} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors duration-300"
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ProjectAV; 