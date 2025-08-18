import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="  py-10">
      <footer className="flex flex-col items-center justify-center space-y-6">

        {/* Navigation Links */}
        <nav className="flex space-x-6">
          <Link to="/about" className="text-gray-500 hover:underline">About</Link>
          <Link to="/contact" className="text-gray-500 hover:underline">Contact</Link>
          <Link to="/" className="text-gray-500 hover:underline">Home</Link>
          <Link to="/course" className="text-gray-500 hover:underline">Course</Link>
        </nav>

        {/* Social Links */}
        <div className="flex space-x-6">
          {/* Instagram */}
          <a href="https://www.instagram.com/gouarvchouchan?igsh=MWdwZWwwMG12azBwOA==" className="hover:text-pink-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9zm4.5 3.5a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2A3 3 0 1 0 12 16a3 3 0 0 0 0-6zm4.75-3.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/feed/" className="hover:text-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.806-1.75-1.732s.784-1.732 1.75-1.732 1.75.806 1.75 1.732-.784 1.732-1.75 1.732zm13.5 11.268h-3v-5.604c0-1.337-.027-3.059-1.865-3.059-1.865 0-2.152 1.454-2.152 2.957v5.706h-3v-10h2.885v1.367h.041c.403-.762 1.389-1.566 2.859-1.566 3.055 0 3.232 2.011 3.232 4.626v5.573z" />
            </svg>
          </a>

          {/* GitHub */}
          <a href="https://github.com/Gourav0404" className="hover:text-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .5C5.649.5.5 5.649.5 12c0 5.084 3.292 9.385 7.865 10.905.575.104.785-.25.785-.557v-2.165c-3.2.696-3.875-1.542-3.875-1.542-.523-1.33-1.278-1.685-1.278-1.685-1.043-.713.079-.698.079-.698 1.152.081 1.757 1.183 1.757 1.183 1.025 1.755 2.689 1.248 3.345.954.104-.743.4-1.248.727-1.536-2.554-.292-5.238-1.277-5.238-5.683 0-1.256.448-2.283 1.183-3.087-.119-.292-.513-1.47.111-3.064 0 0 .965-.309 3.164 1.179a10.96 10.96 0 0 1 2.879-.387c.976.004 1.96.131 2.879.387 2.199-1.488 3.163-1.179 3.163-1.179.624 1.594.23 2.772.113 3.064.737.804 1.182 1.831 1.182 3.087 0 4.416-2.688 5.388-5.252 5.675.408.352.775 1.048.775 2.114v3.13c0 .31.207.666.791.554C20.71 21.381 24 17.081 24 12c0-6.351-5.149-11.5-12-11.5z" />
            </svg>
          </a>
          {/* LeetCode */}
          <a href="https://leetcode.com/u/gouravchouhan6103/" className="hover:text-yellow-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 48 48">
              <path d="M20.6 8.2c-.5 0-1 .2-1.4.6l-9.8 9.8c-.8.8-.8 2 0 2.8l9.8 9.8c.8.8 2 .8 2.8 0s.8-2 0-2.8l-8.4-8.4 8.4-8.4c.8-.8.8-2 0-2.8-.4-.4-.9-.6-1.4-.6zm7 0c-.5 0-1 .2-1.4.6-.8.8-.8 2 0 2.8l8.4 8.4-8.4 8.4c-.8.8-.8 2 0 2.8s2 .8 2.8 0l9.8-9.8c.8-.8.8-2 0-2.8l-9.8-9.8c-.4-.4-.9-.6-1.4-.6zM24 30c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2s2-.9 2-2v-6c0-1.1-.9-2-2-2z" />
            </svg>
          </a>
        </div>


        {/* Copyright */}
        <aside className="text-sm text-gray-400">
          <p>Copyright © {new Date().getFullYear()} - All rights reserved by ACME Industries Ltd</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
