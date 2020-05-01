const PowerBar = ({ name, width, percent }) => {
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    setValue((percent / 100) * width);
  });

  let color;
  const getColor = (name) => {
    switch (name) {
      case "intelligence":
        color = "purple";
        break;

      case "strength":
        color = "red";
        break;
      case "speed":
        color = "yellow";
        break;
      case "durability":
        color = "brown";
        break;
      case "power":
        color = "blue";
        break;
      case "combat":
        color = "green";
        break;

      default:
        color = "black";
        break;
    }
  };

  getColor(name);

  return (
    <>
      <div className="d-flex justify-content-between powerBarContainer">
        <p className="fieldValue">{name.toUpperCase()}</p>
        <div>
          <div className="power-bar">
            <div
              className="level"
              style={{ width: `${value}px`, backgroundColor: color }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PowerBar;
