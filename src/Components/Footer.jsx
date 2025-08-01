import React from 'react';
import logo from '../assets/logo.png';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-button-nav border-t border-gray-300 text-black py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
          
          <div>
            <div className="flex items-center mb-4 text-button">
              <img src={logo} alt="Semitrack Logo" className="h-10" />
            </div>
            <div className="flex space-x-4">
              <FaFacebook className=' text-button'/>
              <FaTwitter className=' text-button'/>
              <FaLinkedin className=' text-button'/>
              <FaInstagram className=' text-button'/>
                          </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-button">Tutors</h3>
            <ul className="space-y-2 text-sm">
              <li>Become a Tutor</li>
              <li>Tutoring Jobs</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-button">Students</h3>
            <ul className="space-y-2 text-sm">
              <li>Find a Tutor</li>
              <li>Services Near Me</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-button">Schools</h3>
            <ul className="space-y-2 text-sm">
              <li>School Management Systems</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-button">Subjects</h3>
            <ul className="space-y-2 text-sm">
              <li>Math Tutors</li>
              <li>Chemistry Tutors</li>
              <li>Biology Tutors</li>
              <li>English Tutors</li>
              <li>JAMB Tutoring</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-10 pt-6 text-sm ">
          <p>&copy; {new Date().getFullYear()} Semitrack. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
