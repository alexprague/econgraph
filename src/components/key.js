export default function Key() {
  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "right" }}>
      <div
        style={{
          border: "1pt solid black",
          borderRadius: "5px",
          margin: "10px",
          zIndex: "1",
          backgroundColor: "white",
        }}
      >
        <div style={{ display: "grid", gridTemplateColumns: "20px 80px", alignItems: "center" }}>
          <div style={{ width: "10px", height: "10px", backgroundColor: "red", margin: "5px" }}></div>
          <div className="not-selectable">Supply</div>
          <div style={{ width: "10px", height: "10px", backgroundColor: "blue", margin: "5px" }}></div>
          <div className="not-selectable">Demand</div>
        </div>
      </div>
    </div>
  );
}
