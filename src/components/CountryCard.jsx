const CountryCard = ({name, flag, alt}) => {
  return <div style={{ border: "1px solid black", padding: "10px", margin: "10px", borderRadius: "5px", height:"200px", width:"200px" }}>
    <img src={flag} alt={alt}  style={{height:"120px", width:"120px"}}/>
    <h3>{name}</h3>
  </div>;
};

export default CountryCard;
