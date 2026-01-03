import React from "react"
import MenuBottom from "./MenuBottom";

export default function YouTube() {

    return (
        <div  style={{width: "100vw" }}>
            <div style={{ border:"1px solid black",height: "411px", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <iframe style={{ width: "40vh", height: "40vh" }}
                    src="https://www.youtube.com/embed/Hy_CVW41RRk"
                    allowfullscreen>
                </iframe>

            </div>
            <div style={{border:"1px solid black",height: "511px", width: "100%"}}>

            </div>
            <div style={{position:"sticky",bottom:"0"}}>
                <MenuBottom />
            </div>
        </div>
    );
}