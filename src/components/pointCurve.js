import useIntersect from "../hooks/useIntersect";
import useIntersectCurve from "../hooks/useIntersectCurve";

export default function PointCurve({ env, trackID }) {
  const style = {
    backgroundColor: "black",
    width: `${2 * env.radiusBall}px`,
    height: `${2 * env.radiusBall}px`,
    borderRadius: `${env.radiusBall}px`,
    position: "absolute",
    color: `${env.height}`,
  };
  useIntersectCurve("center", trackID[0], trackID[1], env);
  return <div id="center" style={style}></div>;
}
