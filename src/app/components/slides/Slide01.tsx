import { motion } from 'motion/react';
import { Eye, Lightbulb, Workflow } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import nubankLogo from 'figma:asset/e439f4ee54785a2b299465aa9a3aca725ddcb82e.png';

interface Slide01Props {
  goToSlide: (index: number) => void;
}

export function Slide01({ goToSlide }: Slide01Props) {
  const buttons = [
    { label: 'See the problem', icon: Eye, slide: 1 },
    { label: 'See the solution', icon: Lightbulb, slide: 4 },
    { label: 'See how it works', icon: Workflow, slide: 9 }
  ];

  return (
    <div className="w-full h-full relative overflow-hidden bg-gradient-to-br from-[#820AD1] via-[#9D2FE5] to-[#6B0DB8]">
      {/* Background Abstract Image */}
      <div className="absolute inset-0 opacity-20">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1761798979849-ebb267341d50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW9tZXRyaWMlMjBwdXJwbGUlMjBncmFkaWVudCUyMGRlc2lnbnxlbnwxfHx8fDE3NzA5MjMxNTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Abstract Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#820AD1]/90 via-[#9D2FE5]/80 to-transparent" />

      {/* Nubank Logo - Top Center */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute top-12 left-1/2 -translate-x-1/2 z-20"
      >
        <img src={nubankLogo} alt="Nubank" className="w-24 h-24" />
      </motion.div>

      {/* Decorative geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute top-1/4 right-20 w-96 h-96 border-4 border-white rounded-full"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="absolute bottom-20 right-40 w-64 h-64 border-4 border-white rounded-3xl rotate-12"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="absolute top-1/2 right-10 w-32 h-32 bg-white rounded-full"
        />
      </div>

      {/* Content - Centered */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-16 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-8xl font-black text-white mb-6 leading-tight">
            Skills-Based<br />
            Candidate Allocation
          </h1>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-16 h-1 bg-white/80 rounded-full" />
            <p className="text-2xl text-white/90 font-semibold">
              Internal + External
            </p>
            <div className="w-16 h-1 bg-white/80 rounded-full" />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-2xl text-white/90 mb-16 max-w-3xl font-light leading-relaxed"
        >
          From spreadsheets & manual matching<br />
          → a scalable, explainable allocation engine
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex gap-6"
        >
          {buttons.map((button, index) => {
            const Icon = button.icon;
            return (
              <motion.button
                key={button.label}
                onClick={() => goToSlide(button.slide)}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                className="group bg-white text-[#820AD1] px-10 py-5 rounded-full font-bold text-lg flex items-center gap-3 hover:bg-white/95 transition-all shadow-2xl hover:shadow-3xl"
              >
                <Icon className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                {button.label}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Presenter note indicator */}
        <div className="absolute bottom-8 left-8 text-xs text-white/40 hidden">
          📝 Hook: We're moving from manual, inconsistent allocation to a scalable, skills-based system
        </div>
      </div>

      {/* Keyboard hints */}
      <div className="absolute bottom-8 right-8 text-xs text-white/50 flex items-center gap-4 z-20">
        <span>← → Navigate</span>
        <span>•</span>
        <span>Space = Next</span>
      </div>
    </div>
  );
}
