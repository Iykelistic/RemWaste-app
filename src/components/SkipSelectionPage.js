import React, { useState } from 'react';
import SkipCard from './SkipCard';
import Waste from "../images/Waste.jpg"; 

const skips = [
  {
    id: 17933,
    size: 4,
    hire_period_days: 14,
    transport_cost: null,
    per_tonne_cost: null,
    price_before_vat: 277.95,
    vat: 20,
    postcode: "NR32",
    area: null,
    forbidden: false,
    created_at: "2025-04-03T13:51:46.897146",
    updated_at: "2025-04-03T13:51:46.897146",
    allowed_on_road: true,
    allows_heavy_waste: true
  },
  {
    id: 17934,
    size: 6,
    hire_period_days: 14,
    price_before_vat: 305.15,
    vat: 20,
    transport_cost: null,
    per_tonne_cost: null,
    postcode: "NR32",
    area: null,
    forbidden: false,
    created_at: "2025-04-03T13:51:46.897146",
    updated_at: "2025-04-03T13:51:46.897146",
    allowed_on_road: true,
    allows_heavy_waste: true
  },
  {
    id: 17935,
    size: 8,
    hire_period_days: 14,
    price_before_vat: 374.85,
    vat: 20,
    transport_cost: null,
    per_tonne_cost: null,
    postcode: "NR32",
    area: null,
    forbidden: false,
    created_at: "2025-04-03T13:51:46.897146",
    updated_at: "2025-04-03T13:51:46.897146",
    allowed_on_road: true,
    allows_heavy_waste: true
  },
  {
    id: 17936,
    size: 10,
    hire_period_days: 14,
    transport_cost: null,
    per_tonne_cost: null,
    price_before_vat: 399.5,
    vat: 20,
    postcode: "NR32",
    area: null,
    forbidden: false,
    created_at: "2025-04-03T13:51:46.897146",
    updated_at: "2025-04-03T13:51:46.897146",
    allowed_on_road: false,
    allows_heavy_waste: false
  },
  {
  
    id: 17937,
    size: 12,
    hire_period_days: 14,
    transport_cost: null,
    per_tonne_cost: null,
    price_before_vat: 438.6,
    vat: 20,
    postcode: "NR32",
    area: null,
    forbidden: false,
    created_at: "2025-04-03T13:51:46.897146",
    updated_at: "2025-04-03T13:51:46.897146",
    allowed_on_road: false,
    allows_heavy_waste: false
  },
  {
    id: 17938,
    size: 14,
    hire_period_days: 14,
    transport_cost: null,
    per_tonne_cost: null,
    price_before_vat: 470.05,
    vat: 20,
    postcode: "NR32",
    area: null,
    forbidden: false,
    created_at: "2025-04-03T13:51:46.897146",
    updated_at: "2025-04-03T13:51:46.897146",
    allowed_on_road: false,
    allows_heavy_waste: false
  },
  {
    id: 17939,
    size: 16,
    hire_period_days: 14,
    transport_cost: null,
    per_tonne_cost: null,
    price_before_vat: 496.4,
    vat: 20,
    postcode: "NR32",
    area: null,
    forbidden:false,
    created_at: "2025-04-03T13:51:46.897146",
    updated_at: "2025-04-03T13:51:46.897146",
    allowed_on_road: false,
    allows_heavy_waste: false
  },
  {
    id: 15124,
    size: 20,
    hire_period_days: 14,
    transport_cost: 248,
    per_tonne_cost: 248,
    price_before_vat: null,
    vat: 20,
    postcode: "NR32",
    area: null,
    forbidden: false,
    created_at: "2025-04-03T13:51:40.344435",
    updated_at: "2025-04-03T13:51:40.344435",
    allowed_on_road: false,
    allows_heavy_waste: true
  },

  {
    id: 15125,
    size: 40,
    hire_period_days: 14,
    transport_cost: 248,
    per_tonne_cost: 248,
    price_before_vat: null,
    vat: 20,
    postcode: "NR32",
    area: null,
    forbidden: false,
    created_at: "2025-04-03T13:51:40.344435",
    updated_at: "2025-04-03T13:51:40.344435",
    allowed_on_road: false,
    allows_heavy_waste: false
  }
];

const SkipSelectionPage = () => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className="p-4">

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mb-32">
        {skips.map((skip) => (
          <SkipCard
            key={skip.id}
            size={skip.size}
            price={skip.price_before_vat ?? 350}
            hirePeriod={skip.hire_period_days}
            selected={selectedId === skip.id}
            onSelect={() => setSelectedId(skip.id)}
            image={Waste}
            allowedOnRoad={skip.allowed_on_road}
            allowsHeavyWaste={skip.allows_heavy_waste}
          />
        ))}
      </div>

      {selectedId && (
  <div className="fixed bottom-0 left-0 w-full bg-white dark:bg-gray-900 border-t border-zinc-700 px-6 py-4 mt-8 animate-slide-up z-40">
    <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">

      <div className="flex items-center gap-2 text-black dark:text-white">
        <span className="text-lg font-semibold">
          {skips.find(s => s.id === selectedId)?.size}
        </span>
        <span className="text-blue-600 font-bold text-xl">£</span>
        <span className="text-base text-zinc-400">7 day hire</span>
      </div>
      <div className="flex gap-3">
        <button className="px-4 py-2 bg-zinc-700 text-white rounded-md">
          Back
        </button>
        <button className="px-6 py-2 rounded-md font-semibold bg-blue-600 text-white">
          Continue →
        </button>
      </div>
    </div>
  </div>
)}
    </div>
  );
};

export default SkipSelectionPage;
