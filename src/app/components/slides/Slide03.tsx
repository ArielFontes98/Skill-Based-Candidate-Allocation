import { motion } from 'motion/react';
import { AlertCircle, Clock, UserX, EyeOff } from 'lucide-react';

interface Slide03Props {
  goToSlide: (index: number) => void;
}

export function Slide03({ goToSlide }: Slide03Props) {
  return (
    <div className="w-full h-full bg-white p-16 flex flex-col">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-5xl font-black text-[#111111] mb-4">
          Current State Friction
        </h2>
        <p className="text-xl text-gray-600">
          Journey snapshot: where candidates get stuck
        </p>
      </motion.div>

      {/* Two journey lanes */}
      <div className="flex-1 grid grid-cols-2 gap-8">
        {/* External Candidate Journey */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gradient-to-br from-[#F5F5F7] to-[#E9E9EF] rounded-3xl p-8"
        >
          <h3 className="text-2xl font-bold text-[#111111] mb-6">
            External Candidate
          </h3>
          
          <div className="space-y-6">
            {/* Journey steps */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                1
              </div>
              <div>
                <p className="font-semibold text-[#111111]">Applied</p>
                <p className="text-sm text-gray-600">Submitted application + assessments</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                2
              </div>
              <div>
                <p className="font-semibold text-[#111111]">Passed Function Technical Steps</p>
                <p className="text-sm text-gray-600">Moved to hiring manager queue</p>
              </div>
            </div>

            <div className="flex items-start gap-4 relative">
              <AlertCircle className="absolute -left-2 -top-2 w-6 h-6 text-red-500" />
              <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 animate-pulse">
                !
              </div>
              <div className="flex-1 bg-red-50 border-2 border-red-300 rounded-xl p-4">
                <p className="font-bold text-red-700 mb-2 flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  LIMBO STAGE
                </p>
                <p className="text-sm text-red-600">
                  • Up to 6 months waiting<br />
                  • Repeated info requests<br />
                  • No clear timeline<br />
                  • Multiple redundant interviews
                </p>
                <p className="text-xs text-red-500 mt-2 italic">
                  Observed in interviews
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                ?
              </div>
              <div>
                <p className="font-semibold text-gray-400">Eventually allocated... or not</p>
                <p className="text-sm text-gray-400">Often loses confidence in process</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Internal Candidate Journey */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-gradient-to-br from-[#F5F5F7] to-[#E9E9EF] rounded-3xl p-8"
        >
          <h3 className="text-2xl font-bold text-[#111111] mb-6">
            Internal Candidate
          </h3>
          
          <div className="space-y-6">
            {/* Journey steps */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                1
              </div>
              <div>
                <p className="font-semibold text-[#111111]">Wants to rotate</p>
                <p className="text-sm text-gray-600">Looking for internal opportunities</p>
              </div>
            </div>

            <div className="flex items-start gap-4 relative">
              <EyeOff className="absolute -left-2 -top-2 w-6 h-6 text-orange-500" />
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 animate-pulse">
                !
              </div>
              <div className="flex-1 bg-orange-50 border-2 border-orange-300 rounded-xl p-4">
                <p className="font-bold text-orange-700 mb-2 flex items-center gap-2">
                  <UserX className="w-5 h-5" />
                  HIDDEN MARKET
                </p>
                <p className="text-sm text-orange-600">
                  • No visibility of open roles<br />
                  • Must use DMs & back channels<br />
                  • Fear of backlash from current manager<br />
                  • Unclear if skills match
                </p>
                <p className="text-xs text-orange-500 mt-2 italic">
                  Observed in interviews
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                2
              </div>
              <div>
                <p className="font-semibold text-gray-400">Hears about role (maybe)</p>
                <p className="text-sm text-gray-400">Through informal channels</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                ?
              </div>
              <div>
                <p className="font-semibold text-gray-400">Applies quietly... or stays put</p>
                <p className="text-sm text-gray-400">Often chooses to not risk it</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="hidden">
        📝 These friction points create delays, frustration, and suboptimal matches. Both journeys need transparency + speed.
      </div>
    </div>
  );
}