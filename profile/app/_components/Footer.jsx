'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <footer className="bg-white py-6 border-t">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center md:items-start">
        {/* Left Section: Contact Information */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-gray-800 font-semibold">Abhijeet Thorat</p>
          <a href="mailto:abhijeet.kadance.96@gmail.com" className="text-blue-600 hover:underline block">
            abhijeet.kadance.96@gmail.com
          </a>
        </div>

        {/* Middle Section: Social Links */}
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center md:items-start">
        {/* Social Links */}
        <div className="flex space-x-6 text-gray-500">
          {/* <a href="https://twitter.com/abhijeet" className="hover:text-gray-800" aria-label="Twitter">
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </a> */}
          <a href="https://www.linkedin.com/in/abhijeet-thorat/" target="_blank" className="hover:text-gray-800" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
          <a href="https://github.com/Abhijeet-kadance"  target="_blank" className="hover:text-gray-800" aria-label="GitHub">
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
        </div>
      </div>

        {/* Right Section: Template Credits */}
        <div className="text-center md:text-right text-gray-800">
          <a href="https://martiansideofthemoon.github.io/" target="_blank" className="text-blue-600 hover:underline">
            Template Credits
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
