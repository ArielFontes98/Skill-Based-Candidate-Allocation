import { motion } from 'motion/react';
import { Heart, TrendingUp, Scale } from 'lucide-react';

interface Slide06Props {
  goToSlide: (index: number) => void;
}

export function Slide06({ goToSlide }: Slide06Props) {
  const outcomes = [
    {
      icon: Heart,
      persona: 'Candidates',
      color: 'from-pink-500 to-rose-500',
      benefits: [
        'Clarity on where they stand',
        'Fair, explainable allocation',
        'Career alignment & growth path'
      ]
    },
    {
      icon: TrendingUp,
      persona: 'Managers',
      color: 'from-blue-500 to-cyan-500',
      benefits: [
        'High-signal shortlist delivered fast',
        'Evidence-backed recommendations',
        'Clear timelines & accountability'
      ]
    },
    {
      icon: Scale,
      persona: 'TA',
      color: 'from-purple-500 to-indigo-500',
      benefits: [
        'Standardized matching process',
        'Measurable outcomes & metrics',
        'Scalable across functions & geos'
      ]
    }
  ];

  return (
    <div className="w-full h-full bg-gradient-to-br from-[#820AD1] via-[#9D2FE5] to-[#6B0DB8] p-16 flex flex-col relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center relative z-10"
      >
        <h2 className="text-6xl font-black text-white mb-4">
          Vision: North Star
        </h2>
        <p className="text-2xl text-white/80">
          One allocation ecosystem, three outcomes
        </p>
      </motion.div>

      {/* Three Pillars */}
      <div className="flex-1 flex items-center justify-center gap-8 relative z-10">
        {outcomes.map((outcome, index) => {
          const Icon = outcome.icon;
          return (
            <motion.div
              key={outcome.persona}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="flex-1 max-w-xs"
            >
              <div className="bg-white rounded-3xl p-8 shadow-2xl h-full">
                <div className={`w-16 h-16 bg-gradient-to-br ${outcome.color} rounded-2xl flex items-center justify-center mb-6 mx-auto`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-[#111111] text-center mb-6">
                  {outcome.persona}
                </h3>
                
                <div className="space-y-3">
                  {outcome.benefits.map((benefit, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 + index * 0.15 + i * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-green-600 text-sm font-bold">✓</span>
                      </div>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {benefit}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Platform Integration Visual */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mt-12 text-center relative z-10"
      >
        <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-8 py-4">
          <p className="text-white font-semibold text-lg">
            → All feeding into a single, transparent allocation platform ←
          </p>
        </div>
      </motion.div>

      <div className="hidden">
        📝 This is our North Star: fair, fast, evidence-based allocation that works for everyone.
      </div>
    </div>
  );
}
