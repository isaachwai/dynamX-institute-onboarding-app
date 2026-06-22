export default function LoadingState() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6"
      style={{ backgroundColor: '#F8F6F2' }}
    >
      <div className="mb-10">
        <div className="grid grid-cols-4 gap-2">
          {Array.from({ length: 16 }).map((_, i) => (
            <div
              key={i}
              className="w-7 h-7 rounded"
              style={{
                backgroundColor: i % 3 === 0 ? '#1B4F8C' : i % 3 === 1 ? '#C05A3A' : '#C9963E',
                opacity: 0.15,
                animation: `tilePulse 2s ease-in-out ${(i * 0.12).toFixed(2)}s infinite`,
              }}
            />
          ))}
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-3 text-center" style={{ color: '#1A2B3C' }}>
        Calculating your estimate...
      </h2>
      <p className="text-center max-w-xs leading-relaxed" style={{ color: '#6B7B8D' }}>
        Our AI is researching materials and current pricing for your project.
        This typically takes about 60 seconds.
      </p>

      <div className="mt-8 flex gap-2">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-2 h-2 rounded-full"
            style={{
              backgroundColor: '#1B4F8C',
              animation: `dotBounce 1.4s ease-in-out ${(i * 0.2).toFixed(1)}s infinite`,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes tilePulse {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.75; }
        }
        @keyframes dotBounce {
          0%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-8px); }
        }
      `}</style>
    </div>
  );
}
