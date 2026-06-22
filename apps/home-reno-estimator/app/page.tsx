'use client';

import { useState } from 'react';
import EstimatorForm from '@/components/EstimatorForm';
import EstimatorResults from '@/components/EstimatorResults';
import LoadingState from '@/components/LoadingState';
import { getEstimate } from '@/lib/api';
import type { EstimateResponse } from '@/lib/types';

type Phase = 'form' | 'loading' | 'results' | 'error';

export default function Home() {
  const [phase, setPhase] = useState<Phase>('form');
  const [result, setResult] = useState<EstimateResponse | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (roomType: string, squareFootage: number) => {
    setPhase('loading');
    setErrorMsg(null);
    try {
      const data = await getEstimate(roomType, squareFootage);
      setResult(data);
      setPhase('results');
    } catch (err) {
      setErrorMsg(
        err instanceof Error
          ? err.message
          : 'Something went wrong. Please try again.'
      );
      setPhase('error');
    }
  };

  const handleReset = () => {
    setResult(null);
    setErrorMsg(null);
    setPhase('form');
  };

  if (phase === 'loading') return <LoadingState />;

  if (phase === 'results' && result) {
    return <EstimatorResults data={result} onReset={handleReset} />;
  }

  return (
    <>
      <EstimatorForm onSubmit={handleSubmit} />
      {phase === 'error' && errorMsg && (
        <div
          className="fixed bottom-6 left-1/2 -translate-x-1/2 px-6 py-4 rounded-2xl shadow-lg text-sm text-center max-w-sm w-full mx-4"
          style={{
            backgroundColor: '#FEF2F2',
            border: '1px solid #FECACA',
            color: '#B91C1C',
          }}
        >
          <strong>Estimate failed</strong>
          <br />
          {errorMsg}
          <button
            onClick={handleReset}
            className="block w-full mt-3 text-xs underline"
            style={{ color: '#B91C1C' }}
          >
            Try again
          </button>
        </div>
      )}
    </>
  );
}
