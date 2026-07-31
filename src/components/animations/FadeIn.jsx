import { motion } from 'framer-motion';

export default function FadeIn({ children, direction = 'up', delay = 0, duration = 0.5, className = '' }) {
  // Definimos de dónde viene la animación según la dirección
  const directions = {
    up: { y: 50, x: 0 },
    down: { y: -50, x: 0 },
    left: { x: -50, y: 0 },
    right: { x: 50, y: 0 },
    none: { x: 0, y: 0 }
  };

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-50px" }} // Se anima solo la primera vez que entra en pantalla
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}