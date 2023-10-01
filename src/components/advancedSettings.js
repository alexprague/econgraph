export default function AdvancedSettings({ env, setEnv }) {
  const handleEnvChange = (event) => {
    const { type, name, value } = event.target;
    if (type === "number") {
      if (Number(value) !== 0) {
        setEnv((prevObject) => ({ ...prevObject, [name]: Number(value) }));
      }
    } else {
      setEnv((prevObject) => ({ ...prevObject, [name]: value }));
    }
  };

  const values = [
    { name: "name", display: "Name", type: "text" },
    { name: "height", display: "Height (px)", type: "number" },
    { name: "width", display: "Width (px)", type: "number" },
    { name: "lineWidth", display: "Space Between Lines", type: "number" },
    { name: "labelX", display: "Number of X Labels", type: "number" },
    { name: "labelY", display: "Number of Y Labels", type: "number" },
    { name: "scaleY", display: "Scale Y", type: "number" },
    { name: "scaleX", display: "Scale X", type: "number" },
  ];
  return (
    <div>
      {values.map((item) => (
        <Item
          key={item.name}
          display={item.display}
          name={item.name}
          type={item.type}
          env={env}
          handleEnvChange={handleEnvChange}
        />
      ))}
    </div>
  );
}

function Item({ display, name, env, handleEnvChange, type }) {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div style={{ marginRight: "10px" }}>{display + ":"}</div>
      <input defaultValue={env[name]} type={type} name={name} onChange={handleEnvChange} />
    </div>
  );
}
