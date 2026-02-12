import { motion } from 'motion/react';
import { ArrowRight, X } from 'lucide-react';

interface Slide05Props {
  goToSlide: (index: number) => void;
}

export function Slide05({ goToSlide }: Slide05Props) {
  return (
    <div className="w-full h-full bg-gradient-to-b from-white to-[#F5F5F7] p-12 overflow-y-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <div className="inline-block bg-[#820AD1] text-white text-sm font-bold px-4 py-2 rounded-full mb-4">
          NEW PROCESS
        </div>
        <h2 className="text-5xl font-black text-[#111111] mb-4">
          What Changed: Stack Rank Logic
        </h2>
        <p className="text-xl text-gray-600">
          From candidate-first to vacancy-priority allocation
        </p>
      </motion.div>

      {/* Before / After Diagram */}
      <div className="flex-1 grid grid-cols-2 gap-12 items-center">
        {/* BEFORE */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -top-6 left-0 bg-gray-400 text-white px-4 py-1 rounded-full text-sm font-bold">
            BEFORE
          </div>
          <div className="bg-white rounded-3xl p-8 border-2 border-gray-200 relative">
            <X className="absolute top-4 right-4 w-8 h-8 text-red-500" />
            
            <div className="space-y-6">
              <div className="bg-blue-50 border-2 border-blue-300 rounded-2xl p-6">
                <h4 className="font-bold text-blue-900 mb-2">Start: Candidate</h4>
                <p className="text-sm text-blue-700">Sarah (BA, IC5) passes screen</p>
              </div>

              <div className="flex justify-center">
                <ArrowRight className="w-6 h-6 text-gray-400" />
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
                <h4 className="font-semibold text-yellow-900 text-sm mb-3">
                  Try to find "best job" for Sarah
                </h4>
                <div className="space-y-2 text-xs text-yellow-700">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span>Job A (maybe?)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span>Job B (low priority)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span>Job C (already filled?)</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <ArrowRight className="w-6 h-6 text-gray-400" />
              </div>

              <div className="bg-red-50 border-2 border-red-300 rounded-2xl p-4">
                <h4 className="font-bold text-red-900 text-sm">Problem:</h4>
                <p className="text-xs text-red-700 mt-1">
                  No clear priority. Sarah waits while we figure it out. High-priority jobs wait too.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* AFTER */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative"
        >
          <div className="absolute -top-6 left-0 bg-[#820AD1] text-white px-4 py-1 rounded-full text-sm font-bold">
            AFTER
          </div>
          <div className="bg-gradient-to-br from-[#820AD1]/5 to-[#820AD1]/10 rounded-3xl p-8 border-2 border-[#820AD1]">
            <div className="space-y-6">
              <div className="bg-[#820AD1] text-white rounded-2xl p-6">
                <h4 className="font-bold mb-2">Start: Vacancy Priority</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-white text-[#820AD1] rounded-full flex items-center justify-center font-bold text-xs">
                      #1
                    </div>
                    <span>Critical BA role (Mexico)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-white/80 text-[#820AD1] rounded-full flex items-center justify-center font-bold text-xs">
                      #2
                    </div>
                    <span>Growth BA role (Brazil)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-white/60 text-[#820AD1] rounded-full flex items-center justify-center font-bold text-xs">
                      #3
                    </div>
                    <span>Backfill BA role (Colombia)</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <ArrowRight className="w-6 h-6 text-[#820AD1]" />
              </div>

              <div className="bg-white rounded-2xl p-6 border border-[#820AD1]/30">
                <h4 className="font-bold text-[#820AD1] mb-3">
                  For Priority #1: Select best from pool
                </h4>
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-2">
                    ✓ Sarah — 92% match
                  </div>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-2 opacity-60">
                    John — 87% match
                  </div>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-2 opacity-60">
                    Maria — 84% match
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <ArrowRight className="w-6 h-6 text-[#820AD1]" />
              </div>

              <div className="bg-green-50 border-2 border-green-400 rounded-2xl p-4">
                <h4 className="font-bold text-green-900 text-sm">Result:</h4>
                <p className="text-xs text-green-700 mt-1">
                  Top priority filled fast. Sarah allocated efficiently. Clear process for all.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Note */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-8 bg-[#820AD1]/10 border-l-4 border-[#820AD1] rounded-r-2xl p-4"
      >
        <p className="text-sm text-[#111111] font-medium mb-2">
          📌 Especially critical when multiple openings exist with different urgency levels.
        </p>
        <p className="text-sm text-[#111111] font-medium">
          🤖 <strong>Automated weekly process:</strong> System generates shortlist recommendations. TA reviews and approves before weekly dispatch to managers.
        </p>
      </motion.div>

      <div className="hidden">
        📝 This is the key process change: we optimize for vacancy priority, not candidate first.
      </div>
    </div>
  );
}