import Canvas from "./canvas";

export default function Graph({ env }) {
  return (
    <div id="graph" style={{ display: "Grid", gridTemplateColumns: "30px auto", gap: "2px", paddingRight: "110px" }}>
      <div
        style={{
          height: `${env.height}px`,
          width: "30px",
          writingMode: "vertical-lr",
          transform: "rotate(-180deg)",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <strong className="not-selectable">{"Price" + (env.name ? " of " + env.name : "")}</strong>
      </div>
      <Canvas env={env}></Canvas>
      <div style={{ height: "30px", width: "30px" }}>{/*SPACER*/}</div>
      <div
        style={{
          height: "30px",
          width: `${env.width}px`,
          marginLeft: "80px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <strong className="not-selectable">{"Quantity" + (env.name ? " of " + env.name : "")}</strong>
      </div>
    </div>
  );
}
