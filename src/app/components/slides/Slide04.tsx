import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { UserCircle, Users, Target, Briefcase, ChevronDown } from 'lucide-react';

interface Slide04Props {
  goToSlide: (index: number) => void;
}

export function Slide04({ goToSlide }: Slide04Props) {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const personas = [
    {
      id: 'external',
      icon: UserCircle,
      title: 'External Candidate',
      color: 'from-blue-500 to-blue-600',
      pains: [
        'Opaque allocation—no visibility into where I stand',
        'Asked for same info multiple times across different stages',
        'Long "limbo" after passing initial screen (up to 6 months)'
      ]
    },
    {
      id: 'internal',
      icon: Users,
      title: 'Internal Candidate',
      color: 'from-teal-500 to-teal-600',
      pains: [
        'No visibility of open roles that match my skills',
        'Fear of backlash from current manager for exploring rotation',
        'Must use DMs and back channels to learn about opportunities'
      ]
    },
    {
      id: 'ta',
      icon: Target,
      title: 'TA Team',
      color: 'from-purple-500 to-purple-600',
      pains: [
        'Manual cross-referencing across multiple spreadsheets',
        'Jobs & candidates tracked by individual TA—hard to see the full picture',
        'Context lost when recruiter changes or job scope evolves',
        'Inconsistent criteria—hard to prioritize fairly',
        'Candidates stuck in pipeline with weak feedback loops'
      ]
    },
    {
      id: 'manager',
      icon: Briefcase,
      title: 'Hiring Manager',
      color: 'from-orange-500 to-orange-600',
      pains: [
        'Low-fit shortlists—too much time filtering out poor matches',
        'Unclear timelines—must nudge HR repeatedly to move',
        'No real-time view of candidate pipeline or status'
      ]
    }
  ];

  return (
    <div className="w-full h-full bg-white p-16 flex flex-col">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <h2 className="text-5xl font-black text-[#111111] mb-4">
          Pain Points by Persona
        </h2>
        <p className="text-xl text-gray-600">
          Click each card to expand
        </p>
      </motion.div>

      {/* Interactive Persona Cards */}
      <div className="flex-1 grid grid-cols-2 gap-6">
        {personas.map((persona, index) => {
          const Icon = persona.icon;
          const isExpanded = expandedCard === persona.id;
          
          return (
            <motion.div
              key={persona.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
              className="relative"
            >
              <button
                onClick={() => setExpandedCard(isExpanded ? null : persona.id)}
                className="w-full h-full bg-gradient-to-br from-[#F5F5F7] to-[#E9E9EF] rounded-3xl p-6 hover:shadow-lg transition-all text-left group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-14 h-14 bg-gradient-to-br ${persona.color} rounded-2xl flex items-center justify-center`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className={`w-6 h-6 ${isExpanded ? 'text-[#820AD1]' : 'text-gray-400'} group-hover:text-[#820AD1]`} />
                  </motion.div>
                </div>
                
                <h3 className="text-2xl font-bold text-[#111111] mb-2">
                  {persona.title}
                </h3>
                
                {!isExpanded && (
                  <p className="text-sm text-gray-500 italic">
                    Click to reveal top pains
                  </p>
                )}

                {/* Expanded content */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 space-y-3"
                    >
                      {persona.pains.map((pain, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.2, delay: i * 0.1 }}
                          className="flex items-start gap-3 bg-white rounded-xl p-3"
                        >
                          <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-red-600 text-xs font-bold">!</span>
                          </div>
                          <p className="text-sm text-[#111111] leading-relaxed">
                            {pain}
                          </p>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          );
        })}
      </div>

      <div className="hidden">
        📝 Each persona has distinct pain points. The solution must address all four.
      </div>
    </div>
  );
}