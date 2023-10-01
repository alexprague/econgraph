export default function Numbers({ env }) {
  const lineWidth = env.lineWidth;
  const width = env.width;
  const height = env.height;
  const nX = env.labelX;
  const nY = env.labelY;
  const numberX = Math.floor(width / lineWidth);
  const numberY = Math.floor(height / lineWidth);
  const spaceX = numberX / (nX + 1);
  const spaceY = numberY / (nY + 1);

  //x style
  const styleX = (n) => {
    return {
      top: height,
      left: `${(spaceX * (n + 1) - 0.5) * lineWidth + 80 + 1}px`,
      position: "absolute",
      height: "20px",
      width: lineWidth,
      display: "flex",
      alignItems: "top",
      justifyContent: "center",
    };
  };
  //y style
  const styleY = (n) => {
    return {
      top: `${(spaceY * (n + 1) - 0.5) * lineWidth}px`,
      left: "0px",
      position: "absolute",
      height: lineWidth,
      width: "80px",
      display: "flex",
      alignItems: "center",
      justifyContent: "right",
    };
  };

  return (
    <div>
      {[...Array(nY).keys()].map((m) => (
        <div key={m} style={styleY(m)} className="not-selectable">
          {"$" + ((height - spaceY * (m + 1) * lineWidth) / env.scaleY).toFixed(2)}
        </div>
      ))}
      {[...Array(nX).keys()].map((m) => (
        <div key={m} style={styleX(m)} className="not-selectable">
          {Math.round((spaceX * (m + 1) * lineWidth) / env.scaleX)}
        </div>
      ))}
    </div>
  );
}
