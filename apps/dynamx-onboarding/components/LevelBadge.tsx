"use client"

import type { Level } from '@/lib/levels'

interface LevelBadgeProps {
  level: Level
  size?: 'sm' | 'md' | 'lg'
}

export default function LevelBadge({ level, size = 'md' }: LevelBadgeProps) {
  const sizeClasses = {
    sm: 'text-xs px-2 py-0.5 gap-1',
    md: 'text-sm px-3 py-1 gap-1.5',
    lg: 'text-base px-4 py-1.5 gap-2',
  }

  return (
    <span
      className={`inline-flex items-center rounded-full font-semibold ${sizeClasses[size]}`}
      style={{
        backgroundColor: level.color + '20',
        color: level.color,
        border: `1px solid ${level.color}50`,
      }}
    >
      <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: level.color }} />
      Lvl {level.level} · {level.name}
    </span>
  )
}
