import React from "react"
import MenuBottom from "./MenuBottom";

export default function My(){

    return(
        <div style={{width:"100vw"}}>
                    <div style={{height:"54px",border:"1px solid black"}}></div>
                    <div style={{height:"251px",border:"1px solid black"}}></div>
                    <div style={{height:"100px",border:"1px solid black"}}></div>
                    <div style={{height:"220px",border:"1px solid black"}}></div>
                    <div style={{height:"200px",border:"1px solid black"}}></div>
                    <div style={{height:"150px",border:"1px solid black"}}></div>
                    <div style={{position:"sticky",bottom:"0"}}>
                        <MenuBottom/>
                    </div>
                </div>
    );
}