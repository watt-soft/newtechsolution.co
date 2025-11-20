import { History, Target, Award, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, slideInLeft, slideInRight, staggerContainer, staggerItem } from '../../utils/animationConfig';

const AboutSection = () => {
  return (
    <motion.section
      id="about"
      className="py-20 bg-white"
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
            About Us
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-[#067C64] to-[#FFB020] mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          ></motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={slideInLeft.initial}
            whileInView={slideInLeft.whileInView}
            transition={slideInLeft.transition}
            viewport={slideInLeft.viewport}
          >
            <motion.img
              src="https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="New Tech Solution Team"
              className="rounded-2xl shadow-2xl"
              loading="lazy"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={slideInRight.initial}
            whileInView={slideInRight.whileInView}
            transition={slideInRight.transition}
            viewport={slideInRight.viewport}
          >
            {[
              "New Tech Solution is a prominent provider of solar energy solutions with over 23 years of experience in the industry. The company was initially established in 2003 under the name Asian Computer Technologies, focusing on computer accessories, and electronic items.",
              "In the following years, the company rebranded itself as CSH Technology, broadening its services to include computer networking, software development, electronic and electrical products, and solar energy systems about four years ago. Recognizing the growing potential in the solar industry, CSH Technology transitioned to specialize in solar energy projects, and subsequently, the company rebranded as New Tech Solution.",
              "Today, New Tech Solution focuses exclusively on delivering high-quality solar energy systems to both residential and commercial sectors, providing innovative and sustainable solutions for a greener future."
            ].map((text, idx) => (
              <motion.p
                key={idx}
                className="text-[#0F1724] leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                {text}
              </motion.p>
            ))}

            <motion.div
              className="bg-gradient-to-r from-[#067C64] to-[#05684F] text-white p-6 rounded-xl"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, boxShadow: '0 15px 30px rgba(6, 124, 100, 0.3)' }}
            >
              <div className="flex items-center mb-2">
                <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
                  <Award className="w-6 h-6 mr-3 text-[#FFB020]" />
                </motion.div>
                <h3 className="text-xl font-bold">Our Achievements</h3>
              </div>
              <p className="text-lg">Successfully installed 55 megawatts of solar power.</p>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="grid md:grid-cols-3 gap-8 mt-16"
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: '0px 0px -100px 0px' }}
          variants={staggerContainer}
        >
          {[
            { Icon: History, title: 'Our Heritage', text: '23+ years of excellence from IT to renewable energy solutions' },
            { Icon: Target, title: 'Our Mission', text: 'Deliver sustainable solar solutions for a greener future' },
            { Icon: TrendingUp, title: 'Our Growth', text: '400+ successful projects and 380+ satisfied customers' }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="text-center p-8 bg-[#F7F7F7] rounded-2xl"
              variants={staggerItem}
              whileHover={{
                y: -10,
                boxShadow: '0 20px 40px rgba(6, 124, 100, 0.1)',
                backgroundColor: '#ffffff'
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="bg-gradient-to-br from-[#067C64] to-[#05684F] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <item.Icon className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-xl font-bold text-[#0F1724] mb-2">{item.title}</h3>
              <p className="text-[#6B7280]">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '0px 0px -100px 0px' }}
        >
          <motion.h3
            className="text-2xl font-bold text-[#0F1724] mb-8"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our Partners
          </motion.h3>
          <motion.div
            className="flex flex-wrap justify-center items-center gap-12"
            initial="initial"
            whileInView="whileInView"
            variants={staggerContainer}
            viewport={{ once: true, margin: '0px 0px -100px 0px' }}
          >
            {['Renewa', 'CSH Technology'].map((partner, idx) => (
              <motion.a
                key={idx}
                href="#"
                className="bg-[#F7F7F7] px-8 py-4 rounded-xl hover:shadow-lg transition-shadow"
                variants={staggerItem}
                whileHover={{
                  scale: 1.1,
                  boxShadow: '0 15px 30px rgba(6, 124, 100, 0.15)',
                  backgroundColor: '#ffffff'
                }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-2xl font-bold text-[#067C64]">{partner}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
