import { motion } from 'motion/react';
import { Award, TrendingUp, Target, Briefcase, MapPin, ArrowRight } from 'lucide-react';

interface Slide08Props {
  goToSlide: (index: number) => void;
}

export function Slide08({ goToSlide }: Slide08Props) {
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
          Skills Bank: What We Capture
        </h2>
        <p className="text-xl text-gray-600 mb-2">
          Candidate profile structure
        </p>
        <button
          onClick={() => goToSlide(10)}
          className="inline-flex items-center gap-2 text-[#820AD1] hover:text-[#9D2FE5] font-semibold text-sm group"
        >
          <span>See example profile</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </motion.div>

      <div className="flex-1 flex gap-8">
        {/* Mock Profile Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-1 bg-white rounded-3xl p-8 shadow-lg border border-gray-200"
        >
          <div className="flex items-start gap-4 mb-6 pb-6 border-b border-gray-200">
            <div className="w-16 h-16 bg-gradient-to-br from-[#820AD1] to-[#9D2FE5] rounded-2xl flex items-center justify-center text-white text-2xl font-bold">
              SC
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#111111]">Sarah Chen</h3>
              <p className="text-gray-600">Business Analyst, IC5</p>
              <p className="text-sm text-gray-500">External candidate • Brazil</p>
            </div>
          </div>

          {/* Skills Taxonomy */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Award className="w-5 h-5 text-[#820AD1]" />
              <h4 className="font-bold text-[#111111]">Skills Taxonomy</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">
                SQL ★★★★ (6mo)
              </span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">
                Python ★★★★ (3mo)
              </span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">
                Data modeling ★★★ (12mo)
              </span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">
                Stakeholder mgmt ★★★★ (ongoing)
              </span>
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-semibold">
                Looker ★★★ (8mo)
              </span>
            </div>
            <p className="text-xs text-gray-500 mt-2 italic">
              Proficiency + recency tracked
            </p>
          </div>

          {/* Evidence Signals */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="w-5 h-5 text-[#820AD1]" />
              <h4 className="font-bold text-[#111111]">Evidence Signals</h4>
            </div>
            <div className="space-y-2">
              <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-sm">
                ✓ Assessment: SQL (92%), Python (88%)
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm">
                ✓ Work sample: Revenue attribution model
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-3 text-sm">
                ✓ Internal signal: Led 3 cross-functional projects
              </div>
            </div>
          </div>

          {/* Preferences */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="w-5 h-5 text-[#820AD1]" />
              <h4 className="font-bold text-[#111111]">Preferences & Constraints</h4>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="bg-gray-50 rounded-lg p-3">
                <span className="text-gray-500">Office:</span>
                <span className="font-semibold text-[#111111] ml-2">São Paulo</span>
              </div>
              <div className="bg-gray-50 rounded-lg p-3">
                <span className="text-gray-500">Mobility:</span>
                <span className="font-semibold text-[#111111] ml-2">Flexible</span>
              </div>
              <div className="bg-gray-50 rounded-lg p-3">
                <span className="text-gray-500">Timeline:</span>
                <span className="font-semibold text-[#111111] ml-2">2-4 weeks</span>
              </div>
              <div className="bg-gray-50 rounded-lg p-3">
                <span className="text-gray-500">Type:</span>
                <span className="font-semibold text-[#111111] ml-2">External</span>
              </div>
            </div>
          </div>

          {/* Career Goals */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Target className="w-5 h-5 text-[#820AD1]" />
              <h4 className="font-bold text-[#111111]">Career Goals</h4>
            </div>
            <p className="text-sm text-gray-700 bg-[#820AD1]/5 rounded-lg p-3">
              Grow into senior BA role with focus on product analytics and ML integration
            </p>
          </div>
        </motion.div>

        {/* Callout */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-80 space-y-6"
        >
          <div className="bg-gradient-to-br from-[#820AD1] to-[#9D2FE5] rounded-3xl p-8 text-white">
            <h4 className="text-xl font-bold mb-4">Evidence &gt; Self-Report</h4>
            <p className="text-sm leading-relaxed mb-4">
              We prioritize objective signals (assessments, work samples, internal performance) over self-reported skill levels.
            </p>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-xs">
              <p className="font-semibold mb-2">Why?</p>
              <ul className="space-y-1 list-disc list-inside">
                <li>Reduces bias</li>
                <li>Improves match quality</li>
                <li>Builds manager confidence</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 border-2 border-yellow-300 rounded-2xl p-6">
            <p className="text-sm text-yellow-900 font-semibold mb-2">
              💡 For internal candidates
            </p>
            <p className="text-xs text-yellow-800">
              We can also pull performance reviews, project history, and peer feedback to enrich the profile.
            </p>
          </div>

          <div className="bg-blue-50 border-2 border-blue-300 rounded-2xl p-6">
            <p className="text-sm text-blue-900 font-semibold mb-2">
              🔍 For external candidates
            </p>
            <p className="text-xs text-blue-800">
              Need to review specific pipelines to measure each skill, especially non-technical skills (communication, leadership, stakeholder management).
            </p>
          </div>
        </motion.div>
      </div>

      <div className="hidden">
        📝 Rich candidate profiles = better matching. Evidence-based approach reduces subjectivity.
      </div>
    </div>
  );
}