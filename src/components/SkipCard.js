import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import Waste from "../images/Waste.jpg";

const SkipCard = ({
  size,
  price,
  hirePeriod,
  selected,
  onSelect,
  image,
  allowedOnRoad,
  allowsHeavyWaste,
}) => {
  return (
    <div
      className={`relative rounded-2xl p-6 shadow-md border transition-all duration-300
        bg-white dark:bg-zinc-900
        text-black dark:text-white
        hover:shadow-lg hover:-translate-y-1
        ${selected ? 'border-blue-600 ring-2 ring-blue-500 scale-[1.01]' : 'border-transparent'}
      `}
    >
      {selected && (
        <FaCheckCircle className="absolute top-3 left-3 text-blue-600 text-xl" />
      )}

      <div className="relative mb-5">
  <img
    src={Waste}
    alt={`${size} Yard Skip`}
    className="rounded-xl w-full h-56 object-cover"
  />

  <span className="absolute top-3 right-3 bg-blue-600 text-white text-sm px-3 py-1 rounded-full font-medium shadow-sm">
    {size} Yards
  </span>
  {!allowedOnRoad && (
    <div className="absolute bottom-3 left-3 bg-white dark:bg-black text-yellow-500 text-xs font-semibold px-3 py-1 rounded-md shadow-md flex items-center gap-2">
      <svg
        className="w-4 h-4 text-yellow-500"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10.185 1.417a1 1 0 00-1.732 0l-7.5 13A1 1 0 001.5 16h15a1 1 0 00.866-1.5l-7.5-13zM10 6a1 1 0 011 1v3a1 1 0 01-2 0V7a1 1 0 011-1zm0 8a1 1 0 110-2 1 1 0 010 2z" />
      </svg>
      Private Property Only
    </div>
  )}
</div>
      <h2 className="text-xl font-bold mb-1">{size} Yard Skip</h2>
      <p className="text-base text-zinc-500 dark:text-zinc-400 mb-1">
        {hirePeriod} day hire period
      </p>
      <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-3">
        {allowedOnRoad ? '✅ Allowed on road' : '🚫 Not allowed on road'} <br />
        {allowsHeavyWaste ? '✅ Heavy waste allowed' : '🚫 No heavy waste'}
      </p>
      <p className="text-blue-600 dark:text-blue-400 font-semibold text-xl mb-5">
        £{price?.toFixed(2)}{' '}
      </p>
      <button
        onClick={onSelect}
        className={`w-full rounded-md text-base font-semibold py-3 transition-all ${
          selected
            ? 'bg-blue-600 text-white cursor-default'
            : 'bg-zinc-200 text-black hover:bg-zinc-300 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700'
        }`}
        disabled={selected}
      >
        {selected ? 'Selected' : 'Select This Skip →'}
      </button>
    </div>
  );
};

export default SkipCard;
