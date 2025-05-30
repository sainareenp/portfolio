import React, { useState } from 'react';
import { Mail, MapPin, Linkedin, Github, Send } from 'lucide-react';
import emailjs from 'emailjs-com';
const Contact: React.FC = () => {
   const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    setErrorMessage('');

    const serviceID = 'service_1xutuqk';
    const templateID = 'template_je4w5ic';
    const userID = 'Diw-7nZN7btLTM3oX';

    emailjs.send(serviceID, templateID, formState, userID)
      .then(() => {
        setSubmitMessage('Your message has been sent successfully!');
        setFormState({ name: '', email: '', message: '', subject: '' });
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        setErrorMessage('Oops! Something went wrong. Please try again later.');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="py-20 bg-secondary-50 dark:bg-secondary-900">
      <div className="section-container">
        <h2 className="section-title mb-16">Get In Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <p className="text-lg text-secondary-700 dark:text-secondary-300">
              I'm currently looking for new opportunities in Information Science, Data Management, 
              and Technology. If you have any questions or would like to work together, 
              feel free to reach out!
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="p-3 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 mr-4">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a 
                    href="mailto:psainareen@gmail.com" 
                    className="text-primary-600 dark:text-accent-400 hover:underline"
                  >
                    psainareen@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 mr-4">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-secondary-600 dark:text-secondary-400">
                    New York, USA
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 mr-4">
                  <Linkedin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium">LinkedIn</h4>
                  <a 
                    href="https://www.linkedin.com/in/sai-nareen-purimetla/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary-600 dark:text-accent-400 hover:underline"
                  >
                    linkedin.com/in/sai-nareen-purimetla
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 mr-4">
                  <Github className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium">GitHub</h4>
                  <a 
                    href="https://github.com/sainareenp/onlinemarketplace" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary-600 dark:text-accent-400 hover:underline"
                  >
                    github.com/sainareenp
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="card p-6">
            <h3 className="text-xl font-semibold mb-6">Send me a message</h3>
            
            {submitMessage && (
              <div className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-md">
                {submitMessage}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-4 ">
                <div >
                <label htmlFor="name" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-secondary-300 dark:border-secondary-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-accent-400 bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-secondary-300 dark:border-secondary-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-accent-400 bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white"
                />
              </div>
               <div>
                <label htmlFor="subject" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-1">
                  Subject
                </label>
                <textarea
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-secondary-300 dark:border-secondary-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-accent-400 bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white resize-none"
                ></textarea>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-secondary-300 dark:border-secondary-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-accent-400 bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white resize-none"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`btn btn-primary w-full ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;