import React from 'react';
import {
  FaMapMarkerAlt,
  FaTruck,
} from 'react-icons/fa';
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdShield } from "react-icons/md";
import { FaCalendar } from "react-icons/fa6";
import { FiCreditCard } from "react-icons/fi";

const steps = [
  { label: 'Postcode', icon: FaMapMarkerAlt, key: 'postcode' },
  { label: 'Waste Type', icon:  RiDeleteBin6Line, key: 'wasteType' },
  { label: 'Select Skip', icon: FaTruck, key: 'selectSkip' },
  { label: 'Permit Check', icon: MdShield, key: 'permitCheck' },
  { label: 'Choose Date', icon:  FaCalendar, key: 'chooseDate' },
  { label: 'Payment', icon: FiCreditCard, key: 'payment' },
];

const MultiStepHeader = ({ currentStep = 0 }) => {
  return (
    <div className="w-full bg-white dark:bg-black py-4 px-4 shadow-sm transition-colors duration-300 overflow-hidden">
      <div className="overflow-x-auto whitespace-nowrap scroll-smooth no-scrollbar max-w-full">
        <div className="inline-flex items-center gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = index <= currentStep;

            return (
              <React.Fragment key={step.key}>
                <div className="flex items-center space-x-2 shrink-0">
                  <span
                    className={`text-base md:text-lg font-semibold flex items-center space-x-1 font-poppins mt-5 ${
                      isActive
                        ? 'text-blue-600'
                        : 'text-gray-600 dark:text-gray-400'
                    }`}
                  >
                    <Icon className="text-lg" />
                    <span>{step.label}</span>
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div className="h-px w-16 bg-gray-400 dark:bg-gray-600 shrink-0 mt-5" />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MultiStepHeader;
