import { motion } from 'motion/react';
import { Database, FileText, Bot, Layout } from 'lucide-react';

interface Slide07Props {
  goToSlide: (index: number) => void;
}

export function Slide07({ goToSlide }: Slide07Props) {
  const blocks = [
    {
      icon: Database,
      title: 'Skills Bank',
      subtitle: '(Candidates)',
      v1: 'Manual intake + assessments',
      details: 'Greenhouse data, stage by stage',
      future: 'Auto-enrichment from work samples',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: FileText,
      title: 'Role Skill Profile',
      subtitle: '(Vacancies)',
      v1: 'Structured form (48h deadline)',
      details: 'Cultural fit/background gaps resolved by TA/HM review',
      future: 'Smart templates + manager calibration',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Bot,
      title: 'Allocation Engine',
      subtitle: '(Matching)',
      v1: 'Rules + scoring',
      details: 'Full integration with Greenhouse pipeline',
      future: 'AI optimization with constraints',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Layout,
      title: 'Digital Product',
      subtitle: '(Workflow)',
      v1: 'TA dashboard + manager view',
      details: 'Real-time sync with Greenhouse data',
      future: 'Full candidate portal + analytics',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <div className="w-full h-full bg-white p-12 overflow-y-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-5xl font-black text-[#111111] mb-4">
          Solution: Four Building Blocks
        </h2>
        <p className="text-xl text-gray-600">
          From foundation to evolution
        </p>
      </motion.div>

      {/* Four Blocks */}
      <div className="flex-1 grid grid-cols-2 gap-8">
        {blocks.map((block, index) => {
          const Icon = block.icon;
          return (
            <motion.div
              key={block.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-[#F5F5F7] to-[#E9E9EF] rounded-3xl p-8 cursor-pointer"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${block.color} rounded-2xl flex items-center justify-center mb-6`}>
                <Icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-[#111111] mb-1">
                {block.title}
              </h3>
              <p className="text-sm text-gray-500 mb-6">
                {block.subtitle}
              </p>

              <div className="space-y-4">
                <div className="bg-white rounded-xl p-4 border-2 border-[#820AD1]">
                  <div className="text-xs font-bold text-[#820AD1] mb-2">
                    V1 (NOW)
                  </div>
                  <p className="text-sm text-[#111111] mb-2">
                    {block.v1}
                  </p>
                  <p className="text-xs text-gray-600 italic">
                    {block.details}
                  </p>
                </div>

                <div className="bg-white/50 rounded-xl p-4 border border-gray-300">
                  <div className="text-xs font-bold text-gray-500 mb-2">
                    FUTURE
                  </div>
                  <p className="text-sm text-gray-600">
                    {block.future}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom note */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-8 flex items-center justify-center gap-3"
      >
        <div className="h-1 flex-1 bg-gradient-to-r from-transparent via-[#820AD1] to-transparent rounded-full"></div>
        <p className="text-sm text-gray-500 font-medium">
          Evolution from v1 → AI-powered optimization
        </p>
        <div className="h-1 flex-1 bg-gradient-to-r from-transparent via-[#820AD1] to-transparent rounded-full"></div>
      </motion.div>

      <div className="hidden">
        📝 These four blocks work together. Start simple (rules), evolve to AI when we have data quality.
      </div>
    </div>
  );
}