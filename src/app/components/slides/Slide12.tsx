import { motion } from 'motion/react';
import { Users, Target, TrendingUp, CheckCircle } from 'lucide-react';

interface Slide12Props {
  goToSlide: (index: number) => void;
}

export function Slide12({ goToSlide }: Slide12Props) {
  return (
    <div className="w-full h-full bg-gradient-to-br from-[#820AD1] via-[#9D2FE5] to-[#6B0DB8] p-16 flex flex-col relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10 relative z-10"
      >
        <h2 className="text-5xl font-black text-white mb-4">
          Pilot & Next Steps
        </h2>
        <p className="text-xl text-white/80">
          How we validate and scale
        </p>
      </motion.div>

      <div className="flex-1 grid grid-cols-3 gap-6 relative z-10">
        {/* Pilot Scope */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-3xl p-8"
        >
          <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
            <Users className="w-7 h-7 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-[#111111] mb-6">Pilot Scope</h3>
          
          <div className="space-y-4 text-sm">
            <div className="bg-blue-50 rounded-xl p-4">
              <h4 className="font-bold text-blue-900 mb-2">Start Small</h4>
              <p className="text-blue-800">
                5 initial positions from managers<br />
                (BA + DS functions)<br />
                Brazil + Mexico
              </p>
            </div>

            <div className="bg-green-50 rounded-xl p-4">
              <h4 className="font-bold text-green-900 mb-2">Level Focus</h4>
              <p className="text-green-800">
                Interns, IC4, IC5 first<br />
                (Higher automation tolerance)
              </p>
            </div>

            <div className="bg-purple-50 rounded-xl p-4">
              <h4 className="font-bold text-purple-900 mb-2">Then Scale</h4>
              <p className="text-purple-800">
                Expand to more roles within function<br />
                IC6+ with higher human involvement
              </p>
            </div>
          </div>
        </motion.div>

        {/* Success Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white rounded-3xl p-8"
        >
          <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6">
            <TrendingUp className="w-7 h-7 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-[#111111] mb-6">Success Metrics</h3>
          
          <div className="space-y-5">
            <div>
              <h4 className="font-bold text-[#820AD1] mb-2 flex items-center gap-2">
                <Target className="w-4 h-4" />
                Candidate
              </h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• NPS score</li>
                <li>• Drop-off rate</li>
                <li>• Time in each stage</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-[#820AD1] mb-2 flex items-center gap-2">
                <Target className="w-4 h-4" />
                Manager
              </h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Time to shortlist</li>
                <li>• Time to fill</li>
                <li>• Interview-to-offer ratio</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-[#820AD1] mb-2 flex items-center gap-2">
                <Target className="w-4 h-4" />
                TA
              </h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• % complete role profiles</li>
                <li>• % candidates w/ skills evidence</li>
                <li>• Rework rate</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* The Ask */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white rounded-3xl p-8"
        >
          <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
            <CheckCircle className="w-7 h-7 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-[#111111] mb-6">Confirmation</h3>
          
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-[#820AD1]/10 to-[#820AD1]/5 border-2 border-[#820AD1] rounded-2xl p-5">
              <h4 className="font-bold text-[#820AD1] mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Alignment Check
              </h4>
              <p className="text-sm text-gray-700 mb-4">
                Can we continue working on this? Please confirm:
              </p>
              <div className="space-y-3 text-sm">
                <div className="bg-white rounded-lg p-3">
                  <strong className="text-[#111111]">✓ Process Change</strong>
                  <p className="text-gray-600 text-xs mt-1">
                    Stack Rank logic (vacancy priority → best candidate)
                  </p>
                </div>

                <div className="bg-white rounded-lg p-3">
                  <strong className="text-[#111111]">✓ V1 Scope</strong>
                  <p className="text-gray-600 text-xs mt-1">
                    4 building blocks + phased evolution (rules → AI)
                  </p>
                </div>

                <div className="bg-white rounded-lg p-3">
                  <strong className="text-[#111111]">✓ Pilot Area</strong>
                  <p className="text-gray-600 text-xs mt-1">
                    Functions/countries alignment for pilot
                  </p>
                </div>

                <div className="bg-white rounded-lg p-3">
                  <strong className="text-[#111111]">✓ Governance</strong>
                  <p className="text-gray-600 text-xs mt-1">
                    Owners for skills taxonomy, role profiles, metrics
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-10 text-center relative z-10"
      >
        <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-10 py-5">
          <p className="text-white font-semibold text-lg mb-2">
            Ready to move from spreadsheets to a scalable allocation engine?
          </p>
          <p className="text-white/70 text-sm">
            Let's align on next steps and pilot kickoff.
          </p>
        </div>
      </motion.div>

      <div className="hidden">
        📝 Clear ask: validate needs, process change, and v1 scope. Define pilot parameters and success metrics together.
      </div>
    </div>
  );
}