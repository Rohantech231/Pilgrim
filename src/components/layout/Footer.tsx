import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-primary">PILGRIM</span> STUDIOS
            </h3>
            <p className="text-gray-400 mb-4">
              Crafting immersive gaming experiences from Kolkata, India.
            </p>
            <div className="flex space-x-4">
              {/* Social Media Icons */}
              {['twitter', 'instagram', 'youtube', 'linkedin'].map(platform => (
                <a 
                  key={platform}
                  href={`https://${platform}.com/pilgrimstudios`} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors duration-300"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-light font-bold mb-4">Games</h4>
            <ul className="space-y-2">
              <li><Link to="/games/project-av" className="text-gray-400 hover:text-primary transition-colors duration-300">Project AV</Link></li>
              <li><Link to="/games/upcoming" className="text-gray-400 hover:text-primary transition-colors duration-300">Upcoming Titles</Link></li>
              <li><Link to="/games/news" className="text-gray-400 hover:text-primary transition-colors duration-300">Game News</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-light font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-primary transition-colors duration-300">About Us</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-primary transition-colors duration-300">Careers</Link></li>
              <li><Link to="/press" className="text-gray-400 hover:text-primary transition-colors duration-300">Press Kit</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-light font-bold mb-4">Contact</h4>
            <address className="text-gray-400 not-italic">
              <p>Pilgrim Studios</p>
              <p>Kolkata, West Bengal</p>
              <p>India</p>
              <a href="mailto:info@pilgrimstudios.com" className="text-primary hover:text-primary/80 transition-colors duration-300 block mt-2">info@pilgrimstudios.com</a>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Pilgrim Studios. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-400 hover:text-primary text-sm transition-colors duration-300">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-400 hover:text-primary text-sm transition-colors duration-300">Terms of Service</Link>
              <Link to="/cookies" className="text-gray-400 hover:text-primary text-sm transition-colors duration-300">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 