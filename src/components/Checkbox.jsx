import { useState } from 'react';

const countries = [
  'Australie',
  'Chine',
  'Costa Rica',
  'France',
  'Mexique',
  'Suisse',
  'Turquie'
];

function App() {
  const [selectedCountries, setSelectedCountries] = useState([]);

  const handleCountrySelect = (country) => {
    if (selectedCountries.includes(country)) {
      setSelectedCountries(selectedCountries.filter(c => c !== country));
    } else {
      setSelectedCountries([...selectedCountries, country]);
    }
  }

  return (
    <div className="background">
      {countries.map((country, index) => (
        <label key={index} className="checkbox-label">
          <input
            type="checkbox"
            checked={selectedCountries.includes(country)}
            onChange={() => handleCountrySelect(country)}
          />
          {country}
        </label>
      ))}
    </div>
  );
}

export default App;
