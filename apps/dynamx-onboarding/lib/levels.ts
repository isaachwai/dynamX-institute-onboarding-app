export const LEVELS = [
  { level: 1, name: 'Foundation',   minQ: 0,  color: '#6B7280', label: 'Getting Started' },
  { level: 2, name: 'Practitioner', minQ: 5,  color: '#B45309', label: 'Building Knowledge' },
  { level: 3, name: 'Consultant',   minQ: 15, color: '#475569', label: 'Deep Engagement' },
  { level: 4, name: 'Senior',       minQ: 30, color: '#D97706', label: 'Power User' },
  { level: 5, name: 'Partner',      minQ: 50, color: '#7C3AED', label: 'DynamX Elite' },
]

export type Level = typeof LEVELS[number]

export function getLevel(count: number): Level {
  return [...LEVELS].reverse().find(l => count >= l.minQ) ?? LEVELS[0]
}

export function getNextLevel(count: number): Level | null {
  return LEVELS.find(l => l.minQ > count) ?? null
}
