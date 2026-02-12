import { motion } from 'motion/react';
import { FileCheck, Users, Filter, Sparkles, Eye, Send, Clock } from 'lucide-react';

interface Slide09Props {
  goToSlide: (index: number) => void;
}

export function Slide09({ goToSlide }: Slide09Props) {
  return (
    <div className="w-full h-full bg-white p-12 overflow-y-auto flex flex-col">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <h2 className="text-5xl font-black text-[#111111] mb-4">
          Role Skill Profile: What Managers Provide
        </h2>
        <p className="text-xl text-gray-600">
          Structured vacancy intake (or generic fallback)
        </p>
      </motion.div>

      <div className="flex-1 flex gap-8">
        {/* Form-like Layout */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-1 bg-gradient-to-br from-[#F5F5F7] to-[#E9E9EF] rounded-3xl p-8 overflow-y-auto"
        >
          <div className="space-y-6">
            {/* Section 1: Skills */}
            <div className="bg-white rounded-2xl p-6">
              <h4 className="font-bold text-[#111111] mb-4 flex items-center gap-2">
                <Filter className="w-5 h-5 text-[#820AD1]" />
                Required Skills (max 8)
              </h4>
              <p className="text-xs text-gray-600 mb-3 italic">
                Managers can assign different weights to each skill/tool based on priority
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-[#820AD1]/10 border border-[#820AD1] text-[#820AD1] px-3 py-1 rounded-full text-sm font-semibold">
                  SQL <span className="text-xs opacity-70">(High)</span>
                </span>
                <span className="bg-[#820AD1]/10 border border-[#820AD1] text-[#820AD1] px-3 py-1 rounded-full text-sm font-semibold">
                  Python <span className="text-xs opacity-70">(High)</span>
                </span>
                <span className="bg-[#820AD1]/10 border border-[#820AD1] text-[#820AD1] px-3 py-1 rounded-full text-sm font-semibold">
                  Data modeling <span className="text-xs opacity-70">(Medium)</span>
                </span>
                <span className="bg-[#820AD1]/10 border border-[#820AD1] text-[#820AD1] px-3 py-1 rounded-full text-sm font-semibold">
                  Stakeholder management <span className="text-xs opacity-70">(Medium)</span>
                </span>
              </div>
              
              <h4 className="font-bold text-[#111111] mb-4 flex items-center gap-2 mt-6">
                <Sparkles className="w-5 h-5 text-blue-500" />
                Preferred Skills (max 5)
              </h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-50 border border-blue-300 text-blue-700 px-3 py-1 rounded-full text-sm">
                  Looker
                </span>
                <span className="bg-blue-50 border border-blue-300 text-blue-700 px-3 py-1 rounded-full text-sm">
                  Experimentation
                </span>
                <span className="bg-blue-50 border border-blue-300 text-blue-700 px-3 py-1 rounded-full text-sm">
                  Product sense
                </span>
              </div>
            </div>

            {/* Section 2: Tools */}
            <div className="bg-white rounded-2xl p-6">
              <h4 className="font-bold text-[#111111] mb-4">Tools (max 5)</h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                  Looker
                </span>
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                  Jupyter
                </span>
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                  Git
                </span>
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                  Jira
                </span>
              </div>
            </div>

            {/* Section 3: Level & Work Model */}
            <div className="bg-white rounded-2xl p-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-[#111111] mb-3">Level</h4>
                  <select className="w-full border border-gray-300 rounded-lg p-2 text-sm">
                    <option>IC5</option>
                  </select>
                </div>
                <div>
                  <h4 className="font-bold text-[#111111] mb-3">Flexible Levels</h4>
                  <div className="flex gap-2">
                    <label className="flex items-center gap-2 text-sm">
                      <input type="checkbox" checked className="rounded" />
                      IC4
                    </label>
                    <label className="flex items-center gap-2 text-sm">
                      <input type="checkbox" className="rounded" />
                      IC6
                    </label>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-[#111111] mb-3">Office</h4>
                  <select className="w-full border border-gray-300 rounded-lg p-2 text-sm">
                    <option>São Paulo</option>
                  </select>
                </div>
                <div>
                  <h4 className="font-bold text-[#111111] mb-3">Work Model</h4>
                  <select className="w-full border border-gray-300 rounded-lg p-2 text-sm">
                    <option>Hybrid</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Section 4: Languages */}
            <div className="bg-white rounded-2xl p-6">
              <h4 className="font-bold text-[#111111] mb-3">Language Requirements</h4>
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm">
                  <input type="checkbox" checked className="rounded" />
                  Portuguese (fluent)
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <input type="checkbox" checked className="rounded" />
                  English (business level)
                </label>
              </div>
            </div>

            {/* Section 5: Growth & Success */}
            <div className="bg-white rounded-2xl p-6">
              <h4 className="font-bold text-[#111111] mb-3">Skills Developed in Role</h4>
              <p className="text-sm text-gray-700 bg-gray-50 rounded-lg p-3 mb-4">
                Advanced experimentation design, ML model evaluation, cross-geo stakeholder alignment
              </p>
              
              <h4 className="font-bold text-[#111111] mb-3">90/180-Day Success Definition</h4>
              <p className="text-sm text-gray-700 bg-gray-50 rounded-lg p-3">
                90d: Ship first insight deck and establish weekly sync rhythm<br />
                180d: Lead one end-to-end experiment and present to VP
              </p>
            </div>
          </div>
        </motion.div>

        {/* Callout Side */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-80 space-y-6"
        >
          <div className="bg-yellow-50 border-2 border-yellow-300 rounded-2xl p-6">
            <Clock className="w-8 h-8 text-yellow-600 mb-3" />
            <h4 className="font-bold text-yellow-900 mb-3">48-Hour Rule</h4>
            <p className="text-sm text-yellow-800 leading-relaxed">
              If the manager doesn't respond within 48 hours, we use a <strong>generic template</strong> (e.g., "BA IC5 standard profile") and keep the flow moving.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#820AD1] to-[#9D2FE5] rounded-2xl p-6 text-white">
            <h4 className="font-bold mb-3">Why This Matters</h4>
            <ul className="text-sm space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-xl">✓</span>
                <span>Standardized criteria across all roles</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-xl">✓</span>
                <span>Enables apples-to-apples matching</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-xl">✓</span>
                <span>Managers get candidates who truly fit</span>
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
            <p className="text-sm text-blue-900">
              💡 <strong>Pro tip:</strong> The more detail managers provide, the better the shortlist quality.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="hidden">
        📝 Structured intake ensures we can match fairly. Fallback templates keep process moving even if manager is slow.
      </div>
    </div>
  );
}