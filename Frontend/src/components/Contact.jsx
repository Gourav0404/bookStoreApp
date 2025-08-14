import React from 'react';

const Contact = () => {
  return (
    <div className="px-4 md:px-20 py-20">
      <div className="dark:bg-slate-900 dark:text-white bg-gray-100 rounded-2xl shadow-lg p-8 md:p-12 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
        
        <form className="flex flex-col gap-6">
          <input
            type="text"
            placeholder="Enter Your Name"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-800 dark:border-gray-600"
          />
          
          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-800 dark:border-gray-600"
          />
          
          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-800 dark:border-gray-600"
          ></textarea>
          
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300 ease-in-out"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
