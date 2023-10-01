
export default function Curve({ id, color, angle }) {
    const size = 500
    const styleColor = {
        width: `${size}px`,
        height: `${size}px`,
        pointerEvents: 'none',
        transform: `rotate(${angle}deg)`,
        cursor: "pointer"
    };
    const stylePos = {
      //padding: "4px 0px 4px 0px",
      //transform: `rotate(${angle}deg)`,
    };
    return (
        <div style={styleColor} className="moveable" id={id}>
            <svg viewBox={`0 0 ${size} ${size}`}>
                <path
                    id="curve"
                    d={`
                    M ${5},${size}
                    a ${size-5},${size-5},0,0,0,${size-5},-${size-5}
                    a ${5},${5},0,0,0,${-10},0
                    a ${size-3*5},${size-3*5},0,0,1,-${size-3*5},${size-3*5}
                    a ${5},${5},0,0,0,0,${10}
                    `}
                />
        
                <use href="#curve" fill={color} id="myCircle" style={{pointerEvents: 'auto'}} />
            </svg>
        </div>
    );
  }
  