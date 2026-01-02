import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

interface LandingPageProps {
  onEnter: () => void;
}

export function LandingPage({ onEnter }: LandingPageProps) {
  return (
    <div className="relative w-full h-full overflow-hidden bg-gradient-to-b from-[#0a0e27] via-[#1a1f3a] to-[#0f1229]">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Fireworks Animation */}
      <motion.div
        className="absolute top-20 right-10"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      >
        <Sparkles className="w-8 h-8 text-yellow-400" />
      </motion.div>

      <motion.div
        className="absolute top-40 left-10"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          delay: 1,
        }}
      >
        <Sparkles className="w-6 h-6 text-amber-400" />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-8">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="relative">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full blur-xl opacity-50"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
            <img
              src="https://images.unsplash.com/photo-1638996030249-abc99a735463?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHBlcnNvbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NzI1OTczNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Your photo"
              className="relative w-48 h-48 rounded-full object-cover border-4 border-yellow-400/50 shadow-2xl"
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 bg-clip-text text-transparent"
        >
          Happy New Year
        </motion.h1>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-7xl font-bold text-white mb-8"
        >
          2026
        </motion.div>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-gray-300 text-center mb-12 px-4"
        >
          A special message for my beloved family
        </motion.p>

        <motion.button
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onEnter}
          className="relative px-12 py-4 bg-gradient-to-r from-yellow-400 to-amber-500 text-gray-900 rounded-full shadow-lg overflow-hidden group"
        >
          <motion.div
            className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20"
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
          />
          <span className="relative font-semibold flex items-center gap-2">
            Click to Enter
            <Sparkles className="w-5 h-5" />
          </span>
        </motion.button>
      </div>
    </div>
  );
}
