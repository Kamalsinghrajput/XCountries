import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";

const CountryPage = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(
          "https://countries-search-data-prod-812920491762.asia-south1.run.app/countries"
        );
        const data = await response.json();
        console.log("Fetched data:", data); // Debug: check structure
        // If data is an array, set it. If it's an object, try to get the array property.
        if (Array.isArray(data)) {
          setCountries(data);
        } else if (Array.isArray(data.countries)) {
          setCountries(data.countries);
        } else {
          setCountries([]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error);
      }
    };
    fetchCountries();
  }, []);

  const filteredCountries = countries.filter(
    (item) =>
      item.common && item.common.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center", margin: "24px 0" }}>
        <input
          type="text"
          placeholder="Search countries..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{
            padding: "10px",
            width: "320px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            fontSize: "16px"
          }}
        />
      </div>
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "flex-start",
        textAlign: "center"
      }}>
        {filteredCountries.map((item, index) => (
          <CountryCard key={index} name={item.common} flag={item.png} alt={item.common} />
        ))}
      </div>
    </div>
  );
};

export default CountryPage;
