"use client"

import { LEVELS, getLevel, getNextLevel } from '@/lib/levels'
import LevelBadge from './LevelBadge'

const IMPACT_BLUE = '#0ABFFF'

const levelIcons: Record<number, React.ReactNode> = {
  1: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 flex-shrink-0">
      {/* Bolt — the spark of starting */}
      <path d="M11 2L2 14h9l-2 8 13-14h-9z" />
    </svg>
  ),
  2: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 flex-shrink-0">
      {/* Flame — building momentum */}
      <path d="M12 2C12 2 5 10 5 15a7 7 0 0014 0c0-5-7-13-7-13z" />
    </svg>
  ),
  3: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 flex-shrink-0">
      {/* Diamond — precision and value */}
      <path d="M12 2L2 12L12 22L22 12L12 2Z" />
    </svg>
  ),
  4: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 flex-shrink-0">
      {/* Star — excellence */}
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  ),
  5: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 flex-shrink-0">
      {/* Crown — elite mastery */}
      <path d="M2 20h20v2H2v-2zm0-7l4-7 4 5 3-7 3 7 4-5 4 7H2z" />
    </svg>
  ),
}

interface GamificationPanelProps {
  questionCount: number
  name: string
}

export default function GamificationPanel({ questionCount, name }: GamificationPanelProps) {
  const current = getLevel(questionCount)
  const next = getNextLevel(questionCount)

  const xpProgress = next
    ? Math.round(((questionCount - current.minQ) / (next.minQ - current.minQ)) * 100)
    : 100

  const encouragement =
    questionCount === 0
      ? 'Ask your first question to earn XP and start levelling up.'
      : questionCount < 5
      ? 'Good start. Keep asking questions to reach Practitioner.'
      : questionCount < 15
      ? 'You are building momentum. Consultant level is within reach.'
      : 'Deep engagement. Keep going — every question counts.'

  return (
    <div className="flex flex-col h-full bg-[#3A3838] text-white overflow-y-auto">
      {/* Student header */}
      <div className="px-6 pt-6 pb-5 border-b border-white/10">
        <p className="text-[#D9EAF3]/50 text-xs uppercase tracking-widest mb-1">Student</p>
        <h2 className="text-white font-semibold text-base truncate">{name}</h2>
      </div>

      {/* Current level */}
      <div className="px-6 py-5 border-b border-white/10">
        <p className="text-[#D9EAF3]/50 text-xs uppercase tracking-widest mb-3">Current Level</p>
        <LevelBadge level={current} size="lg" />
        <p className="text-[#D9EAF3]/40 text-xs mt-2">{current.label}</p>
      </div>

      {/* XP progress */}
      <div className="px-6 py-5 border-b border-white/10">
        <div className="flex justify-between text-xs text-[#D9EAF3]/50 mb-2">
          <span>{questionCount} questions asked</span>
          {next && <span>/{next.minQ} for {next.name}</span>}
        </div>
        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-700 ease-out"
            style={{ width: `${xpProgress}%`, backgroundColor: IMPACT_BLUE }}
          />
        </div>
        <p className="text-[#D9EAF3]/40 text-xs mt-2">
          {next
            ? `${next.minQ - questionCount} more to unlock ${next.name}`
            : 'Maximum level reached — DynamX Elite!'}
        </p>
      </div>

      {/* Encouragement */}
      <div className="px-6 py-5 border-b border-white/10">
        <div className="bg-[#22779D]/15 border border-[#22779D]/25 rounded-lg p-3">
          <p className="text-[#D9EAF3]/80 text-xs leading-relaxed">{encouragement}</p>
        </div>
      </div>

      {/* Level timeline */}
      <div className="px-6 py-5 flex-1">
        <p className="text-[#D9EAF3]/50 text-xs uppercase tracking-widest mb-5">Progress Path</p>
        <div>
          {LEVELS.map((lvl, i) => {
            const unlocked = questionCount >= lvl.minQ
            const isCurrent = lvl.level === current.level
            return (
              <div key={lvl.level} className="flex items-start gap-3">
                <div className="flex flex-col items-center flex-shrink-0">
                  <div
                    className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${
                      isCurrent
                        ? 'ring-2 ring-offset-2 ring-offset-[#3A3838]'
                        : ''
                    } ${unlocked ? 'border-transparent' : 'border-white/20'}`}
                    style={
                      unlocked
                        ? { backgroundColor: lvl.color, ...(isCurrent ? { ringColor: lvl.color } : {}) }
                        : {}
                    }
                  >
                    {unlocked && (
                      <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                  {i < LEVELS.length - 1 && (
                    <div
                      className="w-px flex-1 min-h-6 mt-0.5 transition-all duration-500"
                      style={{ backgroundColor: unlocked ? lvl.color + '50' : 'rgba(255,255,255,0.08)' }}
                    />
                  )}
                </div>
                <div className="pb-5">
                  <div className="flex items-center gap-2">
                    <span
                      className="flex-shrink-0"
                      style={{ color: unlocked ? (isCurrent ? IMPACT_BLUE : lvl.color) : 'rgba(255,255,255,0.2)' }}
                    >
                      {levelIcons[lvl.level]}
                    </span>
                    <span className={`text-sm font-medium ${unlocked ? 'text-white' : 'text-white/30'}`}>
                      {lvl.name}
                    </span>
                    {isCurrent && (
                      <span
                        className="text-xs px-1.5 py-0.5 rounded font-medium"
                        style={{ backgroundColor: lvl.color + '25', color: lvl.color }}
                      >
                        Now
                      </span>
                    )}
                  </div>
                  <p className={`text-xs mt-0.5 ${unlocked ? 'text-white/40' : 'text-white/20'}`}>
                    {lvl.minQ === 0 ? 'Start here' : `${lvl.minQ} questions`}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
