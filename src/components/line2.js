import useDragger from "../hooks/useDragger";

export default function Line({ id, env }) {

    const styleColor = {
        backgroundColor: "black",
        width: `${10}px`,
        height: `${env.height * 1.2}px`,
        borderRadius: "5px",
        cursor: "pointer",
    };
    const stylePos = {
        padding: "4px 0px 4px 0px",
        top: "-100px",
        left: `${env.width / 2}px`,

    };
    useDragger(id);
    return (
        <div id={id} className="moveable" style={stylePos}>
            <div style={styleColor}></div>
        </div>
    );
}
