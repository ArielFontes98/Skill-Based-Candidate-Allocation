import { useState } from 'react';
import { motion } from 'motion/react';
import { LayoutDashboard, UserCheck, Lock, AlertCircle, CheckCircle, XCircle, MessageSquare, TrendingUp, Eye } from 'lucide-react';

interface Slide11Props {
  goToSlide: (index: number) => void;
}

export function Slide11({ goToSlide }: Slide11Props) {
  const [activeTab, setActiveTab] = useState<'ta' | 'manager' | 'internal'>('ta');

  const tabs = [
    { id: 'ta' as const, label: 'TA Dashboard', icon: LayoutDashboard },
    { id: 'manager' as const, label: 'Hiring Manager View', icon: UserCheck },
    { id: 'internal' as const, label: 'Internal Mobility Portal', icon: Lock }
  ];

  return (
    <div className="w-full h-full bg-gradient-to-b from-[#F5F5F7] to-white p-16 flex flex-col">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h2 className="text-5xl font-black text-[#111111] mb-4">
          Interactive Demo Screens
        </h2>
        <p className="text-xl text-gray-600">
          Click tabs to explore each view
        </p>
      </motion.div>

      {/* Tab Navigation */}
      <div className="flex gap-2 mb-6">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all
                ${activeTab === tab.id
                  ? 'bg-[#820AD1] text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                }
              `}
            >
              <Icon className="w-5 h-5" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <div className="flex-1 bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden">
        {activeTab === 'ta' && <TADashboard />}
        {activeTab === 'manager' && <ManagerView />}
        {activeTab === 'internal' && <InternalPortal />}
      </div>

      <div className="hidden">
        📝 These mockups show the user experience for each persona. Emphasize speed, clarity, explainability.
      </div>
    </div>
  );
}

function TADashboard() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="h-full p-8 overflow-y-auto"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-[#111111]">TA Allocation Dashboard</h3>
        <div className="flex gap-3">
          <button className="bg-[#820AD1] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#9D2FE5]">
            New Allocation Run
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-8">
        {/* Hot Positions */}
        <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <AlertCircle className="w-5 h-5 text-red-600" />
            <h4 className="font-bold text-red-900">Hot Positions (Stack Rank #1)</h4>
          </div>
          <div className="space-y-2">
            <div className="bg-white rounded-lg p-3 text-sm">
              <span className="font-semibold text-red-900">BA IC5 - Mexico</span>
              <span className="text-red-600 ml-2">(12 days open)</span>
            </div>
            <div className="bg-white rounded-lg p-3 text-sm">
              <span className="font-semibold text-red-900">DS IC6 - Brazil</span>
              <span className="text-red-600 ml-2">(8 days open)</span>
            </div>
          </div>
        </div>

        {/* Hot Candidates */}
        <div className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <AlertCircle className="w-5 h-5 text-yellow-600" />
            <h4 className="font-bold text-yellow-900">Stuck Candidates (&gt;90 days)</h4>
          </div>
          <div className="space-y-2">
            <div className="bg-white rounded-lg p-3 text-sm">
              <span className="font-semibold text-yellow-900">Carlos M. (BA IC4)</span>
              <span className="text-yellow-600 ml-2">(124 days)</span>
            </div>
            <div className="bg-white rounded-lg p-3 text-sm">
              <span className="font-semibold text-yellow-900">Ana P. (DS IC5)</span>
              <span className="text-yellow-600 ml-2">(98 days)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Ranked List for Priority Vacancy */}
      <div className="bg-gradient-to-br from-[#F5F5F7] to-[#E9E9EF] rounded-2xl p-6">
        <h4 className="font-bold text-[#111111] mb-4 flex items-center gap-2">
          <span className="w-8 h-8 bg-[#820AD1] text-white rounded-full flex items-center justify-center text-sm font-bold">
            #1
          </span>
          Top Matches: BA IC5 - Mexico
        </h4>

        <div className="space-y-3">
          {/* Candidate 1 */}
          <div className="bg-white rounded-xl p-4 border-2 border-green-300">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h5 className="font-bold text-[#111111]">Sarah Chen</h5>
                <p className="text-xs text-gray-500">External • São Paulo</p>
              </div>
              <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold">
                92% Match
              </div>
            </div>
            <p className="text-sm text-gray-700 mb-3 bg-green-50 rounded-lg p-2">
              <strong>Why:</strong> 4/4 required skills (SQL★★★★, Python★★★★, Data modeling★★★, Stakeholder mgmt★★★★) + flexible geo + recent assessment 92%
            </p>
            <div className="flex gap-2">
              <button className="flex-1 bg-[#820AD1] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#9D2FE5]">
                Allocate
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-semibold hover:bg-gray-50">
                Hold
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-semibold hover:bg-gray-50">
                Return to Pool
              </button>
            </div>
          </div>

          {/* Candidate 2 */}
          <div className="bg-white rounded-xl p-4 border border-gray-200">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h5 className="font-bold text-[#111111]">John Silva</h5>
                <p className="text-xs text-gray-500">External • Mexico City</p>
              </div>
              <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-bold">
                87% Match
              </div>
            </div>
            <p className="text-sm text-gray-700 mb-3 bg-gray-50 rounded-lg p-2">
              <strong>Why:</strong> 3/4 required skills + local to Mexico + strong work sample
            </p>
          </div>

          {/* Candidate 3 */}
          <div className="bg-white rounded-xl p-4 border border-gray-200">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h5 className="font-bold text-[#111111]">Maria Costa</h5>
                <p className="text-xs text-gray-500">Internal • Colombia</p>
              </div>
              <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-bold">
                84% Match
              </div>
            </div>
            <p className="text-sm text-gray-700 mb-3 bg-gray-50 rounded-lg p-2">
              <strong>Why:</strong> Strong internal performance + 3/4 required skills + growth trajectory
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ManagerView() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="h-full p-8 overflow-y-auto"
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-2xl font-bold text-[#111111]">Your Shortlist</h3>
          <p className="text-sm text-gray-600">BA IC5 - Mexico (Req #2847)</p>
        </div>
        <div className="bg-orange-100 border border-orange-300 text-orange-800 px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
          <AlertCircle className="w-4 h-4" />
          Respond within 48h
        </div>
      </div>

      <div className="space-y-6">
        {/* Top 3 Candidates */}
        {[
          {
            name: 'Sarah Chen',
            type: 'External',
            location: 'São Paulo',
            match: '92%',
            reason: '4/4 required skills with strong evidence (SQL★★★★, Python★★★★, Data modeling★★★, Stakeholder mgmt★★★★). Assessment score 92%. Flexible for Mexico relocation.',
            highlights: ['Strong SQL & Python', 'Recent project: Revenue attribution model', 'Available in 2-4 weeks']
          },
          {
            name: 'John Silva',
            type: 'External',
            location: 'Mexico City',
            match: '87%',
            reason: '3/4 required skills. Local to Mexico (no relocation needed). Demonstrated stakeholder management in previous fintech role.',
            highlights: ['Local candidate', 'Fintech background', 'Looker certified']
          },
          {
            name: 'Maria Costa',
            type: 'Internal',
            location: 'Colombia',
            match: '84%',
            reason: 'High internal performance rating. 3/4 required skills. Growth trajectory aligns with role expectations.',
            highlights: ['Top performer (current role)', 'Led 2 cross-geo projects', 'Seeking Mexico experience']
          }
        ].map((candidate, index) => (
          <div key={index} className="bg-gradient-to-br from-[#F5F5F7] to-[#E9E9EF] rounded-2xl p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h4 className="text-xl font-bold text-[#111111]">{candidate.name}</h4>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    candidate.type === 'Internal' 
                      ? 'bg-purple-100 text-purple-800' 
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {candidate.type}
                  </span>
                </div>
                <p className="text-sm text-gray-600">{candidate.location}</p>
              </div>
              <div className="bg-white px-4 py-2 rounded-xl border-2 border-[#820AD1]">
                <span className="text-2xl font-bold text-[#820AD1]">{candidate.match}</span>
                <p className="text-xs text-gray-500">Match</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 mb-4">
              <p className="text-sm text-gray-700 mb-3">
                <strong className="text-[#820AD1]">Why this candidate:</strong> {candidate.reason}
              </p>
              <div className="flex flex-wrap gap-2">
                {candidate.highlights.map((highlight, i) => (
                  <span key={i} className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs">
                    ✓ {highlight}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <button className="flex-1 bg-green-600 text-white px-4 py-3 rounded-xl font-semibold hover:bg-green-700 flex items-center justify-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Accept Candidate
              </button>
              <button className="px-4 py-3 border-2 border-gray-300 rounded-xl font-semibold hover:bg-gray-50 flex items-center gap-2">
                <XCircle className="w-5 h-5" />
                Reject
              </button>
              <button className="px-4 py-3 border-2 border-[#820AD1] text-[#820AD1] rounded-xl font-semibold hover:bg-[#820AD1]/5 flex items-center gap-2">
                <MessageSquare className="w-5 h-5" />
                Calibrate
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 bg-blue-50 border-2 border-blue-200 rounded-2xl p-4 text-sm text-blue-900">
        <strong>💡 Tip:</strong> If you reject a candidate, please provide a brief reason to help us improve future matches.
      </div>
    </motion.div>
  );
}

function InternalPortal() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="h-full p-8 overflow-y-auto"
    >
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <h3 className="text-2xl font-bold text-[#111111]">Your Recommended Roles</h3>
          <div className="bg-purple-100 border border-purple-300 text-purple-800 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-2">
            <Lock className="w-3 h-3" />
            CONFIDENTIAL
          </div>
        </div>
        <p className="text-sm text-gray-600">Based on your skills, performance, and career goals</p>
      </div>

      <div className="bg-purple-50 border-2 border-purple-300 rounded-2xl p-4 mb-6">
        <div className="flex items-start gap-3">
          <Lock className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-purple-900">
            <strong>Your privacy is protected:</strong> Your current manager will NOT be notified until you reach the final interview stage and choose to proceed.
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {/* Recommended Role 1 */}
        <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-300 rounded-2xl p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h4 className="text-xl font-bold text-[#111111] mb-1">Senior BA - Product Analytics</h4>
              <p className="text-sm text-gray-600">São Paulo • IC6 • Hybrid</p>
            </div>
            <div className="bg-green-600 text-white px-4 py-2 rounded-xl font-bold">
              93% Match
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 mb-4">
            <h5 className="font-bold text-green-900 mb-2 flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Why this fits you:
            </h5>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Aligns with your career goal: "Senior BA with ML integration focus"</li>
              <li>• You have 4/4 required skills + 2/3 preferred skills</li>
              <li>• Skills you'll develop: Advanced experimentation, ML evaluation</li>
              <li>• Natural progression from your current IC5 role</li>
            </ul>
          </div>

          <div className="flex gap-3">
            <button className="flex-1 bg-[#820AD1] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#9D2FE5] flex items-center justify-center gap-2">
              <CheckCircle className="w-5 h-5" />
              Apply Confidentially
            </button>
            <button className="px-6 py-3 border-2 border-gray-300 rounded-xl font-semibold hover:bg-gray-50 flex items-center gap-2">
              <Eye className="w-5 h-5" />
              View Details
            </button>
          </div>
        </div>

        {/* Recommended Role 2 */}
        <div className="bg-white border-2 border-gray-200 rounded-2xl p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h4 className="text-xl font-bold text-[#111111] mb-1">BA - Growth Team</h4>
              <p className="text-sm text-gray-600">Mexico City • IC5 • Hybrid</p>
            </div>
            <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-xl font-bold">
              86% Match
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-4 mb-4">
            <h5 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Why this fits you:
            </h5>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• 3/4 required skills match</li>
              <li>• International exposure opportunity (Mexico)</li>
              <li>• Skills you'll develop: Growth analytics, retention modeling</li>
            </ul>
          </div>

          <button className="w-full border-2 border-[#820AD1] text-[#820AD1] px-6 py-3 rounded-xl font-semibold hover:bg-[#820AD1]/5">
            Learn More
          </button>
        </div>

        {/* What to Improve Section */}
        <div className="bg-yellow-50 border-2 border-yellow-300 rounded-2xl p-6">
          <h5 className="font-bold text-yellow-900 mb-3">📈 What to improve for even better matches:</h5>
          <div className="space-y-2 text-sm">
            <div className="bg-white rounded-lg p-3">
              <strong className="text-yellow-900">Experimentation design:</strong>
              <span className="text-gray-700 ml-2">Take internal course or lead next A/B test</span>
            </div>
            <div className="bg-white rounded-lg p-3">
              <strong className="text-yellow-900">Looker proficiency:</strong>
              <span className="text-gray-700 ml-2">Get certified (opens 4 more matching roles)</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
