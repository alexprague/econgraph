export default function GridLine({ env }) {
  const lineWidth = env.lineWidth;
  const nX = Math.floor(env.width / env.lineWidth);
  const nY = Math.floor(env.height / env.lineWidth);

  const styleY = (n) => {
    return {
      backgroundColor: "#eeeeee",
      width: "100%",
      height: "2px",
      position: "absolute",
      top: `${(n + 1) * lineWidth-1}px`,//1 is width/2
      left: "0px", //add 1 so first line is not at x=0
    };
  };
  const styleX = (n) => {
    return {
      backgroundColor: "#eeeeee",
      width: "2px",
      height: "100%",
      position: "absolute",
      top: "0px",
      left: `${(n + 1) * lineWidth -1}px`, //add 1 so first line is not at x=0
    };
  };

  return (
    <div>
      {[...Array(nY).keys()].map((n) => (
        <div key={n} style={styleY(n)}></div>
      ))}
      {[...Array(nX).keys()].map((n) => (
        <div key={n} style={styleX(n)}></div>
      ))}
    </div>
  );
}
