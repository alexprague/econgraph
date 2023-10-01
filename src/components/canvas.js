import Line from "./line";
import Line2 from "./line2";
import Curve from "./curve";
import Point from "./point";
import PointCurve from "./pointCurve";
import GridLine from "./gridLine";
import Follower from "./follower";
import Numbers from "./numbers";
import ConnectionLines from "./connectionLines";
import Key from "./key.js";

export default function Canvas({ env }) {
  const width = env.width;
  const height = env.height;

  return (
    <div style={{ width: `${width + 80}px`, height: `${height + 20}px`, position: "relative" }}>
      <Numbers env={env}></Numbers>
      <div
        className="container"
        style={{ width: `${width}px`, height: `${height}px`, left: "80px", top: "0px", position: "absolute" }}
      >
        <GridLine env={env}></GridLine>
        <Key></Key>
        <ConnectionLines></ConnectionLines>

        {!env.macro && <Line id={"demand"} angle={45} color={"blue"} env={env} ></Line>}
        {!env.macro && <Line id={"supply"} angle={-45} color={"red"} env={env} ></Line>}
        {!env.macro && <Point env={env} trackID={["demand", "supply"]}></Point>}

        {env.macro && <Curve id={'demand'} color={'blue'} angle={0}></Curve>}
        {env.macro && <Curve id={'supply'} color={'red'} angle={90}></Curve>}
        {env.macro && <Line2 id={'tracker'} env={env}></Line2>}
        {env.macro && <PointCurve env={env} trackID={["demand", "supply"]}></PointCurve>}

        <Follower env={env} trackID={["demand", "supply"]}></Follower>
      </div>
    </div >
  );
}
