import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    alert("Thanks for your message! This is a demo form.");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-dark-bg transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1.5 bg-primary-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Contact Information</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Feel free to reach out to me for collaboration, questions, or just a friendly hello.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg text-primary-600 dark:text-primary-400">
                    <Mail className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">Email</h4>
                  <p className="text-gray-600 dark:text-gray-400">hello@alexdev.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg text-primary-600 dark:text-primary-400">
                    <Phone className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">Phone</h4>
                  <p className="text-gray-600 dark:text-gray-400">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg text-primary-600 dark:text-primary-400">
                    <MapPin className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">Location</h4>
                  <p className="text-gray-600 dark:text-gray-400">San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-gray-50 dark:bg-dark-card p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-3 bg-white dark:bg-dark-bg border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-3 bg-white dark:bg-dark-bg border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-3 bg-white dark:bg-dark-bg border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
              >
                Send Message <Send className="ml-2 h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;