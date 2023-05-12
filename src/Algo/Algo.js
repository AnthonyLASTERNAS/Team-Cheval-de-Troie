import  { useState } from "react";

const countries = [
  { name: "Australie", cities: ["Darwin", "Melbourne", "Sydney"] },
  { name: "Chine", cities: ["Hong kong", "Murail de chine", "Shangai"] },
  { name: "Costa Rica", cities: ["Puerto-limon", "Samara", "san-josé"] },
  { name: "France", cities: ["Bretagne", "Corse", "Dunkerque"] },
  { name: "Mexique", cities: ["Cancun", "Juarez", "Mexico"] },
  { name: "Suisse", cities: ["Berne", "Interlaken", "Lac-leman"] },
  { name: "Turquie", cities: ["éphése", "Istambul", "Ankara"] }
];

function App() {
  const [selectedCities, setSelectedCities] = useState([]);

  const handleCheckboxChange = (event, country, city) => {
    if (event.target.checked) {
      setSelectedCities([...selectedCities, { country, city }]);
    } else {
      setSelectedCities(
        selectedCities.filter(
          (selectedCity) =>
            selectedCity.country !== country || selectedCity.city !== city
        )
      );
    }
  };

  return (
    <div>
      {countries.map((country) => (
        <div key={country.name}>
          <h3>{country.name}</h3>
          {country.cities.map((city) => (
            <label key={city}>
              <input
                type="checkbox"
                checked={selectedCities.some(
                  (selectedCity) =>
                    selectedCity.country === country.name &&
                    selectedCity.city === city
                )}
                onChange={(event) => handleCheckboxChange(event, country.name, city)}
              />
              {city}
            </label>
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
