'use client';

import { useState } from 'react';
import SummaryBar from './SummaryBar';
import CategoryTable from './CategoryTable';
import TipsPanel from './TipsPanel';
import type { EstimateResponse } from '@/lib/types';

type ViewMode = 'budget' | 'premium' | 'compare';

const TABS: { id: ViewMode; label: string }[] = [
  { id: 'budget', label: 'Budget' },
  { id: 'premium', label: 'Premium' },
  { id: 'compare', label: 'Compare' },
];

interface EstimatorResultsProps {
  data: EstimateResponse;
  onReset: () => void;
}

export default function EstimatorResults({ data, onReset }: EstimatorResultsProps) {
  const [view, setView] = useState<ViewMode>('compare');

  return (
    <div className="min-h-screen pb-16" style={{ backgroundColor: '#F8F6F2' }}>
      <header
        className="px-6 py-6 relative overflow-hidden"
        style={{ backgroundColor: '#1B4F8C' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}
        />
        <div className="relative max-w-4xl mx-auto flex items-center justify-between gap-4">
          <div>
            <h1 className="text-xl font-bold text-white capitalize">
              {data.roomType} Renovation
            </h1>
            <p className="text-sm" style={{ color: '#D6E8F7' }}>
              {data.squareFootage} sq ft &middot; {data.categories.length} categories
            </p>
          </div>
          <button
            onClick={onReset}
            className="text-sm px-4 py-2 rounded-lg border transition-colors flex-shrink-0"
            style={{ borderColor: 'rgba(74,144,217,0.6)', color: '#D6E8F7' }}
          >
            ← New Estimate
          </button>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <SummaryBar budget={data.summary.budget} premium={data.summary.premium} />

        <div className="flex gap-2 mb-6 flex-wrap">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setView(tab.id)}
              className="px-5 py-2 rounded-full text-sm font-semibold transition-all"
              style={{
                backgroundColor: view === tab.id ? '#1B4F8C' : '#FFFFFF',
                color: view === tab.id ? '#FFFFFF' : '#6B7B8D',
                border: `1.5px solid ${view === tab.id ? '#1B4F8C' : '#C8BFB0'}`,
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {view === 'compare' && (
          <div
            className="flex items-center gap-4 mb-5 text-xs font-semibold uppercase tracking-wider"
            style={{ color: '#6B7B8D' }}
          >
            <span style={{ color: '#C05A3A' }}>■ Budget</span>
            <span style={{ color: '#C9963E' }}>■ Premium</span>
          </div>
        )}

        {data.categories.map((cat, i) => (
          <CategoryTable key={i} category={cat} view={view} />
        ))}

        <TipsPanel tips={data.tips} />
      </div>
    </div>
  );
}
