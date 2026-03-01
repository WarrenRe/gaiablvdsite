import { useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Scale, 
  Ruler, 
  Moon, 
  MapPin, 
  Clock, 
  Gem, 
  CalendarDays 
} from 'lucide-react';

const IMAGES = [
  "https://raw.githack.com/WarrenRe/Model/master/sdvvvv221%60123.jpg",
  "https://raw.githack.com/WarrenRe/Model/master/asdvvff6578745fe.jpg",
  "https://raw.githack.com/WarrenRe/Model/master/ldikkrt.jpg",
  "https://raw.githack.com/WarrenRe/Model/master/ryruu5648ksksd.jpg",
  "https://raw.githack.com/WarrenRe/Model/master/sdfvvsdf324274tw.jpg",
];

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const { scrollY } = useScroll();
  const yStats = useTransform(scrollY, [0, 1000], [0, 100]);
  const yMessage = useTransform(scrollY, [0, 1000], [0, 150]);

  const nextImage = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % IMAGES.length);
  };

  const prevImage = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + IMAGES.length) % IMAGES.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
      scale: 1.1,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 500 : -500,
      opacity: 0,
      scale: 0.9,
    }),
  };

  return (
    <div className="min-h-screen bg-[#F2F2F2] text-[#1A1A1A] font-serif pt-8 p-4 md:p-8 flex flex-col items-center relative overflow-x-hidden">
      {/* Top Navigation / Header */}
      <header className="w-full max-w-7xl flex justify-end items-start mb-6 lg:mb-8 z-10">
        <motion.a 
          href="https://www.urbanmasque.com"
          target="_blank"
          rel="noopener noreferrer"
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ 
            scale: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          whileHover={{ 
            scale: 1.08,
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          }}
          className="border border-[#1A1A1A] px-3 py-1.5 text-lg tracking-[0.2em] font-bold uppercase bg-white shadow-lg cursor-pointer"
        >
          UMM
        </motion.a>
      </header>

      {/* Main Content Grid */}
      <main className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-8 lg:gap-0 items-center flex-1">
        
        {/* Left Column: Stats */}
        <motion.div 
          initial="hidden"
          animate="visible"
          style={{ y: yStats }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          className="lg:col-span-3 flex flex-col items-center lg:items-center space-y-10 order-3 lg:order-1 lg:-mr-48 z-10 pt-12 lg:pt-16"
        >
          <motion.div 
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 }
            }}
            className="flex flex-col items-center lg:items-center"
          >
            <span className="text-xl font-medium tracking-tight">8lbs 14oz</span>
            <Scale size={80} strokeWidth={1} className="-mt-1" />
          </motion.div>
          
          <motion.div 
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 }
            }}
            className="flex flex-col items-center lg:items-center"
          >
            <span className="text-xl font-medium tracking-tight">22 inches</span>
            <div className="flex items-center space-x-1 -mt-1">
              <Ruler size={24} strokeWidth={1.5} />
              <div className="h-4 w-24 border-b border-[#1A1A1A] relative">
                <div className="absolute bottom-0 left-0 h-2 border-l border-[#1A1A1A]"></div>
                <div className="absolute bottom-0 left-1/2 h-2 border-l border-[#1A1A1A]"></div>
                <div className="absolute bottom-0 right-0 h-2 border-l border-[#1A1A1A]"></div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 }
            }}
            className="flex flex-col items-center lg:items-center"
          >
            <span className="text-2xl font-medium tracking-tight">Pisces</span>
            <span className="text-sm italic opacity-70 mb-1">Aquarius Cusp</span>
            <div className="relative w-32 h-32 flex items-center justify-center -mt-2">
              <img 
                src="https://raw.githack.com/WarrenRe/Model/master/cusp-removebg-preview.png" 
                alt="Aquarius Cusp" 
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          <motion.div 
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 }
            }}
            className="flex flex-col items-center lg:items-center"
          >
            <span className="text-2xl font-medium tracking-tight">Waxing Crescent</span>
            <div className="relative w-36 h-36 flex items-center justify-center -mt-4">
              <img 
                src="https://raw.githack.com/WarrenRe/Model/master/waxcres2-removebg-preview2.png" 
                alt="Waxing Crescent" 
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Center Column: Polaroid */}
        <div className="lg:col-span-6 flex flex-col items-center order-1 lg:order-2 relative pt-20 lg:pt-0">
          <div className="relative group">
            {/* Overlapping Name */}
            <h1 className="absolute -top-16 md:-top-24 left-1/2 -translate-x-1/2 lg:-left-56 lg:translate-x-0 text-6xl md:text-8xl font-light tracking-tighter z-30 whitespace-nowrap pointer-events-none drop-shadow-[0_2px_2px_rgba(0,0,0,0.1)]">
              GAIA REID
            </h1>

            {/* Polaroid Frame */}
            <motion.div 
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 35px 60px -15px rgba(0, 0, 0, 0.1)",
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="bg-white p-4 pb-16 shadow-2xl relative cursor-pointer"
            >
              <div className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-[#F0F0F0] overflow-hidden relative">
                <AnimatePresence initial={false} custom={direction}>
                  <motion.img
                    key={currentIndex}
                    src={IMAGES[currentIndex]}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 },
                      scale: { duration: 0.4 }
                    }}
                    className="absolute inset-0 w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </AnimatePresence>

                {/* Shutter Flash Overlay */}
                <motion.div
                  key={`flash-${currentIndex}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0.8, 0] }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  className="absolute inset-0 bg-white z-20 pointer-events-none"
                />
              </div>

              {/* Navigation Arrows - Mobile Optimized Positioning */}
              <button 
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="absolute left-6 md:-left-6 top-[45%] -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 border border-[#1A1A1A] flex items-center justify-center bg-white/90 hover:bg-white transition-colors z-50 shadow-lg"
              >
                <ChevronLeft size={20} className="md:w-5 md:h-5" />
              </button>
              <button 
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="absolute right-6 md:-right-6 top-[45%] -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 border border-[#1A1A1A] flex items-center justify-center bg-white/90 hover:bg-white transition-colors z-50 shadow-lg"
              >
                <ChevronRight size={20} className="md:w-5 md:h-5" />
              </button>
              
              {/* Polaroid Bottom Info */}
              <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-4 text-xs md:text-sm">
                <div className="border-l border-[#1A1A1A] pl-4">
                  <div className="flex items-center space-x-2 opacity-60 uppercase tracking-widest text-[10px] mb-1">
                    <MapPin size={10} />
                    <span>Location</span>
                  </div>
                  <div className="italic font-medium">San Francisco, CA</div>
                </div>
                <div className="border-l border-[#1A1A1A] pl-4">
                  <div className="flex items-center space-x-2 opacity-60 uppercase tracking-widest text-[10px] mb-1">
                    <Clock size={10} />
                    <span>Time</span>
                  </div>
                  <div className="font-medium">11:53pm PST</div>
                </div>
                <div className="border-l border-[#1A1A1A] pl-4">
                  <div className="flex items-center space-x-2 opacity-60 uppercase tracking-widest text-[10px] mb-1">
                    <Gem size={10} />
                    <span>Birthstone</span>
                  </div>
                  <div className="italic font-medium">Amethyst</div>
                </div>
                <div className="border-l border-[#1A1A1A] pl-4">
                  <div className="flex items-center space-x-2 opacity-60 uppercase tracking-widest text-[10px] mb-1">
                    <CalendarDays size={10} />
                    <span>Year of the</span>
                  </div>
                  <div className="font-bold tracking-tighter">FIRE HORSE</div>
                </div>
              </div>
            </motion.div>

            {/* Coordinates below polaroid on mobile */}
            <div className="mt-8 lg:hidden">
              <motion.a 
                href="https://maps.app.goo.gl/9nF7ckQ5eDZV9e9J6" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 border border-[#1A1A1A] text-[10px] md:text-xs tracking-widest hover:bg-[#1A1A1A] hover:text-[#F2F2F2] transition-colors duration-300 whitespace-nowrap bg-white shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                37°46'57.9"N 122°26'36.1"W
              </motion.a>
            </div>
          </div>
        </div>

        {/* Right Column: Message */}
        <motion.div 
          style={{ y: yMessage }}
          className="lg:col-span-3 flex flex-col items-center lg:items-start space-y-6 order-2 lg:order-3 relative pt-8 lg:pt-0 lg:-ml-12 z-10"
        >
          {/* Date and Coordinates - Aligned with GENERATION BETA in the 'orange box' area */}
          <div className="absolute top-0 lg:-top-32 left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 flex flex-col items-center lg:items-start z-40">
            <div className="text-2xl font-medium tracking-widest mb-3">02.21.2026</div>
            <motion.a 
              href="https://maps.app.goo.gl/9nF7ckQ5eDZV9e9J6" 
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:block px-3 py-1.5 border border-[#1A1A1A] text-[10px] md:text-xs tracking-widest hover:bg-[#1A1A1A] hover:text-[#F2F2F2] transition-colors duration-300 whitespace-nowrap bg-white shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              37°46'57.9"N 122°26'36.1"W
            </motion.a>
          </div>

          <div className="flex flex-col items-center lg:items-start w-full">
            <div className="w-full max-w-xs mb-8 flex items-center justify-center overflow-hidden">
              <img 
                src="https://raw.githack.com/WarrenRe/Model/master/genbeta-removebg-preview.png" 
                alt="Generation BETA" 
                className="w-full h-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Hidden fallback text for accessibility and image failure */}
            <h2 className="hidden text-2xl md:text-3xl font-bold tracking-tighter uppercase mb-8">Generation BETA</h2>
          </div>

          <div className="space-y-6 text-sm md:text-base leading-relaxed max-w-xs">
            <p>Hello all,</p>
            <p>
              Thank you for thoughtfulness and kindness during this time. It truly means so much to our family. We appreciate the generous gifts and look forward to introducing her to each of you.
            </p>
            <div className="pt-4">
              <p className="italic">Gratefully Sarah & Warren, on behalf of,</p>
              <p className="font-bold mt-2">Gaia Olivia Reid</p>
            </div>
          </div>
        </motion.div>
      </main>

      {/* Footer / Bottom Bar */}
      <footer className="w-full max-w-7xl mt-12 mb-4 pt-4 border-t border-[#1A1A1A]/10 flex justify-center opacity-20 text-[10px] uppercase tracking-[0.3em]">
        © 2026 Reid Family Archive
      </footer>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
