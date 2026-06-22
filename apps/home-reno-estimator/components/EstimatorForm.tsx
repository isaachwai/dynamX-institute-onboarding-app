'use client';

import { useState } from 'react';

interface RoomType {
  id: string;
  label: string;
  icon: React.FC<{ selected: boolean }>;
}

function BathroomIcon({ selected }: { selected: boolean }) {
  const c = selected ? '#1B4F8C' : '#C05A3A';
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 11h20v6a2 2 0 01-2 2H4a2 2 0 01-2-2v-6z" stroke={c} strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M6 11V6a2 2 0 012-2h0a2 2 0 012 2v1" stroke={c} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M5 19l-1 2M19 19l1 2" stroke={c} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M9 7h2" stroke={c} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function KitchenIcon({ selected }: { selected: boolean }) {
  const c = selected ? '#1B4F8C' : '#C05A3A';
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="3" width="20" height="18" rx="2" stroke={c} strokeWidth="1.5" />
      <circle cx="8.5" cy="9" r="2" stroke={c} strokeWidth="1.5" />
      <circle cx="15.5" cy="9" r="2" stroke={c} strokeWidth="1.5" />
      <rect x="5" y="14" width="14" height="4" rx="1" stroke={c} strokeWidth="1.5" />
      <path d="M9 16h2M13 16h2" stroke={c} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function BedroomIcon({ selected }: { selected: boolean }) {
  const c = selected ? '#1B4F8C' : '#C05A3A';
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 19v-8M22 19v-8" stroke={c} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M2 19h20" stroke={c} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M2 11h20" stroke={c} strokeWidth="1.5" />
      <path d="M2 11V7a2 2 0 012-2h16a2 2 0 012 2v4" stroke={c} strokeWidth="1.5" />
      <rect x="4" y="11" width="6" height="4" rx="1" stroke={c} strokeWidth="1.5" />
      <rect x="14" y="11" width="6" height="4" rx="1" stroke={c} strokeWidth="1.5" />
    </svg>
  );
}

function LivingRoomIcon({ selected }: { selected: boolean }) {
  const c = selected ? '#1B4F8C' : '#C05A3A';
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 13V9.5A1.5 1.5 0 011.5 8v0A1.5 1.5 0 013 9.5V13" stroke={c} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M21 13V9.5A1.5 1.5 0 0122.5 8v0A1.5 1.5 0 0121 9.5V13" stroke={c} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M3 13h18v4a1 1 0 01-1 1H4a1 1 0 01-1-1v-4z" stroke={c} strokeWidth="1.5" />
      <path d="M6 13V9.5a1.5 1.5 0 011.5-1.5h9A1.5 1.5 0 0118 9.5V13" stroke={c} strokeWidth="1.5" />
      <path d="M6 18l-1 2M18 18l1 2" stroke={c} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

const ROOMS: RoomType[] = [
  { id: 'bathroom', label: 'Bathroom', icon: BathroomIcon },
  { id: 'kitchen', label: 'Kitchen', icon: KitchenIcon },
  { id: 'bedroom', label: 'Bedroom', icon: BedroomIcon },
  { id: 'living room', label: 'Living Room', icon: LivingRoomIcon },
];

interface EstimatorFormProps {
  onSubmit: (roomType: string, squareFootage: number) => void;
}

export default function EstimatorForm({ onSubmit }: EstimatorFormProps) {
  const [roomType, setRoomType] = useState('');
  const [sqFt, setSqFt] = useState('');

  const canSubmit = roomType !== '' && sqFt !== '' && Number(sqFt) > 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    onSubmit(roomType, Number(sqFt));
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F8F6F2' }}>
      <header
        className="px-6 py-14 relative overflow-hidden"
        style={{ backgroundColor: '#1B4F8C' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}
        />
        <div className="relative max-w-xl mx-auto text-center">
          <div
            className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-5"
            style={{ backgroundColor: 'rgba(74,144,217,0.25)', color: '#D6E8F7' }}
          >
            Home Renovation Estimator
          </div>
          <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
            Know your costs<br />before you build.
          </h1>
          <p className="text-lg" style={{ color: '#D6E8F7' }}>
            Get a detailed materials list with budget &amp; premium options — powered by AI.
          </p>
        </div>
      </header>

      <div className="max-w-xl mx-auto px-5 py-10">
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-sm p-8"
          style={{ border: '1px solid #E0D9D0' }}
        >
          <div className="mb-8">
            <label
              className="block text-xs font-bold uppercase tracking-widest mb-4"
              style={{ color: '#6B7B8D' }}
            >
              Select a Room
            </label>
            <div className="grid grid-cols-2 gap-3">
              {ROOMS.map((room) => {
                const isSelected = roomType === room.id;
                return (
                  <button
                    key={room.id}
                    type="button"
                    onClick={() => setRoomType(room.id)}
                    className="flex flex-col items-center justify-center gap-3 py-5 px-4 rounded-xl border-2 transition-all"
                    style={{
                      borderColor: isSelected ? '#1B4F8C' : '#E0D9D0',
                      backgroundColor: isSelected ? '#EFF5FC' : '#FAFAF8',
                      boxShadow: isSelected
                        ? '0 0 0 3px rgba(27,79,140,0.12)'
                        : 'none',
                    }}
                  >
                    <room.icon selected={isSelected} />
                    <span
                      className="text-sm font-semibold"
                      style={{ color: isSelected ? '#1B4F8C' : '#1A2B3C' }}
                    >
                      {room.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mb-8">
            <label
              className="block text-xs font-bold uppercase tracking-widest mb-3"
              style={{ color: '#6B7B8D' }}
            >
              Room Size
            </label>
            <div
              className="flex items-center rounded-xl overflow-hidden border-2 transition-colors"
              style={{ borderColor: sqFt ? '#1B4F8C' : '#E0D9D0' }}
            >
              <input
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                value={sqFt}
                onChange={(e) => setSqFt(e.target.value.replace(/\D/g, ''))}
                placeholder="e.g. 120"
                className="flex-1 px-5 py-4 text-lg outline-none bg-white"
                style={{ color: '#1A2B3C' }}
              />
              <span
                className="px-5 py-4 text-sm font-semibold border-l"
                style={{
                  color: '#6B7B8D',
                  borderColor: '#E0D9D0',
                  backgroundColor: '#F8F6F2',
                }}
              >
                sq ft
              </span>
            </div>
          </div>

          <button
            type="submit"
            disabled={!canSubmit}
            className="w-full py-4 rounded-xl text-white font-bold text-base transition-all"
            style={{
              backgroundColor: canSubmit ? '#1B4F8C' : '#C8BFB0',
              cursor: canSubmit ? 'pointer' : 'not-allowed',
              transform: canSubmit ? 'none' : 'none',
            }}
          >
            Get My Estimate →
          </button>

          <p className="text-center text-xs mt-4" style={{ color: '#9CA3AF' }}>
            Results typically take about 60 seconds to generate
          </p>
        </form>
      </div>
    </div>
  );
}
