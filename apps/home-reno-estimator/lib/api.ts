import type { EstimateResponse } from './types';

export async function getEstimate(
  roomType: string,
  squareFootage: number
): Promise<EstimateResponse> {
  const url = process.env.NEXT_PUBLIC_WEBHOOK_URL;
  if (!url) throw new Error('Webhook URL is not configured.');

  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ roomType, squareFootage }),
  });

  if (!res.ok) {
    throw new Error(`Request failed with status ${res.status}. Please try again.`);
  }

  const data = await res.json();
  return data as EstimateResponse;
}
