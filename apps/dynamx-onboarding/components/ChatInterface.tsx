"use client"

import { useState, useRef, useEffect } from 'react'

function cleanResponse(text: string): string {
  return text
    .replace(/^-{3,}$/gm, '')
    .replace(/^#{1,6}\s*/gm, '')
    .replace(/\*{1,3}(.*?)\*{1,3}/g, '$1')
    .replace(/_{1,2}(.*?)_{1,2}/g, '$1')
    .replace(/^[-*+]\s+/gm, '')
    .replace(/[\u{1F300}-\u{1F5FF}\u{1F600}-\u{1F64F}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu, '')
    .split('\n').map(l => l.trim()).join('\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
}

function MessageContent({ content }: { content: string }) {
  const paragraphs = cleanResponse(content).split('\n\n').filter(p => p.trim())
  return (
    <div>
      {paragraphs.map((paragraph, i) => {
        const lines = paragraph.split('\n').filter(l => l.trim())
        return (
          <p key={i} className={i > 0 ? 'mt-3' : ''}>
            {lines.join(' ')}
          </p>
        )
      })}
    </div>
  )
}

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
}

interface ChatInterfaceProps {
  user: { email: string; name: string }
  onQuestionAsked: () => void
}

export default function ChatInterface({ user, onQuestionAsked }: ChatInterfaceProps) {
  const firstName = user.name.split(' ')[0]
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '0',
      role: 'assistant',
      content: `Welcome, ${firstName}. I'm your DynamX onboarding assistant. Ask me anything about the training — certifications, what to expect each week, the LVL 3.1 build, interview prep, or anything else on your mind.`,
    },
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isLoading])

  const sendMessage = async () => {
    const question = input.trim()
    if (!question || isLoading) return

    const userMsg: Message = { id: Date.now().toString(), role: 'user', content: question }
    setMessages(prev => [...prev, userMsg])
    setInput('')
    setIsLoading(true)

    try {
      const res = await fetch(process.env.NEXT_PUBLIC_WEBHOOK_URL!, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: user.email, name: user.name, question }),
      })
      const data = await res.json()
      setMessages(prev => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: data.answer ?? 'Sorry, something went wrong. Please try again.',
        },
      ])
      onQuestionAsked()
    } catch {
      setMessages(prev => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: 'Unable to reach the assistant right now. Check your connection and try again.',
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <div className="flex flex-col h-full">
      {/* Message list */}
      <div className="flex-1 overflow-y-auto px-6 py-5 space-y-4">
        {messages.map(msg => (
          <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            {msg.role === 'assistant' && (
              <div className="w-7 h-7 rounded-full bg-[#22779D] flex items-center justify-center text-white text-xs font-bold mr-2.5 flex-shrink-0 mt-0.5">
                DX
              </div>
            )}
            <div
              className={`max-w-[76%] px-4 py-3 text-sm leading-relaxed rounded-2xl ${
                msg.role === 'user'
                  ? 'bg-[#3A3838] text-white rounded-tr-sm'
                  : 'bg-[#D9EAF3] text-[#333333] border-l-4 border-[#22779D] rounded-tl-sm'
              }`}
            >
              <MessageContent content={msg.content} />
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex justify-start">
            <div className="w-7 h-7 rounded-full bg-[#22779D] flex items-center justify-center text-white text-xs font-bold mr-2.5 flex-shrink-0">
              DX
            </div>
            <div className="bg-[#D9EAF3] border-l-4 border-[#22779D] px-4 py-3.5 rounded-2xl rounded-tl-sm">
              <div className="flex gap-1.5 items-center">
                <span
                  className="w-2 h-2 bg-[#22779D]/60 rounded-full animate-bounce"
                  style={{ animationDelay: '0ms' }}
                />
                <span
                  className="w-2 h-2 bg-[#22779D]/60 rounded-full animate-bounce"
                  style={{ animationDelay: '150ms' }}
                />
                <span
                  className="w-2 h-2 bg-[#22779D]/60 rounded-full animate-bounce"
                  style={{ animationDelay: '300ms' }}
                />
              </div>
            </div>
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* Input bar */}
      <div className="border-t border-gray-100 bg-white px-5 py-4">
        <div className="flex gap-3 items-end">
          <textarea
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask anything about the DynamX training..."
            rows={1}
            disabled={isLoading}
            className="flex-1 resize-none rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#22779D] focus:border-transparent placeholder:text-gray-400 text-[#333333] disabled:opacity-50"
            style={{ maxHeight: '120px' }}
          />
          <button
            onClick={sendMessage}
            disabled={isLoading || !input.trim()}
            className="bg-[#22779D] hover:bg-[#085296] disabled:opacity-40 disabled:cursor-not-allowed text-white rounded-xl p-3 transition-colors flex-shrink-0"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
            </svg>
          </button>
        </div>
        <p className="text-xs text-gray-400 mt-2 ml-1">Enter to send · Shift+Enter for new line</p>
      </div>
    </div>
  )
}
