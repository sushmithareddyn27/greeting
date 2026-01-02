import { motion } from 'motion/react';
import { ArrowLeft, Heart, Sparkles, TrendingUp, Smile, Star, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

interface WishPageProps {
  memberId: string;
  onBack: () => void;
}

const memberData: Record<string, {
  name: string;
  image: string;
  message: string;
  wishes: Array<{ icon: any; title: string; text: string }>;
  memories: string[];
  notes: Array<{ title: string; content: string }>;
}> = {
  daddy: {
    name: 'Daddy',
    image: 'https://images.unsplash.com/photo-1610894830671-e560b2a3f165?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXRoZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjcyMTA4NjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    message: 'Dear Daddy, you are my strength and inspiration. Thank you for always being there and guiding me with your wisdom. May this year bring you health, happiness, and all the success you deserve.',
    wishes: [
      { icon: Heart, title: 'Health & Wellness', text: 'May you always stay healthy and strong, full of energy and vitality.' },
      { icon: TrendingUp, title: 'Success & Growth', text: 'May all your endeavors flourish and bring you the success you dream of.' },
      { icon: Smile, title: 'Joy & Happiness', text: 'May your days be filled with laughter, joy, and precious moments.' },
      { icon: Star, title: 'Peace & Prosperity', text: 'May peace and prosperity fill your life in abundance this year.' },
    ],
    memories: [
      'https://images.unsplash.com/photo-1766808985890-e564439e39a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBjZWxlYnJhdGlvbiUyMG1lbW9yaWVzfGVufDF8fHx8MTc2NzMyMjQyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1509134072290-fffe152264c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMG1vbWVudHMlMjBmcmllbmRzfGVufDF8fHx8MTc2NzMyNDQxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1715178523440-3f7cf59e3b3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2YWNhdGlvbiUyMHRyYXZlbHxlbnwxfHx8fDE3NjczMjQ0MTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1739734963154-7a8b3c8e5944?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZWxlYnJhdGlvbiUyMHBhcnR5fGVufDF8fHx8MTc2NzIxMjA4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
    notes: [
      {
        title: 'A Special Thank You',
        content: 'Dad, your unwavering support and endless patience have shaped who I am today. Every lesson you taught me has been a guiding light. Thank you for being my hero.',
      },
      {
        title: 'Looking Forward Together',
        content: 'This year, I hope we create even more beautiful memories together. Let\'s explore new places, share more laughs, and make every moment count. Here\'s to our adventures in 2026!',
      },
      {
        title: 'My Promise to You',
        content: 'I promise to make you proud, to cherish every moment we share, and to always be there for you just as you\'ve been there for me. You mean the world to me.',
      },
    ],
  },
  mummy: {
    name: 'Mummy',
    image: 'https://images.unsplash.com/photo-1715331288074-0ad54cf3686d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RoZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjcyNTI0Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    message: 'Dear Mummy, you are my anchor and my safe haven. Your love and care have been my greatest blessings. May this year shower you with all the happiness and peace you deserve.',
    wishes: [
      { icon: Heart, title: 'Health & Wellness', text: 'May you be blessed with perfect health and endless energy throughout the year.' },
      { icon: Smile, title: 'Joy & Happiness', text: 'May your heart be filled with boundless joy and beautiful moments every day.' },
      { icon: Star, title: 'Dreams Come True', text: 'May all your wishes and dreams manifest into wonderful realities.' },
      { icon: TrendingUp, title: 'Growth & Success', text: 'May you achieve everything your heart desires and more this year.' },
    ],
    memories: [
      'https://images.unsplash.com/photo-1766808985890-e564439e39a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBjZWxlYnJhdGlvbiUyMG1lbW9yaWVzfGVufDF8fHx8MTc2NzMyMjQyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1509134072290-fffe152264c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMG1vbWVudHMlMjBmcmllbmRzfGVufDF8fHx8MTc2NzMyNDQxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1715178523440-3f7cf59e3b3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2YWNhdGlvbiUyMHRyYXZlbHxlbnwxfHx8fDE3NjczMjQ0MTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1739734963154-7a8b3c8e5944?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZWxlYnJhdGlvbiUyMHBhcnR5fGVufDF8fHx8MTc2NzIxMjA4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
    notes: [
      {
        title: 'Forever Grateful',
        content: 'Mom, your unconditional love has been my foundation. Every sacrifice you made, every prayer you offered - they have all shaped my life beautifully. I am forever grateful.',
      },
      {
        title: 'Cherished Moments',
        content: 'From our morning conversations to our late-night talks, every moment with you is a treasure. Let\'s create many more precious memories this year and beyond.',
      },
      {
        title: 'You Are My Hero',
        content: 'Your strength, kindness, and resilience inspire me every day. You are not just my mother, you are my hero, my guide, and my best friend. I love you endlessly.',
      },
    ],
  },
  puri: {
    name: 'Puri',
    image: 'https://images.unsplash.com/photo-1633077619704-89ab17af0e06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMG1hbiUyMGJyb3RoZXJ8ZW58MXx8fHwxNzY3MzI0NDE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    message: 'Hey Puri! You bring so much energy and joy into my life. May this new year bring you amazing opportunities and unforgettable adventures. Let\'s make 2026 legendary!',
    wishes: [
      { icon: TrendingUp, title: 'Career Success', text: 'May you achieve all your professional goals and reach new heights this year.' },
      { icon: Star, title: 'Adventure & Fun', text: 'May your year be filled with exciting adventures and memorable experiences.' },
      { icon: Smile, title: 'Happiness Always', text: 'May laughter and joy follow you wherever you go throughout the year.' },
      { icon: Heart, title: 'Love & Friendship', text: 'May you be surrounded by amazing people who cherish and support you.' },
    ],
    memories: [
      'https://images.unsplash.com/photo-1766808985890-e564439e39a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBjZWxlYnJhdGlvbiUyMG1lbW9yaWVzfGVufDF8fHx8MTc2NzMyMjQyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1509134072290-fffe152264c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMG1vbWVudHMlMjBmcmllbmRzfGVufDF8fHx8MTc2NzMyNDQxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1715178523440-3f7cf59e3b3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2YWNhdGlvbiUyMHRyYXZlbHxlbnwxfHx8fDE3NjczMjQ0MTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1739734963154-7a8b3c8e5944?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZWxlYnJhdGlvbiUyMHBhcnR5fGVufDF8fHx8MTc2NzIxMjA4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
    notes: [
      {
        title: 'My Favorite Partner in Crime',
        content: 'From our childhood mischief to our grown-up adventures, you\'ve always been my partner. Here\'s to more late-night talks, crazy plans, and unforgettable memories!',
      },
      {
        title: 'Proud of You',
        content: 'Watching you grow and achieve your dreams has been incredible. You inspire me with your determination and spirit. Keep shining, bro!',
      },
    ],
  },
  babai: {
    name: 'Babai',
    image: 'https://images.unsplash.com/photo-1604672840443-4f625b139ec5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHdvbWFuJTIwc2lzdGVyfGVufDF8fHx8MTc2NzMyNDQxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    message: 'Dear Babai, your kindness and warmth light up every room. May 2026 be filled with beautiful moments, success in everything you do, and endless reasons to smile.',
    wishes: [
      { icon: Heart, title: 'Love & Happiness', text: 'May your heart be filled with love and your days with endless happiness.' },
      { icon: Star, title: 'Dreams & Aspirations', text: 'May all your dreams take flight and your aspirations become reality.' },
      { icon: Smile, title: 'Joy & Laughter', text: 'May you find reasons to smile and laugh every single day of this year.' },
      { icon: TrendingUp, title: 'Success & Growth', text: 'May success follow you in all your endeavors and help you grow beautifully.' },
    ],
    memories: [
      'https://images.unsplash.com/photo-1766808985890-e564439e39a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBjZWxlYnJhdGlvbiUyMG1lbW9yaWVzfGVufDF8fHx8MTc2NzMyMjQyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1509134072290-fffe152264c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMG1vbWVudHMlMjBmcmllbmRzfGVufDF8fHx8MTc2NzMyNDQxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1715178523440-3f7cf59e3b3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2YWNhdGlvbiUyMHRyYXZlbHxlbnwxfHx8fDE3NjczMjQ0MTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1739734963154-7a8b3c8e5944?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZWxlYnJhdGlvbiUyMHBhcnR5fGVufDF8fHx8MTc2NzIxMjA4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
    notes: [
      {
        title: 'My Beautiful Soul',
        content: 'Your gentle spirit and caring nature make the world a better place. Thank you for being such an amazing presence in my life.',
      },
      {
        title: 'Wishing You Magic',
        content: 'May this year bring you magical moments, wonderful surprises, and all the love your heart can hold. You deserve the absolute best!',
      },
    ],
  },
  pinni: {
    name: 'Pinni',
    image: 'https://images.unsplash.com/photo-1661274766669-af8cce2a460b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdW50JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY3MzI0NDE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    message: 'Dear Pinni, your wisdom and love have always been a guiding light. May 2026 bring you health, prosperity, and countless moments of joy with your loved ones.',
    wishes: [
      { icon: Heart, title: 'Health & Vitality', text: 'May you enjoy excellent health and boundless energy throughout the year.' },
      { icon: Star, title: 'Peace & Serenity', text: 'May peace and tranquility fill your days and calm your nights.' },
      { icon: Smile, title: 'Family Joy', text: 'May you be surrounded by family love and create beautiful memories together.' },
      { icon: TrendingUp, title: 'Prosperity & Abundance', text: 'May abundance flow into your life in all forms this year.' },
    ],
    memories: [
      'https://images.unsplash.com/photo-1766808985890-e564439e39a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBjZWxlYnJhdGlvbiUyMG1lbW9yaWVzfGVufDF8fHx8MTc2NzMyMjQyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1509134072290-fffe152264c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMG1vbWVudHMlMjBmcmllbmRzfGVufDF8fHx8MTc2NzMyNDQxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1715178523440-3f7cf59e3b3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2YWNhdGlvbiUyMHRyYXZlbHxlbnwxfHx8fDE3NjczMjQ0MTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1739734963154-7a8b3c8e5944?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZWxlYnJhdGlvbiUyMHBhcnR5fGVufDF8fHx8MTc2NzIxMjA4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
    notes: [
      {
        title: 'A Special Bond',
        content: 'You\'ve always been more than family - you\'re a mentor, a friend, and a source of endless wisdom. Thank you for everything you\'ve taught me.',
      },
      {
        title: 'Gratitude & Love',
        content: 'Your kindness and generosity know no bounds. May this year return to you all the love and care you\'ve given to others multiplied a thousand times.',
      },
    ],
  },
  ayshu: {
    name: 'Ayshu',
    image: 'https://images.unsplash.com/photo-1662690833162-c45cae0357fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGdpcmwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjczMjQ0MTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    message: 'Sweet Ayshu! Your smile brightens every day and your spirit is contagious. May 2026 be filled with exciting discoveries, endless fun, and dreams coming true!',
    wishes: [
      { icon: Star, title: 'Dreams & Adventures', text: 'May all your dreams soar high and your adventures be extraordinary this year.' },
      { icon: Smile, title: 'Joy & Wonder', text: 'May you discover new joys and wonderful surprises every single day.' },
      { icon: Heart, title: 'Love & Friendship', text: 'May you be surrounded by friends who cherish you and love that uplifts you.' },
      { icon: TrendingUp, title: 'Growth & Learning', text: 'May you learn amazing new things and grow into the best version of yourself.' },
    ],
    memories: [
      'https://images.unsplash.com/photo-1766808985890-e564439e39a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBjZWxlYnJhdGlvbiUyMG1lbW9yaWVzfGVufDF8fHx8MTc2NzMyMjQyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1509134072290-fffe152264c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMG1vbWVudHMlMjBmcmllbmRzfGVufDF8fHx8MTc2NzMyNDQxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1715178523440-3f7cf59e3b3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2YWNhdGlvbiUyMHRyYXZlbHxlbnwxfHx8fDE3NjczMjQ0MTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1739734963154-7a8b3c8e5944?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZWxlYnJhdGlvbiUyMHBhcnR5fGVufDF8fHx8MTc2NzIxMjA4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
    notes: [
      {
        title: 'You Light Up My World',
        content: 'Your laughter is the best sound in the world! Never stop being your amazing, joyful self. The world needs more of your light!',
      },
      {
        title: 'Always Here For You',
        content: 'No matter where life takes us, I\'ll always be here cheering you on. You\'re capable of achieving anything you set your mind to. Believe in yourself!',
      },
    ],
  },
};

export function WishPage({ memberId, onBack }: WishPageProps) {
  const [expandedNote, setExpandedNote] = useState<number | null>(null);
  const data = memberData[memberId];

  if (!data) return null;

  return (
    <div className="relative w-full h-full overflow-y-auto bg-gradient-to-b from-[#0a0e27] via-[#1a1f3a] to-[#0f1229]">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* App Bar */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="sticky top-0 z-20 bg-[#0a0e27]/90 backdrop-blur-lg border-b border-yellow-400/20"
      >
        <div className="flex items-center justify-between px-4 py-4">
          <button
            onClick={onBack}
            className="p-2 rounded-full hover:bg-yellow-400/10 transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-yellow-400" />
          </button>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-semibold text-white">{data.name}</h1>
            <Heart className="w-5 h-5 text-red-400" />
          </div>
          <div className="w-10" />
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 px-5 py-6 pb-20">
        {/* Hero Section */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="mb-6"
        >
          <div className="relative mx-auto w-40 h-40 mb-4">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full blur-xl opacity-40"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
            <img
              src={data.image}
              alt={data.name}
              className="relative w-full h-full rounded-full object-cover border-4 border-yellow-400/40 shadow-xl"
            />
          </div>
          <h2 className="text-3xl font-bold text-center mb-3 bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
            Happy New Year 2026!
          </h2>
          <p className="text-gray-300 text-center leading-relaxed px-2">
            {data.message}
          </p>
        </motion.div>

        {/* Wishes Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-6"
        >
          <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-yellow-400" />
            My Wishes for You
          </h3>
          <div className="space-y-3">
            {data.wishes.map((wish, index) => {
              const Icon = wish.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="bg-gradient-to-br from-purple-900/40 to-blue-900/40 backdrop-blur-sm rounded-xl p-4 border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300"
                >
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-400/20 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-yellow-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-white mb-1">{wish.title}</h4>
                      <p className="text-sm text-gray-300 leading-relaxed">{wish.text}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Best Moments Carousel */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mb-6"
        >
          <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-400" />
            Best Moments of Last Year
          </h3>
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {data.memories.map((memory, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="flex-shrink-0"
              >
                <div className="w-32 h-32 rounded-xl overflow-hidden border-2 border-yellow-400/30 shadow-lg">
                  <img
                    src={memory}
                    alt={`Memory ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Messages Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mb-8"
        >
          <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <Heart className="w-5 h-5 text-red-400" />
            Messages from Me
          </h3>
          <div className="space-y-3">
            {data.notes.map((note, index) => (
              <motion.div
                key={index}
                initial={{ x: index % 2 === 0 ? -20 : 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
                className={`relative ${index % 2 === 0 ? 'mr-4' : 'ml-4'}`}
              >
                <div
                  className={`bg-gradient-to-br ${
                    index % 2 === 0
                      ? 'from-amber-900/40 to-yellow-900/40'
                      : 'from-purple-900/40 to-pink-900/40'
                  } backdrop-blur-sm rounded-2xl p-4 border border-yellow-400/20 shadow-lg cursor-pointer hover:border-yellow-400/40 transition-all duration-300`}
                  onClick={() => setExpandedNote(expandedNote === index ? null : index)}
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h4 className="font-semibold text-white flex-1">{note.title}</h4>
                    <motion.div
                      animate={{ rotate: expandedNote === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {expandedNote === index ? (
                        <ChevronUp className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                      )}
                    </motion.div>
                  </div>
                  <motion.div
                    initial={false}
                    animate={{
                      height: expandedNote === index ? 'auto' : 0,
                      opacity: expandedNote === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-sm text-gray-300 leading-relaxed pt-2 border-t border-yellow-400/20">
                      {note.content}
                    </p>
                  </motion.div>
                </div>
                {/* Chat bubble tail */}
                <div
                  className={`absolute top-4 ${
                    index % 2 === 0 ? '-right-2' : '-left-2'
                  } w-4 h-4 ${
                    index % 2 === 0
                      ? 'bg-gradient-to-br from-amber-900/40 to-yellow-900/40'
                      : 'bg-gradient-to-br from-purple-900/40 to-pink-900/40'
                  } transform rotate-45 border ${
                    index % 2 === 0 ? 'border-l-0 border-t-0' : 'border-r-0 border-b-0'
                  } border-yellow-400/20`}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="text-center py-6"
        >
          <p className="text-sm text-gray-400 mb-2">Made with love by</p>
          <p className="text-lg font-semibold bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
            Your Name
          </p>
        </motion.div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
