export default function ConnectionLines() {
  const styleSide = {
    position: "absolute",
    border: "1px dashed black",
    width: "0px",
    top: "400px",
  };
  const stylePos = {
    position: "absolute",
    border: "1px dashed black",
    height: "100%",
    top: "400px",
  };
  return (
    <div>
      <div id="side" style={styleSide}></div>
      <div id="up" style={stylePos}></div>
    </div>
  );
}
