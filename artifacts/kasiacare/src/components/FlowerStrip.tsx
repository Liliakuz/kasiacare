import { motion } from "framer-motion";

export function FlowerStrip() {
  return (
    <div className="flex justify-center items-end gap-2 md:gap-4 pt-6 px-4 pb-0 bg-primary overflow-hidden h-[100px] md:h-[150px]" aria-hidden="true">
      <motion.div 
        animate={{ y: [0, -8, 0], rotate: [-2, 2, -2] }} 
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.1 }}
      >
        <span className="text-[44px] md:text-[70px] leading-none drop-shadow-md select-none opacity-90">🌸</span>
      </motion.div>
      <motion.div 
        animate={{ y: [0, -12, 0], rotate: [3, -3, 3] }} 
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
      >
        <span className="text-[56px] md:text-[90px] leading-none drop-shadow-md select-none opacity-95">🌹</span>
      </motion.div>
      <motion.div 
        animate={{ y: [0, -10, 0], rotate: [-4, 4, -4] }} 
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
      >
        <span className="text-[44px] md:text-[70px] leading-none drop-shadow-md select-none opacity-90">🌺</span>
      </motion.div>
      <motion.div 
        animate={{ y: [0, -15, 0], rotate: [2, -2, 2] }} 
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
      >
        <span className="text-[56px] md:text-[90px] leading-none drop-shadow-md select-none opacity-95">🌻</span>
      </motion.div>
      <motion.div 
        animate={{ y: [0, -9, 0], rotate: [-3, 3, -3] }} 
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <span className="text-[44px] md:text-[70px] leading-none drop-shadow-md select-none opacity-90">🪷</span>
      </motion.div>
    </div>
  );
}
