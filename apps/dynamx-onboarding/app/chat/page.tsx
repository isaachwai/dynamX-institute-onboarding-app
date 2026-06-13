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
          <span className="text-white/50 text-sm">Onboarding Assistant</span>
        </div>
        <button
          onClick={handleSignOut}
          className="text-white/40 hover:text-white/70 text-xs transition-colors"
        >
          Sign out
        </button>
      </header>

      {/* Body */}
      <div className="flex flex-1 overflow-hidden">
        {/* Chat panel */}
        <div className="flex flex-col bg-white overflow-hidden" style={{ width: '65%' }}>
          <ChatInterface user={user} onQuestionAsked={handleQuestionAsked} />
        </div>

        {/* Gamification sidebar */}
        <div className="flex-shrink-0 overflow-hidden border-l border-white/10" style={{ width: '35%' }}>
          <GamificationPanel questionCount={user.questionCount} name={user.name} />
        </div>
      </div>
    </div>
  )
}
