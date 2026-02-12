import { motion } from 'motion/react';
import { ArrowRight, GitBranch } from 'lucide-react';

interface Slide10Props {
  goToSlide: (index: number) => void;
}

export function Slide10({ goToSlide }: Slide10Props) {
  return (
    <div className="w-full h-full bg-gradient-to-b from-white to-[#F5F5F7] p-12 overflow-y-auto flex flex-col">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <h2 className="text-5xl font-black text-[#111111] mb-4">
          How It Works: End-to-End Flow
        </h2>
        <p className="text-xl text-gray-600">
          From intake to allocation in 6 steps • <span className="font-bold text-[#820AD1]">Weekly process</span>
        </p>
      </motion.div>

      {/* Flow Diagram */}
      <div className="flex-1 flex flex-col justify-center">
        <div className="bg-white rounded-3xl p-10 shadow-lg border border-gray-200">
          <div className="space-y-6">
            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex items-start gap-6"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[#820AD1] to-[#9D2FE5] rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                1
              </div>
              <div className="flex-1 pt-2">
                <h4 className="font-bold text-[#111111] mb-2">Intake role profile</h4>
                <p className="text-sm text-gray-600">
                  Manager fills structured form (or we use generic template after 48h)
                </p>
              </div>
            </motion.div>

            <div className="flex justify-center">
              <ArrowRight className="w-6 h-6 text-gray-300 rotate-90" />
            </div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex items-start gap-6"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[#820AD1] to-[#9D2FE5] rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                2
              </div>
              <div className="flex-1 pt-2">
                <h4 className="font-bold text-[#111111] mb-2">Ingest candidate pool</h4>
                <p className="text-sm text-gray-600">
                  Pull internal candidates + external applicants with complete skill profiles
                </p>
              </div>
            </motion.div>

            <div className="flex justify-center">
              <ArrowRight className="w-6 h-6 text-gray-300 rotate-90" />
            </div>

            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex items-start gap-6"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[#820AD1] to-[#9D2FE5] rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                3
              </div>
              <div className="flex-1 pt-2">
                <h4 className="font-bold text-[#111111] mb-2">Hard filters</h4>
                <p className="text-sm text-gray-600">
                  Level compatibility, office/geo, language requirements (immediate disqualification if not met)
                </p>
              </div>
            </motion.div>

            <div className="flex justify-center">
              <ArrowRight className="w-6 h-6 text-gray-300 rotate-90" />
            </div>

            {/* Step 4 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="flex items-start gap-6"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[#820AD1] to-[#9D2FE5] rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                4
              </div>
              <div className="flex-1 pt-2">
                <h4 className="font-bold text-[#111111] mb-2">Matching score + explanations</h4>
                <p className="text-sm text-gray-600">
                  Precomputed skill match (re-rank in &lt;10s when new vacancy opens)
                </p>
              </div>
            </motion.div>

            <div className="flex justify-center">
              <ArrowRight className="w-6 h-6 text-gray-300 rotate-90" />
            </div>

            {/* Step 5 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="flex items-start gap-6"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[#820AD1] to-[#9D2FE5] rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                5
              </div>
              <div className="flex-1 pt-2">
                <h4 className="font-bold text-[#111111] mb-2">TA review & allocate</h4>
                <p className="text-sm text-gray-600">
                  Human-in-the-loop: TA reviews top matches, considers context, makes final decision
                </p>
              </div>
            </motion.div>

            <div className="flex justify-center">
              <ArrowRight className="w-6 h-6 text-gray-300 rotate-90" />
            </div>

            {/* Step 6 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="flex items-start gap-6"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[#820AD1] to-[#9D2FE5] rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                6
              </div>
              <div className="flex-1 pt-2">
                <h4 className="font-bold text-[#111111] mb-2">Manager receives top 3 + responds (48h SLA)</h4>
                <p className="text-sm text-gray-600">
                  Accept candidate / Reject (with reason) / Request calibration call
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Fork/Special Cases */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mt-8 grid grid-cols-2 gap-6"
      >
        <div className="bg-green-50 border-2 border-green-300 rounded-2xl p-6">
          <GitBranch className="w-6 h-6 text-green-600 mb-2" />
          <h4 className="font-bold text-green-900 mb-2">Intern / IC4 / IC5</h4>
          <p className="text-sm text-green-800">
            Higher automation tolerance. Faster flow. Single HM interview when possible.
          </p>
        </div>
        <div className="bg-orange-50 border-2 border-orange-300 rounded-2xl p-6">
          <GitBranch className="w-6 h-6 text-orange-600 mb-2" />
          <h4 className="font-bold text-orange-900 mb-2">IC5+ / IC6+</h4>
          <p className="text-sm text-orange-800">
            Require conversation + calibration with interviewer/manager. More human touch.
          </p>
        </div>
      </motion.div>

      <div className="hidden">
        📝 Clear, repeatable process. Human oversight at critical points. Speed where it's safe; judgment where it matters.
      </div>
    </div>
  );
}