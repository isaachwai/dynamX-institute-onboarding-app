"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const router = useRouter()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !email.trim()) return

    setIsLoading(true)

    try {
      await fetch(process.env.NEXT_PUBLIC_WEBHOOK_URL!, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name, question: '__init__' }),
      })
    } catch {
      // Non-fatal — store user and continue
    }

    localStorage.setItem(
      'dynamx_user',
      JSON.stringify({ email, name, questionCount: 0, level: 1 })
    )

    router.push('/chat')
  }

  return (
    <div className="min-h-screen bg-[#F4F7F9] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="bg-[#3A3838] text-white px-8 py-7 rounded-t-2xl">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-8 h-8 bg-[#22779D] rounded-lg flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
              DX
            </div>
            <span className="text-white/50 text-xs tracking-widest uppercase">DynamX Institute</span>
          </div>
          <h1 className="text-2xl font-bold leading-tight">Onboarding Assistant</h1>
          <p className="text-[#D9EAF3]/60 text-sm mt-1.5 leading-relaxed">
            Ask anything about the training, certifications, and interview prep
          </p>
        </div>

        {/* Form */}
        <div className="bg-white px-8 py-8 rounded-b-2xl shadow-xl shadow-black/5">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-semibold text-[#3A3838] uppercase tracking-wider mb-2">
                Full Name
              </label>
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Your full name"
                required
                className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#22779D] focus:border-transparent text-[#333333] placeholder:text-gray-400"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#3A3838] uppercase tracking-wider mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#22779D] focus:border-transparent text-[#333333] placeholder:text-gray-400"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading || !name.trim() || !email.trim()}
              className="w-full bg-[#22779D] hover:bg-[#085296] disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-lg transition-colors text-sm mt-2"
            >
              {isLoading ? 'Entering...' : 'Enter the Portal →'}
            </button>
          </form>

          <p className="text-center text-xs text-gray-400 mt-6">
            DynamX Institute · Power Platform Consulting Training
          </p>
        </div>
      </div>
    </div>
  )
}
