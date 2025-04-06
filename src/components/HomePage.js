import React, { useContext } from 'react';
import MultiStepHeader from './MultiStepHeader';
import SkipSelectionPage from './SkipSelectionPage';
import { ThemeContext } from './ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

function HomePage() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const currentStep = 2; 

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300 relative">
    
      <MultiStepHeader currentStep={currentStep} />

      <div className="absolute top-2 right-4">
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={theme === 'dark'}
            onChange={toggleTheme}
            className="sr-only peer"
          />
          <div className="w-12 h-6 bg-gray-300 rounded-full peer dark:bg-gray-600 peer-checked:dark:bg-gray-800 transition-colors duration-300 flex items-center px-1">
            <div
              className={`w-5 h-5 rounded-full bg-white shadow-md flex items-center justify-center text-xs transition-transform duration-300 ${
                theme === 'dark' ? 'translate-x-6' : ''
              }`}
            >
              {theme === 'dark' ? <FaMoon style={{color: "black"}}/> : <FaSun />}
            </div>
          </div>
        </label>
      </div>

      <div className="flex flex-col items-center justify-center px-4">
        <h2 className="text-2xl font-bold mb-3 mt-3">Choose Your Skip Size</h2>
        <p className="text-base text-gray-400">Select the skip that best suits your needs</p>
        <SkipSelectionPage />
      </div>
    </div>
  );
}

export default HomePage;
