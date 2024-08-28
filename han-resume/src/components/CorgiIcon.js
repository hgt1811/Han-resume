import { motion } from 'framer-motion';

const CorgiIcon = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, rotate: [0, 15, -15, 0], scale: [1, 1.1, 1] }}
      transition={{ duration: 1, loop: Infinity }}
    >
      <img src="../public/corgi-run.png" alt="Corgi" />
      </motion.div>
  );
};

export default CorgiIcon;
