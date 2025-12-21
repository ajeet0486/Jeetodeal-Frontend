import React from "react"
import MenuBottom from "./MenuBottom";

export default function Team(){

    return(
        <div style={{width:"100vw"}}>
            <div style={{height:"54px",border:"1px solid black"}}>
                <h2 style={{marginLeft:"15px"}}>Team</h2>
            </div>
            <div style={{height:"380px",border:"1px solid black"}}></div>
            <div style={{height:"180px",border:"1px solid black"}}>
                <div style={{display:"flex",height:"35%",border:"1px solid black",width:"100%",justifyContent:"center",alignItems:"center"}}><h4>Team Cashback</h4></div>
                <div style={{height:"65%",border:"1px solid black",width:"100%"}}></div>
            </div>
            <div style={{height:"180px",border:"1px solid black"}}></div>
            <div style={{height:"180px",border:"1px solid black"}}></div>
            <div style={{height:"180px",border:"1px solid black"}}></div>
            <div style={{position:"sticky",bottom:"0"}}>
                <MenuBottom/>
            </div>
        </div>
    );
}