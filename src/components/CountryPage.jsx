import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";

const CountryPage = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(
          "https://xcountries-backend.azurewebsites.net/all"
        );
        const data = await response.json();
        setCountries(data)
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    fetchCountries();
  }, []);

  return (
    <div style={{display:"flex", flexWrap:"wrap", justifyContent:"center", alignItems:"center", textAlign:"center"}}>
        {countries.map((item, index)=>(
            <CountryCard key={index} name={item.name} flag={item.flag} alt={item.abbr} />
        ))}
    </div>
  );
};

export default CountryPage;
