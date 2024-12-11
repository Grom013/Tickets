import React, { useState } from "react"
import { getStopLabel } from "../utils/getStopLabel"
import "./Filter.css"

interface FilterProps {
  onFilterChange: (stops: number[]) => void;
  onCurrencyChange: (currency: string) => void;
  selectedCurrency: string;
}

const Filter: React.FC<FilterProps> = ({
  onFilterChange,
  onCurrencyChange,
  selectedCurrency,
}) => {
  const [selectedStops, setSelectedStops] = useState<number[]>([]);

  const handleCheckboxChange = (stop: number) => {
    const updatedStops = selectedStops.includes(stop)
      ? selectedStops.filter((s) => s !== stop)
      : [...selectedStops, stop];
    setSelectedStops(updatedStops);
    onFilterChange(updatedStops);
  };
  return (
    <div className="filter-container">
      <h3 className="filter-title">Валюта</h3>
      <div className="currency-switcher">
        {["RUB", "USD", "EUR"].map((currency) => (
          <button
            key={currency}
            className={`currency-btn ${
              selectedCurrency === currency ? "active" : ""
            }`}
            onClick={() => onCurrencyChange(currency)}
          >
            {currency}
          </button>
        ))}
      </div>
      <h3 className="filter-title">Количество пересадок</h3>
      {[0, 1, 2, 3].map((stop) => (
        <label key={stop} className="custom-checkbox-label">
          <input
            type="checkbox"
            checked={selectedStops.includes(stop)}
            onChange={() => handleCheckboxChange(stop)}
            className="custom-checkbox-input"
          />
          <span className="custom-checkbox"></span>
          {getStopLabel(stop)}
        </label>
      ))}
    </div>
  );
};

export default Filter;
