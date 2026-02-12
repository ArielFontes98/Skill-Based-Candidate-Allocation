import { motion } from 'motion/react';
import { Calendar, CheckCircle2, Circle, Clock } from 'lucide-react';

interface Slide13Props {
  goToSlide: (index: number) => void;
}

export function Slide13({ goToSlide }: Slide13Props) {
  const phases = [
    {
      phase: 'Phase 1',
      title: 'Discovery & Current-State Mapping',
      duration: '4–6 weeks',
      status: 'current',
      timeline: 'Ends late February 2026',
      items: [
        'Interviews + data inventory',
        'Define skills taxonomy MVP + role profile template',
        'Define process requirements (SLAs, decision points)',
        'Validation with TA and expertise leads (BA and DS)'
      ],
      output: 'Discovery report + MVP requirements'
    },
    {
      phase: 'Phase 2',
      title: 'Build Foundations',
      duration: '6–10 weeks',
      status: 'upcoming',
      timeline: 'Ends April 2026',
      items: [
        'Implement skills bank MVP (data model + ingestion)',
        'Implement role skill profiles (template + workflow)',
        'Build matching v0 (rules + scoring) + explainability'
      ],
      output: 'Usable internal beta with pilot roles'
    },
    {
      phase: 'Phase 3',
      title: 'Product MVP Launch',
      duration: '6–8 weeks',
      status: 'upcoming',
      timeline: 'Ends June 2026',
      items: [
        'Launch allocation workflow end-to-end for pilot',
        'Train recruiters/managers, publish playbook',
        'Dashboards + feedback loops live'
      ],
      output: 'New process + digital product v1 live for pilot'
    },
    {
      phase: 'Phase 4',
      title: 'AI Expansion & Scaling',
      duration: 'ongoing',
      status: 'future',
      timeline: 'Through end of 2026',
      items: [
        'Improve matching quality using ML + outcome feedback',
        'Expand to more functions/countries',
        'Add career growth optimization for internal candidates'
      ],
      output: 'Continuous improvement & scale'
    }
  ];

  return (
    <div className="w-full h-full bg-gradient-to-b from-white to-[#F5F5F7] p-12 overflow-y-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <h2 className="text-5xl font-black text-[#111111] mb-4">
          Project Roadmap
        </h2>
        <p className="text-xl text-gray-600 mb-4">
          Timeline & milestones for skills-based allocation
        </p>
        <div className="inline-flex items-center gap-2 bg-green-100 border-2 border-green-500 text-green-900 px-4 py-2 rounded-full">
          <CheckCircle2 className="w-5 h-5" />
          <span className="font-bold text-sm">
            Finalizing Phase 1 - late February 2026
          </span>
        </div>
      </motion.div>

      {/* Timeline */}
      <div className="space-y-8">
        {phases.map((phase, index) => {
          let iconBg = 'bg-gray-500';
          let bgGradient = 'from-gray-100 to-gray-50';
          let borderColor = 'border-gray-300';
          let badgeBg = 'bg-gray-200';
          let badgeText = 'text-gray-900';
          
          if (phase.status === 'current') {
            iconBg = 'bg-green-500';
            bgGradient = 'from-green-50 to-green-100';
            borderColor = 'border-green-500';
            badgeBg = 'bg-green-200';
            badgeText = 'text-green-900';
          } else if (phase.status === 'upcoming') {
            iconBg = 'bg-blue-500';
            bgGradient = 'from-blue-50 to-blue-100';
            borderColor = 'border-blue-300';
            badgeBg = 'bg-blue-200';
            badgeText = 'text-blue-900';
          }
          
          const StatusIcon = phase.status === 'current' ? Clock : Circle;

          return (
            <motion.div
              key={phase.phase}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`bg-gradient-to-br ${bgGradient} border-2 ${borderColor} rounded-3xl p-8`}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 ${iconBg} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                    <StatusIcon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-[#111111]">
                        {phase.phase}
                      </h3>
                      <span className={`text-sm font-bold px-3 py-1 rounded-full ${badgeBg} ${badgeText}`}>
                        {phase.duration}
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-700">
                      {phase.title}
                    </h4>
                    {phase.timeline && (
                      <p className="text-sm text-green-700 font-semibold mt-1 flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {phase.timeline}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-bold text-[#111111] mb-3 text-sm uppercase tracking-wide">
                    Key Activities
                  </h5>
                  <ul className="space-y-2">
                    {phase.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-[#820AD1] mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h5 className="font-bold text-[#111111] mb-3 text-sm uppercase tracking-wide">
                    Output
                  </h5>
                  <div className="bg-white rounded-xl p-4 border-2 border-[#820AD1]/30">
                    <p className="text-sm text-gray-800 font-semibold">
                      {phase.output}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Footer Note */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mt-8 bg-[#820AD1]/10 border-l-4 border-[#820AD1] rounded-r-2xl p-6"
      >
        <p className="text-sm text-[#111111] font-medium">
          📌 <strong>Next milestone:</strong> Create and refine model based on role profiles requested from managers (starting with 5 positions)
        </p>
      </motion.div>

      <div className="hidden">
        📝 Phased approach allows us to validate, learn, and iterate. Phase 1 complete end of Feb 2026.
      </div>
    </div>
  );
}