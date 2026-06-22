import type { Category } from '@/lib/types';

type ViewMode = 'budget' | 'premium' | 'compare';

function fmt(n: number) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(n);
}

interface CategoryTableProps {
  category: Category;
  view: ViewMode;
}

export default function CategoryTable({ category, view }: CategoryTableProps) {
  const showBudget = view === 'budget' || view === 'compare';
  const showPremium = view === 'premium' || view === 'compare';

  const budgetSubtotal = category.items.reduce((s, i) => s + i.budget.total, 0);
  const premiumSubtotal = category.items.reduce((s, i) => s + i.premium.total, 0);

  return (
    <div
      className="bg-white rounded-xl overflow-hidden shadow-sm mb-5"
      style={{ borderTop: '3px solid #1B4F8C' }}
    >
      <div className="px-5 py-3" style={{ backgroundColor: '#F0F4F9' }}>
        <h3
          className="font-semibold text-xs uppercase tracking-widest"
          style={{ color: '#1B4F8C' }}
        >
          {category.name}
        </h3>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr
              style={{
                backgroundColor: '#F8F6F2',
                borderBottom: '1px solid #E0D9D0',
              }}
            >
              <th
                className="text-left px-4 py-2.5 font-semibold text-xs uppercase tracking-wide"
                style={{ color: '#6B7B8D' }}
              >
                Material
              </th>
              <th
                className="text-right px-4 py-2.5 font-semibold text-xs uppercase tracking-wide"
                style={{ color: '#6B7B8D' }}
              >
                Qty
              </th>
              {showBudget && (
                <>
                  <th
                    className="text-right px-4 py-2.5 font-semibold text-xs uppercase tracking-wide hidden md:table-cell"
                    style={{ color: '#C05A3A' }}
                  >
                    Budget/Unit
                  </th>
                  <th
                    className="text-right px-4 py-2.5 font-semibold text-xs uppercase tracking-wide"
                    style={{ color: '#C05A3A' }}
                  >
                    Budget
                  </th>
                </>
              )}
              {showPremium && (
                <>
                  <th
                    className="text-right px-4 py-2.5 font-semibold text-xs uppercase tracking-wide hidden md:table-cell"
                    style={{ color: '#C9963E' }}
                  >
                    Premium/Unit
                  </th>
                  <th
                    className="text-right px-4 py-2.5 font-semibold text-xs uppercase tracking-wide"
                    style={{ color: '#C9963E' }}
                  >
                    Premium
                  </th>
                </>
              )}
            </tr>
          </thead>
          <tbody>
            {category.items.map((item, idx) => (
              <tr
                key={idx}
                style={{
                  backgroundColor: idx % 2 === 0 ? '#FFFFFF' : '#FAFAF8',
                  borderBottom: '1px solid #EDE8E0',
                }}
              >
                <td className="px-4 py-3 max-w-xs">
                  <div className="font-medium" style={{ color: '#1A2B3C' }}>
                    {item.material}
                  </div>
                  {item.notes && (
                    <div className="text-xs mt-0.5" style={{ color: '#6B7B8D' }}>
                      {item.notes}
                    </div>
                  )}
                  <div className="text-xs mt-0.5 hidden md:block" style={{ color: '#9CA3AF' }}>
                    {showBudget && !showPremium && item.budget.brand}
                    {showPremium && !showBudget && item.premium.brand}
                  </div>
                </td>
                <td
                  className="text-right px-4 py-3 whitespace-nowrap text-xs"
                  style={{ color: '#6B7B8D' }}
                >
                  {item.quantity} {item.unit}
                </td>
                {showBudget && (
                  <>
                    <td
                      className="text-right px-4 py-3 hidden md:table-cell text-xs"
                      style={{ color: '#9CA3AF' }}
                    >
                      {fmt(item.budget.unitPrice)}
                    </td>
                    <td
                      className="text-right px-4 py-3 font-semibold"
                      style={{ color: '#C05A3A' }}
                    >
                      {fmt(item.budget.total)}
                    </td>
                  </>
                )}
                {showPremium && (
                  <>
                    <td
                      className="text-right px-4 py-3 hidden md:table-cell text-xs"
                      style={{ color: '#9CA3AF' }}
                    >
                      {fmt(item.premium.unitPrice)}
                    </td>
                    <td
                      className="text-right px-4 py-3 font-semibold"
                      style={{ color: '#C9963E' }}
                    >
                      {fmt(item.premium.total)}
                    </td>
                  </>
                )}
              </tr>
            ))}

            <tr style={{ backgroundColor: '#F0F4F9', borderTop: '2px solid #C8BFB0' }}>
              <td
                className="px-4 py-3 font-bold text-xs uppercase tracking-wider"
                style={{ color: '#1B4F8C' }}
                colSpan={2}
              >
                Subtotal
              </td>
              {showBudget && (
                <>
                  <td className="hidden md:table-cell" />
                  <td
                    className="text-right px-4 py-3 font-bold"
                    style={{ color: '#C05A3A' }}
                  >
                    {fmt(budgetSubtotal)}
                  </td>
                </>
              )}
              {showPremium && (
                <>
                  <td className="hidden md:table-cell" />
                  <td
                    className="text-right px-4 py-3 font-bold"
                    style={{ color: '#C9963E' }}
                  >
                    {fmt(premiumSubtotal)}
                  </td>
                </>
              )}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
