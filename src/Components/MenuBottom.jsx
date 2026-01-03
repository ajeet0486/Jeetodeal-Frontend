import React from "react"
import { CiHome } from "react-icons/ci";
import { CiViewList } from "react-icons/ci";
import { AiOutlineTeam } from "react-icons/ai";
import { VscSave } from "react-icons/vsc";
import { IoIosAddCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";

export default function MenuBottom() {
    return (
        <div style={{ display: 'flex', justifyContent: "space-around", position: "sticky", bottom: "0", background: "white" }}>
            <div>
                <Link to="/" style={{
                    textDecoration: "none",
                    color: "inherit",
                    
                }}>
                    <CiHome style={{ width: "26px", height: "26px" }} />
                    <p style={{ margin: "0", display: "flex", justifyContent: "center" }}>Home</p>
                </Link>

            </div>
            <div>
                <Link to="/order" style={{
                    textDecoration: "none",
                    color: "inherit"
                }}>
                    <CiViewList style={{ width: "26px", height: "26px" }} />
                    <p style={{ margin: "0", display: "flex", justifyContent: "center" }}>Order</p>
                </Link>
            </div>
            <div>
                <Link to="/upi" style={{
                    textDecoration: "none",
                    color: "inherit"
                }}>
                    <IoIosAddCircleOutline style={{color:"#27F542", width: "26px", height: "26px" }} />
                    <p style={{ margin: "0", display: "flex", justifyContent: "center" }}>UPI</p>
                </Link>
            </div>
            <div>
                <Link to="/team" style={{
                    textDecoration: "none",
                    color: "inherit"
                }}>
                    <AiOutlineTeam style={{ width: "26px", height: "26px" }} />
                    <p style={{ margin: "0", display: "flex", justifyContent: "center" }}>Team</p>
                </Link>
            </div>
            <div>
                <Link to="/my" style={{
                    textDecoration: "none",
                    color: "inherit"
                }}>
                    <VscSave style={{width: "26px", height: "26px" }} />
                    <p style={{ margin: "0", display: "flex", justifyContent: "center" }}>My</p>
                </Link>
            </div>
        </div>

    );
}