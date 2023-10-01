
export default function Follower({ env, trackID }) {
  const stylePos = {
    backgroundColor: "white",
    width: "125px",
    height: "40px",
    borderRadius: "10px",
    position: "absolute",
    marginLeft: "40px",
    marginTop: "-20px",
    border: "1px solid black",
    textAlign: "center",
    userSelect: "none",
  };
  const titleStyle = {
    display: "block",
  };

  return (
    <div id="center2" style={stylePos}>
      <div style={titleStyle} className="not-selectable">
        Price: $<span id="price">{/*document.getElementById("center").offsetLeft*/}</span>
      </div>

      <div style={titleStyle} className="not-selectable">
        Quantity: <span id="quantity">{/*document.getElementById("center").offsetTop*/}</span>
      </div>
    </div>
  );
}
