import React from 'react'
import MenuBottom from './MenuBottom';
import img9 from '../Images/9.jpeg'
import { PiVideoFill } from "react-icons/pi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useState } from "react";
import { Link } from "react-router-dom";
import img11 from '../Images/11.jpeg';
import img12 from '../Images/12.jpeg';
import img13 from '../Images/13.jpeg';


export default function Order() {
    const [modelDisplay, setModelDisplay] = useState("none")
    const openPaymentGate = () => {
        setModelDisplay("flex")
    }
    const closeModel = () => {
        setModelDisplay("none")
    }
    const element = [1, 1, 1, 1, 1, 1, 1, 1, 1];
    return (
        <div style={{ width: "100vw" }}>
            <div
                onClick={closeModel}
                style={{
                    position: "fixed",
                    inset: "0",
                    background: "rgba(0, 0, 0, 0.5)",
                    display: modelDisplay,
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <div
                    onClick={(event) => event.stopPropagation()}
                    style={{
                        height: "300px",
                        width: "300px",
                        borderRadius: "15px",
                        background: "white",
                    }}
                >
                    <div style={{ height: "100%" }}>

                        <div style={{ display: "flex", justifyContent: "center", height: "20%", width: "100%" }}><h4>Select Payment wallet</h4></div>
                        <div style={{ height: "80%", width: "100%" }}>
                            <div style={{ display: "flex", margin: "13px 0" }}>
                                <div style={{ width: "20%", height: "100%" }}> <img src={img11} style={{ width: "100%", height: "100%" }} /></div>
                                <div style={{ width: "60%", marginLeft: "20px" }}>
                                    <div><p style={{ margin: "0" }}>Freecharge</p></div>
                                    <div><p style={{ fontSize: "72%", color: "red", margin: "0" }}>Not authenticated, please authenticate first.</p></div>
                                </div>
                                <div style={{ width: "20%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <Link to="/freecharge" style={{
                                        textDecoration: "none",
                                        color: "inherit"
                                    }}>
                                        <MdKeyboardArrowRight style={{ width: "26px", height: "26px" }} />
                                    </Link>
                                </div>
                            </div>
                            <div style={{ display: "flex", margin: "13px 0" }}>
                                <div style={{ width: "20%", height: "100%" }}> <img src={img12} style={{ width: "100%", height: "100%" }} /></div>
                                <div style={{ width: "60%", marginLeft: "20px" }}>
                                    <div>

                                        <p style={{ margin: "0" }}>MobiKwik</p>
                                    </div>
                                    <div><p style={{ fontSize: "72%", color: "red", margin: "0" }}>Not authenticated, please authenticate first.</p></div>
                                </div>
                                <div style={{ width: "20%", display: "flex", alignItems: "center", justifyContent: "center" }}>

                                    <Link to="/mobikwik" style={{
                                        textDecoration: "none",
                                        color: "inherit"
                                    }}>
                                        <MdKeyboardArrowRight style={{ width: "26px", height: "26px" }} />
                                    </Link>
                                </div>
                            </div>
                            <div style={{ display: "flex", margin: "13px 0" }}>
                                <div style={{ width: "20%", height: "100%" }}> <img src={img13} style={{ width: "100%", height: "100%" }} /></div>
                                <div style={{ width: "60%", marginLeft: "20px" }}>
                                    <div><p style={{ margin: "0" }}>Amazon Pay</p></div>
                                    <div><p style={{ fontSize: "72%", color: "red", margin: "0" }}>Not authenticated, please authenticate first.</p></div>
                                </div>
                                <div style={{ width: "20%", display: "flex", alignItems: "center", justifyContent: "center" }}>

                                    <Link to="/amazonpay" style={{
                                        textDecoration: "none",
                                        color: "inherit"
                                    }}>
                                        <MdKeyboardArrowRight style={{ width: "26px", height: "26px" }} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div style={{ height: "184px", position: "sticky", top: "0px" }}>
                    <div style={{ background: "#27F542", height: "59px", width: "100%", display: "flex", justifyContent: "center" }}>
                        <div style={{ width: "33%" }}></div>
                        <div style={{ width: "33%", display: "flex", justifyContent: "center" }}><h3>INR</h3></div>
                        <div style={{ width: "33%", display: "flex", justifyContent: "center" }}>
                            <Link to="/enjoy" style={{
                                textDecoration: "none",
                                color: "inherit"
                            }}>

                                <h3 style={{ background: "white", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "12px", width: "155%", height: "50%" }}>Enjoy</h3>


                            </Link>
                        </div>
                    </div>
                    <div style={{ background: "#27F542", display: "flex", height: "75px", width: "100%" }}>
                        <div style={{ width: "20%", display: "flex", justifyContent: "center" }}><h3>INR</h3></div>
                        <div style={{ width: "50%", display: "flex", justifyContent: "center" }}><h3>USDT</h3></div>
                        <div style={{ width: "30%" }}></div>
                    </div>
                    <div style={{ height: "50px", width: "100%", display: "flex", zIndex: "2" }}>
                        <div style={{ width: "21%", display: "flex", justifyContent: "center", alignItems: "center" }}><h4>Small</h4></div>
                        <div style={{ width: "21%", display: "flex", justifyContent: "center", alignItems: "center" }}><h4>Middle</h4></div>
                        <div style={{ width: "21%", display: "flex", justifyContent: "center", alignItems: "center" }}><h4>Large</h4></div>
                        <div style={{ width: "37%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <div style={{ backgroundColor: "#C6C3C3", width: "100%", height: "65%", borderRadius: "8px", display: "flex" }}>

                                <Link to="/youtube" style={{
                                    textDecoration: "none",
                                    color: "inherit"
                                }}>

                                    <div style={{ width: "100%", height: "100%", display: "flex" }}>
                                        <div style={{ width: "20%", height: "100%", justifyContent: "center", alignItems: "center" }}>
                                            <PiVideoFill style={{ width: "33px", height: "33px" }} />
                                        </div>

                                        <div style={{ width: "80%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                            <p style={{ marginLeft: "4px", fontSize: "16px" }}>Video Tutorial</p>
                                        </div>
                                    </div>

                                </Link>
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
                                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "88px", height: "29px" }}>
                                            <button onClick={openPaymentGate} style={{ height: "100%", width: "100%", borderRadius: "12px", background: "black", display: "flex", justifyContent: "center", alignItems: 'center', color: "white", margin: "0" }}>Buy</button>
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
                                        <div style={{ height: "55%" }}><p style={{ marginTop: "0" }}>₹700 (50.8%)</p>
                                        </div>
                                    </div>
                                    <div style={{ width: "35%", height: "100%" }}>
                                        <div style={{ height: "45%", display: "flex" }}><p>Quota</p></div>
                                        {<div style={{ height: "55%" }}><p style={{ marginTop: "0", color: "blue" }}>₹{700+(700*(50.8/100))}</p></div>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div style={{ position: "sticky", bottom: "0" }}><MenuBottom /></div>

            </div>

        </div >

    );
}