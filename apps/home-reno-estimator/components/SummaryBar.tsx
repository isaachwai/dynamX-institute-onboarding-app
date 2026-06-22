import type { CostRange } from '@/lib/types';

function formatCurrency(n: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(n);
}

interface SummaryBarProps {
  budget: CostRange;
  premium: CostRange;
}

export default function SummaryBar({ budget, premium }: SummaryBarProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
      <div className="rounded-2xl p-6" style={{ backgroundColor: '#F5E6E1' }}>
        <div
          className="text-xs font-bold uppercase tracking-widest mb-1"
          style={{ color: '#C05A3A' }}
        >
          Budget Option
        </div>
        <div className="text-2xl font-bold mb-1" style={{ color: '#1A2B3C' }}>
          {formatCurrency(budget.min)} &ndash; {formatCurrency(budget.max)}
        </div>
        <div className="text-xs" style={{ color: '#8A6A62' }}>
          Materials only &middot; excludes labour &amp; installation
        </div>
      </div>

      <div className="rounded-2xl p-6" style={{ backgroundColor: '#FBF3E3' }}>
        <div
          className="text-xs font-bold uppercase tracking-widest mb-1"
          style={{ color: '#C9963E' }}
        >
          Premium Option
        </div>
        <div className="text-2xl font-bold mb-1" style={{ color: '#1A2B3C' }}>
          {formatCurrency(premium.min)} &ndash; {formatCurrency(premium.max)}
        </div>
        <div className="text-xs" style={{ color: '#8A7A52' }}>
          Materials only &middot; excludes labour &amp; installation
        </div>
      </div>
    </div>
  );
}
