export const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
  viewport: { once: true, margin: '0px 0px -100px 0px' }
};

export const fadeInScale = {
  initial: { opacity: 0, scale: 0.95 },
  whileInView: { opacity: 1, scale: 1 },
  transition: { duration: 0.6, ease: 'easeOut' },
  viewport: { once: true, margin: '0px 0px -100px 0px' }
};

export const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  viewport: { once: true, margin: '0px 0px -100px 0px' }
};

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export const slideInLeft = {
  initial: { opacity: 0, x: -50 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
  viewport: { once: true, margin: '0px 0px -100px 0px' }
};

export const slideInRight = {
  initial: { opacity: 0, x: 50 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
  viewport: { once: true, margin: '0px 0px -100px 0px' }
};

export const hoverScale = {
  whileHover: { scale: 1.05, y: -5 },
  whileTap: { scale: 0.98 }
};

export const buttonHover = {
  whileHover: { scale: 1.02, boxShadow: '0 20px 40px rgba(6, 124, 100, 0.3)' },
  whileTap: { scale: 0.98 }
};

export const cardHover = {
  whileHover: {
    y: -10,
    boxShadow: '0 30px 60px rgba(0, 0, 0, 0.15)'
  },
  transition: { duration: 0.3 }
};

export const imageHover = {
  whileHover: { scale: 1.1 },
  transition: { duration: 0.5 }
};

export const floatingAnimation = {
  initial: { y: 0 },
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
};

export const countUpVariants = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: '0px 0px -100px 0px' }
};
