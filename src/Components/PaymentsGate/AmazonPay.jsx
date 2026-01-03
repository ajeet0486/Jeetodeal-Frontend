import React from 'react'
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdErrorOutline } from "react-icons/md";
import { LuDot } from "react-icons/lu";
import { GoCopy } from "react-icons/go";
import amazonpay from '../../Images/13.jpeg';
import { AiOutlineSwap } from "react-icons/ai";
import { useState } from "react"
import { Link } from "react-router-dom";

export default function AmazonPay() {
    const [amount, setAmount] = useState("₹700");
    const [name, setName] = useState("Ajeet Kumar");
    const [ifsc, setIfsc] = useState("SBIN0017145");
    const [account, setAccount] = useState("35992724763");
    const copyAmount = () => {
        navigator.clipboard.writeText(amount);
    };
    const copyName = () => {
        navigator.clipboard.writeText(name);
    };
    const copyIfsc = () => {
        navigator.clipboard.writeText(ifsc);
    };
    const copyAccount = () => {
        navigator.clipboard.writeText(account);
    };
     const openAmazonPay = () => {
        window.location.href = "amazonpay://";
        setTimeout(
            () =>
            (window.location.href =
                "https://play.google.com/store/apps/details?id=in.amazon.mShop.android.shopping"),
            1200
        );
    };

    return (
        <div>
            <div style={{ display: "flex", height: "91px", width: "100vw", background: "#27f542" }}>
                <div style={{ display: "flex", alignItems: "center", width: "30%" }}>
                    <Link to="/order" style={{
                        textDecoration: "none",
                        color: "inherit"
                    }}>
                        <MdOutlineKeyboardArrowLeft style={{ width: "50px", height: "50px" }} />
                    </Link>
                </div>
                <div style={{ display: "flex", alignItems: "center", width: "70%" }}><h2>Payment Voucher</h2></div>
            </div>
            <div style={{ width: "100%", height: "610px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div style={{ width: "90%", height: "93%" }}>
                    <div style={{ background: "#EBEBED", marginBottom: "10px", height: "21%" }}>
                        <div style={{ display: "flex", height: "50%" }}>
                            <div style={{ width: "50%", height: "100%" }}><p style={{ marginLeft: "12px" }}>Status Paying</p></div>
                            <div style={{ width: "50%", height: "100%" }}>

                            </div>
                        </div>
                        <div style={{ height: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <div style={{ display: "flex", width: "94%", height: "88%", border: "1px solid black", borderRadius: "8px" }}>
                                <div style={{ width: "10%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <MdErrorOutline style={{ width: "25px", height: "25px" }} />
                                </div>
                                <div style={{ width: "90%", height: "100%", display: "flex", alignItems: "center" }}>
                                    <div style={{ width: "100%", height: "85%", display: "flex", alignItems: "center" }}>
                                        <p style={{ fontSize: "80%", margin: "0" }}>If you have already paid, please wait patiently for the transaction review, please do not cancel the order.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ marginBottom: "10px", height: "38%" }}>
                        <div style={{ display: "flex", height: "25%", width: "100%" }}>
                            <div style={{ height: "100%", width: "50%", display: "flex" }}>
                                <div style={{ width: "15%", height: "100%", display: "flex", alignItems: "center", justifyContent: "right" }}>
                                    <LuDot style={{ height: "38px", width: "38px", color: "green" }} />
                                </div>
                                <div style={{ width: "85%", height: "100%", display: "flex", alignItems: "center" }}>
                                    <p style={{ margin: "0" }}>Amount</p>
                                </div>
                            </div>
                            <div style={{ height: "100%", width: "50%", display: "flex", alignItems: "center", justifyContent: "right" }}>
                                <div style={{ marginRight: "5px", width: "80%", height: "100%", display: "flex", alignItems: "center", justifyContent: "right" }}>
                                    <p style={{ margin: "0" }}>{amount}</p>
                                </div>
                                <div style={{ width: "20%", height: "100%", display: "flex", alignItems: "center" }}>
                                    <button style={{ height: "38px", width: "38px", display: "flex", alignItems: "center" }} onClick={copyAmount}>
                                        <GoCopy style={{ height: "100%", width: "100%" }} />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div style={{ display: "flex", height: "25%", width: "100%" }}>
                            <div style={{ height: "100%", width: "50%", display: "flex" }}>
                                <div style={{ width: "15%", height: "100%", display: "flex", alignItems: "center", justifyContent: "right" }}>
                                    <LuDot style={{ height: "38px", width: "38px", color: "green" }} />
                                </div>
                                <div style={{ width: "85%", height: "100%", display: "flex", alignItems: "center" }}>
                                    <p style={{ margin: "0" }}>Name</p>
                                </div>
                            </div>
                            <div style={{ height: "100%", width: "50%", display: "flex", alignItems: "center", justifyContent: "right" }}>
                                <div style={{ marginRight: "5px", width: "80%", height: "100%", display: "flex", alignItems: "center", justifyContent: "right" }}>
                                    <p style={{ margin: "0" }}>{name}</p>
                                </div>
                                <div style={{ width: "20%", height: "100%", display: "flex", alignItems: "center" }}>

                                    <button style={{ height: "38px", width: "38px", display: "flex", alignItems: "center" }} onClick={copyName}>
                                        <GoCopy style={{ height: "100%", width: "100%" }} />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div style={{ display: "flex", height: "25%", width: "100%" }}>
                            <div style={{ height: "100%", width: "50%", display: "flex" }}>
                                <div style={{ width: "15%", height: "100%", display: "flex", alignItems: "center", justifyContent: "right" }}>
                                    <LuDot style={{ height: "38px", width: "38px", color: "green" }} />
                                </div>
                                <div style={{ width: "85%", height: "100%", display: "flex", alignItems: "center" }}>
                                    <p style={{ margin: "0" }}>IFSC</p>
                                </div>
                            </div>
                            <div style={{ height: "100%", width: "50%", display: "flex", alignItems: "center", justifyContent: "right" }}>
                                <div style={{ marginRight: "5px", width: "80%", height: "100%", display: "flex", alignItems: "center", justifyContent: "right" }}>
                                    <p style={{ margin: "0" }}>{ifsc}</p>
                                </div>
                                <div style={{ width: "20%", height: "100%", display: "flex", alignItems: "center" }}>

                                    <button style={{ height: "38px", width: "38px", display: "flex", alignItems: "center" }} onClick={copyIfsc}>
                                        <GoCopy style={{ height: "100%", width: "100%" }} />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div style={{ display: "flex", height: "25%", width: "100%" }}>
                            <div style={{ height: "100%", width: "50%", display: "flex" }}>
                                <div style={{ width: "15%", height: "100%", display: "flex", alignItems: "center", justifyContent: "right" }}>
                                    <LuDot style={{ height: "38px", width: "38px", color: "green" }} />
                                </div>
                                <div style={{ width: "85%", height: "100%", display: "flex", alignItems: "center" }}>
                                    <p style={{ margin: "0" }}>Account</p>
                                </div>
                            </div>
                            <div style={{ height: "100%", width: "50%", display: "flex", alignItems: "center", justifyContent: "right" }}>
                                <div style={{ marginRight: "5px", width: "80%", height: "100%", display: "flex", alignItems: "center", justifyContent: "right" }}>
                                    <p style={{ margin: "0" }}>{account}</p>
                                </div>
                                <div style={{ width: "20%", height: "100%", display: "flex", alignItems: "center" }}>
                                    <button style={{ height: "38px", width: "38px", display: "flex", alignItems: "center" }} onClick={copyAccount}>
                                        <GoCopy style={{ height: "100%", width: "100%" }} />
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "10px", height: "35%" }}>
                        <div style={{ width: "94%", height: "100%" }}>
                            <div style={{ background: "#878584", width: "100%", height: "45%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <div style={{ width: "94%", height: "65%", display: "flex" }}>
                                    <div style={{ width: "20%", height: "100%" }}>
                                        <img src={amazonpay} style={{ height: '100%', width: "100%" }} />
                                    </div>
                                    <div style={{ width: "30%", height: "100%", display: "flex", alignItems: "center" }}>
                                        <div>
                                            <div><p style={{ margin: "0" }}>MobiKwik</p></div>
                                            <div><p style={{ margin: "0" }}>9647185678</p></div>
                                        </div>
                                    </div>
                                    <div style={{ width: "15%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <AiOutlineSwap style={{ width: "25px", height: "25px" }} />
                                    </div>
                                    <div onClick={openAmazonPay} style={{ width: "35%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <div style={{ background: "#4D4B4A", borderRadius: "9px", width: "60%", height: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}><p style={{ margin: "0" }}>Go</p></div>
                                    </div>
                                </div>
                            </div>
                            <div style={{ marginTop: "12px", width: "100%", height: "55%", borderRadius: "8px", border: "1px solid black" }}>
                                <div style={{ marginTop: "6px" }}>
                                    <div style={{ display: "flex" }}>
                                        <div><MdErrorOutline style={{ width: "25px", height: "25px" }} /></div>
                                        <div> Important Remainder:</div>
                                    </div>
                                    <div>
                                        <p style={{ margin: "0", fontSize: "90%" }}>1.The remittance amount must be consistent !!!</p>
                                        <p style={{ margin: "0", fontSize: "90%" }}>2.Payment must be made using the selected wallet !!!</p>
                                        <p style={{ margin: "0", fontSize: "100%" }}>Otherwise the order will automatically fail.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ width: "100vw", height: "60px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ background: "#EBEBED", width: "90%", height: "75%", display: "flex" }}>

                    <div style={{ width: "90%", height: "100%", display: 'flex', alignItems: "center" }}><p style={{ margin: "0" }}>Order ID:PR2433337339AHS525</p></div>
                    <div style={{ width: "10%", height: "100%", display: 'flex', alignItems: "center", justifyContent: "center" }}>
                        <GoCopy style={{ height: "26px", width: "26px" }} />
                    </div>
                </div>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
}