const CountryCard = ({ name, flag, alt }) => {
  return (
    <div className="countryCard" style={{ border: "1px solid #ddd", padding: "16px", margin: "16px", borderRadius: "8px", height: "200px", width: "180px", background: "#fff", display: "flex", flexDirection: "column", alignItems: "center", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
      <img src={flag} alt={alt || name} style={{ height: "100px", width: "120px", objectFit: "cover", marginBottom: "12px" }} />
      <div style={{ fontWeight: "bold", fontSize: "1.1em" }}>{name}</div>
    </div>
  );
};

export default CountryCard;
