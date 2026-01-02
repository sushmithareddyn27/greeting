import { motion } from 'motion/react';
import { Sparkles, ArrowLeft } from 'lucide-react';

interface FamilyMember {
  id: string;
  name: string;
  image: string;
}

interface FamilySelectionPageProps {
  onSelectMember: (id: string) => void;
  onBack: () => void;
}

const familyMembers: FamilyMember[] = [
  {
    id: 'daddy',
    name: 'Daddy',
    image: 'daddy.jpeg',
  },
  {
    id: 'mummy',
    name: 'Mummy',
    image: 'mummy.jpeg',
  },
  {
    id: 'puri',
    name: 'Puri',
    image: 'spoorthi2.jpeg',
  },
  {
    id: 'babai',
    name: 'Babai',
    image: 'babai.jpeg',
  },
  {
    id: 'pinni',
    name: 'Pinni',
    image: 'pinni.jpeg',
  },
  {
    id: 'ayshu',
    name: 'Ayshu',
    image: 'ayshu.jpeg',
  },
];

export function FamilySelectionPage({ onSelectMember, onBack }: FamilySelectionPageProps) {
  return (
    <div className="relative w-full h-full overflow-y-auto bg-gradient-to-b from-[#0a0e27] via-[#1a1f3a] to-[#0f1229]">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            <Sparkles className="w-4 h-4 text-yellow-400" />
          </motion.div>
        ))}
      </div>

      {/* App Bar */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="sticky top-0 z-20 bg-[#0a0e27]/80 backdrop-blur-lg border-b border-yellow-400/20"
      >
        <div className="flex items-center justify-between px-4 py-4">
          <button
            onClick={onBack}
            className="p-2 rounded-full hover:bg-yellow-400/10 transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-yellow-400" />
          </button>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-semibold text-white">New Year Wishes</h1>
            <Sparkles className="w-5 h-5 text-yellow-400" />
          </div>
          <div className="w-10" />
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 px-6 py-8 pb-20">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold text-white mb-2">
            Happy New Year 2026
          </h2>
          <p className="text-gray-300">
            Dear family, each of you holds a special place in my heart.
            <br />
            Click on a name to see your personalized wishes.
          </p>
        </motion.div>

        {/* Family Grid */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          {familyMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onSelectMember(member.id)}
              className="relative cursor-pointer group"
            >
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-purple-900/30 to-blue-900/30 border-2 border-yellow-400/30 shadow-lg hover:shadow-yellow-400/20 transition-all duration-300">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-semibold text-white text-center">
                    {member.name}
                  </h3>
                </div>
                {/* Glow effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 via-yellow-400/20 to-yellow-400/0 opacity-0 group-hover:opacity-100"
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center mt-12"
        >
          <p className="text-sm text-gray-400 mb-2">Made with love by</p>
          <p className="text-lg font-semibold bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
            Sushmitha Reddy
          </p>
        </motion.div>
      </div>
    </div>
  );
}
