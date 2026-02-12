import { motion } from 'motion/react';
import { Globe, Zap, Database } from 'lucide-react';

interface Slide02Props {
  goToSlide: (index: number) => void;
}

export function Slide02({ goToSlide }: Slide02Props) {
  const cards = [
    {
      icon: Globe,
      title: 'Growing Complexity',
      description: 'Multiple functions, levels, and geographies—allocation decisions are getting harder to scale manually.'
    },
    {
      icon: Zap,
      title: 'Speed & Quality Pressure',
      description: 'Candidates expect fast, transparent processes. Managers need high-signal shortlists quickly.'
    },
    {
      icon: Database,
      title: 'AI-Ready Foundation',
      description: 'We can leverage AI for matching, but only if we have clean, standardized skill data.'
    }
  ];

  return (
    <div className="w-full h-full bg-gradient-to-b from-[#F5F5F7] to-white p-16 flex flex-col">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-5xl font-black text-[#111111] mb-4">
          Why Now?
        </h2>
        <p className="text-xl text-gray-600">
          Three forces converging
        </p>
      </motion.div>

      {/* Cards */}
      <div className="flex-1 grid grid-cols-3 gap-8">
        {cards.map((card, index) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#820AD1] to-[#9D2FE5] rounded-2xl flex items-center justify-center mb-6">
                <Icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#111111] mb-4">
                {card.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Takeaway */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-12 bg-[#820AD1]/5 border-l-4 border-[#820AD1] rounded-r-2xl p-6"
      >
        <p className="text-lg text-[#111111] font-semibold">
          💡 We need a standardized skills foundation to scale allocation quality and speed.
        </p>
      </motion.div>

      <div className="hidden">
        📝 Context: The old way doesn't scale. We have the opportunity to modernize with skills + AI.
      </div>
    </div>
  );
}
