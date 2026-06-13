"use client"

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { getLevel } from '@/lib/levels'
import ChatInterface from '@/components/ChatInterface'
import GamificationPanel from '@/components/GamificationPanel'

interface DynamxUser {
  email: string
  name: string
  questionCount: number
  level: number
}

export default function ChatPage() {
  const router = useRouter()
  const [user, setUser] = useState<DynamxUser | null>(null)
  const [drawerOpen, setDrawerOpen] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('dynamx_user')
    if (!stored) {
      router.push('/')
      return
    }
    try {
      setUser(JSON.parse(stored))
    } catch {
      router.push('/')
    }
  }, [router])

  const handleQuestionAsked = () => {
    setUser(prev => {
      if (!prev) return prev
      const newCount = prev.questionCount + 1
      const newLevel = getLevel(newCount).level
      const updated = { ...prev, questionCount: newCount, level: newLevel }
      localStorage.setItem('dynamx_user', JSON.stringify(updated))
      return updated
    })
  }

  const handleSignOut = () => {
    localStorage.removeItem('dynamx_user')
    router.push('/')
  }

  if (!user) return null

  return (
    <div className="h-screen flex flex-col">
      {/* Top bar */}
      <header className="bg-[#3A3838] text-white px-6 py-3 flex items-center justify-between flex-shrink-0 z-10">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 bg-[#22779D] rounded-md flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
            DX
          </div>
          <span className="font-semibold text-sm">DynamX Institute</span>
          <span className="text-white/25 select-none">·</span>
          <span className="text-white/50 text-sm hidden sm:inline">Onboarding Assistant</span>
        </div>
        <div className="flex items-center gap-3">
          {/* Mobile-only: ambient level indicator */}
          <span className="lg:hidden text-xs text-white/50 font-medium">
            Lvl {user.level}
          </span>
          {/* Mobile-only: hamburger to open progress drawer */}
          <button
            className="lg:hidden text-white/60 hover:text-white p-1 transition-colors"
            onClick={() => setDrawerOpen(true)}
            aria-label="Open progress panel"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
              <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <button
            onClick={handleSignOut}
            className="text-white/40 hover:text-white/70 text-xs transition-colors"
          >
            Sign out
          </button>
        </div>
      </header>

      {/* Body */}
      <div className="flex flex-1 overflow-hidden relative">

        {/* Chat panel — full width on mobile, 65% on desktop */}
        <div className="flex-1 flex flex-col bg-white overflow-hidden">
          <ChatInterface user={user} onQuestionAsked={handleQuestionAsked} />
        </div>

        {/* Backdrop — fades behind drawer on mobile only */}
        <div
          className={`absolute inset-0 bg-black/60 z-40 transition-opacity duration-300 lg:hidden ${
            drawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setDrawerOpen(false)}
        />

        {/* Gamification panel — slide-in drawer on mobile, static sidebar on desktop */}
        <aside
          className={[
            'absolute inset-y-0 right-0 z-50 w-[85vw] max-w-xs',
            'transition-transform duration-300 ease-in-out',
            drawerOpen ? 'translate-x-0' : 'translate-x-full',
            'lg:static lg:translate-x-0 lg:w-[35%] lg:flex-shrink-0',
            'overflow-hidden border-l border-white/10',
          ].join(' ')}
        >
          {/* Close button — mobile only */}
          <button
            className="lg:hidden absolute top-4 left-4 z-10 text-white/50 hover:text-white transition-colors"
            onClick={() => setDrawerOpen(false)}
            aria-label="Close panel"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
              <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <GamificationPanel questionCount={user.questionCount} name={user.name} />
        </aside>

      </div>
    </div>
  )
}
