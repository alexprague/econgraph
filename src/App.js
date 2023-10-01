import "./App.css";
import env from "./env.js";
import Graph from "./components/graph";
import AdvancedSettings from "./components/advancedSettings";
import Settings from "./components/settings";
import queryString from "query-string";
import { useState, useEffect } from "react";

import ReactGA from 'react-ga4';
const TRACKING_ID = "G-R9K8K9656B"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);
ReactGA.send({
    hitType: "pageview",
    page: window.location.pathname,
});

var firstLoad = true;

function App() {
    if(firstLoad){
        var new_iframe = document.createElement("iframe");
        document.body.appendChild(new_iframe);
        new_iframe.style.display = "none";
        new_iframe.src="https://alertzy.app/send?accountKey=m143fegulr79ila&title=Fredrich Graph Program Sniff&message=someone loaded up econ graph!";
        setTimeout(()=>{new_iframe.remove()},1000);
        firstLoad = false;
    }
        
    const [envObject, setEnv] = useState(env);

    useEffect(() => {
        const urlParams = queryString.parse(window.location.search);
        Object.keys(urlParams).forEach((key) => {
            if (key === "name") urlParams[key] = urlParams[key]
            else if (key === "macro") urlParams[key] = (urlParams[key]) === 'true'
            else urlParams[key] = Number(urlParams[key])
        });
        if (Object.keys(urlParams).length > 0) {
            setEnv({ ...urlParams });
        }
    }, []);

    const [showSettings, changeShowSettings] = useState(false)

    return (
        <div className="App" style={{ display: "grid", placeItems: "center" }}>

        <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
            <button style={{ width: '55px', visibility: 'hidden' }}></button>


<div className="not-selectable" style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "20px", marginBottom: "20px" }}>
    <div style={{ display: "flex", justifyContent: "center" }}>
        <h1 style={{ margin: "0px", width: "200px", textAlign: "right" }} >Supply</h1>
<h1 style={{ margin: "0px 10px 0px 10px" }}>&</h1>
<h1 style={{ margin: "0px", width: "200px", textAlign: "left" }} >Demand</h1>
</div>
<h1 style={{ margin: "0px" }}>Live!</h1>
</div>


<img id="settingWheel" src={require('./pictures/icon.png')} onClick={() => changeShowSettings(!showSettings)} style={{ width: "35px", height: "35px", marginTop: "20px", marginRight: "20px" }} />


</div>

<div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
    <Graph env={envObject}></Graph>
<Settings env={envObject} setEnv={setEnv} show={showSettings} setShow={changeShowSettings}></Settings>


</div>

</div >
);
}

export default App;
