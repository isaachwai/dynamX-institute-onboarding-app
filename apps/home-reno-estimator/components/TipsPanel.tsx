interface TipsPanelProps {
  tips: string[];
}

export default function TipsPanel({ tips }: TipsPanelProps) {
  return (
    <div
      className="rounded-2xl p-6 mt-6"
      style={{ backgroundColor: '#EFF2E8', border: '1px solid #C8D4B0' }}
    >
      <h3
        className="font-semibold uppercase tracking-wider text-xs mb-5 flex items-center gap-2"
        style={{ color: '#6B7C3A' }}
      >
        <span
          className="inline-block w-5 h-5 rounded-full flex items-center justify-center text-white text-xs"
          style={{ backgroundColor: '#6B7C3A' }}
        >
          ✓
        </span>
        Builder&apos;s Notes
      </h3>
      <ol className="space-y-4">
        {tips.map((tip, i) => (
          <li key={i} className="flex gap-3 items-start">
            <span
              className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white mt-0.5"
              style={{ backgroundColor: '#6B7C3A' }}
            >
              {i + 1}
            </span>
            <p className="text-sm leading-relaxed" style={{ color: '#1A2B3C' }}>
              {tip}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}
