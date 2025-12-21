import React from 'react'
import MenuBottom from './MenuBottom';
import img9 from '../Images/9.jpeg'
import { PiVideoFill } from "react-icons/pi";

export default function Order() {
    const element = [1, 1, 1, 1, 1, 1, 1, 1, 1];
    return (
        <div style={{ width: "100vw" }}>
            <div style={{ height: "184px", position: "sticky", top: "0px" }}>
                <div style={{ background: "#27F542", height: "59px", width: "100%", display: "flex", justifyContent: "center" }}><h3>INR</h3></div>
                <div style={{ background: "#27F542", display: "flex", height: "75px", width: "100%" }}>
                    <div style={{ width: "20%", display: "flex", justifyContent: "center" }}><h3>INR</h3></div>
                    <div style={{ width: "50%", display: "flex", justifyContent: "center" }}><h3>USDT</h3></div>
                    <div style={{ width: "30%" }}></div>
                </div>
                <div style={{ height: "50px", width: "100%", display: "flex" }}> 
                        <div style={{ width: "21%", display: "flex", justifyContent: "center", alignItems: "center" }}><h4>Small</h4></div>
                        <div style={{ width: "21%", display: "flex", justifyContent: "center", alignItems: "center" }}><h4>Middle</h4></div>
                        <div style={{ width: "21%", display: "flex", justifyContent: "center", alignItems: "center" }}><h4>Large</h4></div>
                        <div style={{ width: "37%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <div style={{ backgroundColor: "#C6C3C3", width: "100%", height: "65%", borderRadius: "8px", display: "flex" }}>
                                <div style={{ width: "30%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <PiVideoFill style={{ width: "33px", height: "33px" }} />
                                </div>
                                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "70%", height: "100%" }}><p style={{ margin: "0" }}>Video Tutorial</p></div>
                            </div>
                        </div>
                </div>
            </div>
            <div style={{ background: "#F1F3F2", height: "680px", width: "100%", overflowY: "scroll" }}>
                {element.map((e, i) =>
                    <div style={{ height: "144px", width: "100%", display: "flex", justifyContent: "center", marginBottom: "10px" }}>
                        <div style={{ background: "white", borderRadius: "15px", height: "100%", width: "95%" }}>
                            <div style={{ height: "35%", borderBottom: "1px solid black", display: "flex" }}>
                                <div style={{ width: "75%", display: "flex", alignItems: "center" }}>
                                    <h5>₹20000</h5>
                                    <div style={{ marginLeft: "8px", width: "40px", height: "23px", background: "#72ED81" }}><p style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "0", color: "white" }}>Bank</p></div>
                                </div>
                                <div style={{ width: "25%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", background: "black", width: "88px", height: "29px", border: "1px solid black", borderRadius: "12px" }}>
                                        <h5 style={{ display: "flex", justifyContent: "center", alignItems: 'center', color: "white", margin: "0" }}>Buy</h5>
                                    </div>
                                </div>
                            </div>
                            <div style={{ height: "65%", display: "flex" }}>
                                <div style={{ width: "25%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <div style={{ width: "80%", height: "80%" }}>
                                        <img src={img9} style={{ height: "100%", width: "100%" }} />
                                    </div>
                                </div>
                                <div style={{ width: "40%", height: "100%" }}>
                                    <div style={{ height: "45%", display: "flex" }}><p>Reward</p></div>
                                    <div style={{ height: "55%" }}><p style={{ marginTop: "0" }}>₹20000 (3.6%)</p>
                                    </div>
                                </div>
                                <div style={{ width: "35%", height: "100%" }}>
                                    <div style={{ height: "45%", display: "flex" }}><p>Quota</p></div>
                                    <div style={{ height: "55%" }}><p style={{ marginTop: "0", color: "blue" }}>+ ₹31780</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div style={{ position: "sticky", bottom: "0" }}><MenuBottom /></div>
        </div>
    );
}