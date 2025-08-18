import { useState } from "react";
import axios from "axios";
import toast from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/data/send", formData);
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast.error('Failed to send message')

    }
  };
  return (
    <div className="px-4 md:px-20 py-20">
      <div className="dark:bg-slate-900 dark:text-white bg-gray-100 rounded-2xl shadow-lg p-8 md:p-12 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter Your Name"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-800 dark:border-gray-600"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-800 dark:border-gray-600"
            required
          />

          <textarea
            name="message"
            placeholder="Enter Your Message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-800 dark:border-gray-600"
            required
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
