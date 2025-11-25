import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, slideInLeft, slideInRight, staggerContainer, staggerItem } from '../../utils/animationConfig';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <motion.section
      id="contact"
      className="py-20 bg-[#F7F7F7]"
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true, margin: '0px 0px -100px 0px' }}
      variants={staggerContainer}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" variants={staggerItem}>
          <motion.h2
            className="text-4xl font-bold text-[#0F1724] mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Contact Us
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-[#067C64] to-[#FFB020] mx-auto mb-4"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          ></motion.div>
          <motion.p
            className="text-[#6B7280] text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Get in touch with us for your solar energy needs. We're here to help you make the
            switch to clean energy.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          <motion.div
            initial={slideInLeft.initial}
            whileInView={slideInLeft.whileInView}
            transition={slideInLeft.transition}
            viewport={slideInLeft.viewport}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-lg p-8 mb-8"
              whileHover={{
                boxShadow: '0 20px 40px rgba(6, 124, 100, 0.15)',
                transition: { duration: 0.3 }
              }}
            >
              <h3 className="text-2xl font-bold text-[#0F1724] mb-6">Get in Touch</h3>

              <motion.div
                className="grid md:grid-cols-2 gap-5"
                initial="initial"
                whileInView="whileInView"
                variants={staggerContainer}
                viewport={{ once: true }}
              >
                {[
                  { Icon: Phone, title: 'Phone', items: ['0357 300 345', '0767 796 422'] },
                  { Icon: Mail, title: 'Email', items: ['info@newtechsolution.co', 'sales@newtechsolution.co'] },
                  { Icon: MapPin, title: 'Address', items: ['470A, Meepitiya', 'Kegalle, Sri Lanka'] },
                  {
                    Icon: Clock, title: 'Business Hours', items: ['Mon - Fri : 9:00 - 18:00', 'Sat : 9:00 - 17:00']
                  }
                ].map((contact, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-start"
                    variants={staggerItem}
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="bg-gradient-to-br from-[#067C64] to-[#05684F] p-3 rounded-lg flex-shrink-0"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <contact.Icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-[#0F1724] mb-1">{contact.title}</h4>
                      {contact.items.map((item, i) => (
                        <p key={i} className="text-[#6B7280]">{item}</p>
                      ))}
                    </div>
                  </motion.div>
                ))
                }
              </motion.div>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl shadow-lg overflow-hidden h-80"
              whileHover={{
                boxShadow: '0 20px 40px rgba(6, 124, 100, 0.15)',
                transition: { duration: 0.3 }
              }}
            >
              {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d989.4714961041507!2d80.35513966668857!3d7.25381533923149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae31300108c31d5%3A0x180b683a2600527a!2sNEW%20TECH%20SOLUTION%20(PVT)%20LTD!5e0!3m2!1sen!2slk!4v1764069201170!5m2!1sen!2slk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d989.4714961041507!2d80.35513966668857!3d7.25381533923149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae31300108c31d5%3A0x180b683a2600527a!2sNEW%20TECH%20SOLUTION%20(PVT)%20LTD!5e0!3m2!1sen!2slk!4v1764069201170!5m2!1sen!2slk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="New Tech Solution Location"
              ></iframe>
            </motion.div>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl shadow-lg p-8"
            initial={slideInRight.initial}
            whileInView={slideInRight.whileInView}
            transition={slideInRight.transition}
            viewport={slideInRight.viewport}
            whileHover={{
              boxShadow: '0 20px 40px rgba(6, 124, 100, 0.15)',
              transition: { duration: 0.3 }
            }}
          >
            <h3 className="text-2xl font-bold text-[#0F1724] mb-6">Send us a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {[
                { type: 'text', id: 'name', label: 'Full Name *', placeholder: 'John Doe' },
                { type: 'email', id: 'email', label: 'Email Address *', placeholder: 'john@example.com' },
                { type: 'tel', id: 'phone', label: 'Phone Number *', placeholder: '+94 77 123 4567' }
              ].map((field, idx) => (
                <motion.div
                  key={field.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor={field.id} className="block text-sm font-semibold text-[#0F1724] mb-2">
                    {field.label}
                  </label>
                  <motion.input
                    type={field.type}
                    id={field.id}
                    name={field.id}
                    value={formData[field.id as keyof typeof formData]}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#067C64] focus:border-transparent outline-none transition-all"
                    placeholder={field.placeholder}
                    whileFocus={{ scale: 1.01, boxShadow: '0 10px 20px rgba(6, 124, 100, 0.1)' }}
                  />
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <label htmlFor="message" className="block text-sm font-semibold text-[#0F1724] mb-2">
                  Message *
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#067C64] focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell us about your solar energy needs..."
                  whileFocus={{ scale: 1.01, boxShadow: '0 10px 20px rgba(6, 124, 100, 0.1)' }}
                />
              </motion.div>

              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-[#067C64] to-[#05684F] hover:from-[#05684F] hover:to-[#044839] text-white font-semibold py-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center"
                whileHover={{ scale: 1.02, boxShadow: '0 20px 40px rgba(6, 124, 100, 0.3)', y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
