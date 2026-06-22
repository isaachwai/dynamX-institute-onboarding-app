export interface PriceTier {
  unitPrice: number;
  total: number;
  brand: string;
}

export interface MaterialItem {
  material: string;
  quantity: number;
  unit: string;
  budget: PriceTier;
  premium: PriceTier;
  notes?: string;
}

export interface Category {
  name: string;
  items: MaterialItem[];
}

export interface CostRange {
  min: number;
  max: number;
  currency: string;
}

export interface EstimateResponse {
  roomType: string;
  squareFootage: number;
  summary: {
    budget: CostRange;
    premium: CostRange;
  };
  categories: Category[];
  tips: string[];
}
