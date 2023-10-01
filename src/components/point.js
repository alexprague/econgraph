import useIntersect from "../hooks/useIntersect";
import useIntersectCurve from "../hooks/useIntersectCurve";

export default function Point({ env, trackID }) {
  const style = {
    backgroundColor: "black",
    width: `${2 * env.radiusBall}px`,
    height: `${2 * env.radiusBall}px`,
    borderRadius: `${env.radiusBall}px`,
    position: "absolute",
    color: `${env.height}`,
  };
  useIntersect("center", trackID[0], trackID[1], env);
  return <div id="center" style={style}></div>;
}
