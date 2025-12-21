import React from "react"
import ImgSlider from "./ImgSlider";
import { CgArrowBottomLeft } from "react-icons/cg";
import { CgArrowTopRight } from "react-icons/cg";
import { TbShoppingCartDown } from "react-icons/tb";
import { TbShoppingCartUp } from "react-icons/tb";
import { FaRegMessage } from "react-icons/fa6";
import { HiOutlineArrowCircleRight } from "react-icons/hi";
import { HiArrowSmallRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import MenuBottom from "./MenuBottom";
import img5 from "../Images/5.jpeg";
import img6 from "../Images/6.jpeg";
import img7 from "../Images/7.jpeg";
import img8 from "../Images/8.jpeg";

export const Home = () => {
    const images = [img5, img6, img7, img8];
    return (
        <div className="box1" style={styles.box1}>
            <div className="box11" style={{ marginBottom: "10px", zIndex: "1", background: "#BBF090", height: "40px", display: "flex", justifyContent: "space-between", position: "sticky", top: "0px" }}>
                <div style={{ display: "flex", alignItems: "center" }}><h3 style={{ marginLeft: "10px" }}>Ajeeto Deal</h3></div>
                <div style={{ display: "flex", alignItems: "center" }}><FaRegMessage style={{ width: "25px", height: "25px", marginRight: "10px" }} /></div>
            </div>
            <div className="box11" id="box112" style={{ height: "190px", display: "flex", justifyContent: "center" }}>
                <ImgSlider />
            </div>
            <div className="box11" id="box113" style={{ height: "100px", display: "flex", marginTop: "12px", justifyContent: "space-around" }}>
                <Link to="/order" style={{
                    textDecoration: "none",
                    color: "inherit",
                    width: '45%', display: "flex", justifyContent: "space-around", backgroundColor: "#5EF527", borderRadius: "12px"
                }}>
                    <div>
                        <div><CgArrowBottomLeft style={{ width: "40px", height: "40px" }} /></div>
                        <div><h2 style={{ margin: "0" }}>Buy</h2></div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", marginRight: "12px" }}><TbShoppingCartDown style={{ width: "50px", height: "50px" }} /></div>

                </Link>
    
                <Link to="/upi" style={{
                    textDecoration: "none",
                    color: "inherit",
                    width: '45%', display: "flex", justifyContent: "space-around", backgroundColor: "#27CCF5", borderRadius: "12px"
                }}>
                    <div>
                        <div><CgArrowTopRight style={{ width: "40px", height: "40px" }} /></div>
                        <div><h2 style={{ margin: "0" }}>Sell</h2></div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", marginRight: "12px" }}><TbShoppingCartUp style={{ width: "50px", height: "50px" }} /></div>

                </Link>
            </div>
            <div className="box11" id="box114" style={{ marginTop: "12px", height: "215px", display: 'flex', justifyContent: "center" }}>
                <div style={{ width: "95%", background: "white", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.08),0 1px 3px rgba(0, 0, 0, 0.05)" }}>
                    <div style={{ display: "flex", justifyContent: "space-around" }}>
                        <div>
                            <h2>Buy DCoin by USDT</h2>
                            <h4>5.32% profit per each order</h4>
                        </div>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <HiOutlineArrowCircleRight style={{ width: "40px", height: "40px" }} />
                        </div>
                    </div>
                    <hr />
                    <div style={{ display: "flex", justifyContent: "space-around" }}>
                        <div>
                            <p style={{ margin: "0" }}>Binance Price(Rs)</p>
                            <h2 style={{ margin: "0" }}>94</h2>
                        </div>
                        <div >
                            <p style={{ margin: "0" }}>Binance Price(Rs)</p>
                            <h2 style={{ margin: "0" }}>94</h2>
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
            <div className="box11" id="box115" style={{ marginTop: "12px", height: "80px", display: 'flex', justifyContent: "center" }}>

                <div style={{ display: 'flex', justifyContent: "space-around", width: "95%", background: "white", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.08),0 1px 3px rgba(0, 0, 0, 0.05)" }}>
                    <div>
                        <h2 style={{ margin: "0" }}>Buy Dcoin by Rupee</h2>
                        <p style={{ margin: "0" }}>--profit per each order</p>
                    </div>
                    <div style={{ display: 'flex', alignItems: "center", justifyContent: "right" }}>
                        <HiOutlineArrowCircleRight style={{ width: "40px", height: "40px" }} />
                    </div>
                </div>
            </div>
            <div className="box11" id="box116" style={{ height: "220px", display: "flex", justifyContent: "center",marginTop:"18px" }}>
                <div style={{ width: "95%", background: "white", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.08),0 1px 3px rgba(0, 0, 0, 0.05)" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", height: "25%", alignItems: "center" }}>
                        <div style={{ marginLeft: "10px" }}><h3 >Tutorial</h3></div>
                        <div style={{ backgroundColor: "black", display: "flex", alignItems: "center", justifyContent: "center", height: "30px", width: '70px', marginRight: "10px", border: "1px solid black", borderRadius: "10px" }}><p style={{ color: "white" }}>MORE</p></div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "center", height: "75%" }}>
                        <div style={{ width: "95%", height: "100%" }}>
                            <div style={{ marginBottom: "3px", display: "flex", justifyContent: "space-around", height: "50%" }}>
                                <div style={{ width: "15%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <div style={{ width: "60px", height: "60px" }}>
                                        <img src={images[0]} alt="" srcset="" style={{ height: "100%", width: "100%" }} />
                                    </div>
                                </div>
                                <div style={{ width: "70%", display: "flex", flexDirection: "column", justifyContent: "space-between", marginLeft: "4px" }}>
                                    <h4 style={{ margin: "0" }}>Platform Introduction</h4>
                                    <p style={{ margin: "0" }}>18/02/2025 09:52:09</p>
                                </div>
                                <div style={{ width: "15%", display: "flex", justifyContent: "right" }}>
                                    <HiArrowSmallRight />
                                </div>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-around", height: "50%" }}>
                                <div style={{ width: "15%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <div style={{ width: "60px", height: "60px" }}>
                                        <img src={images[1]} alt="" srcset="" style={{ height: "100%", width: "100%" }} />
                                    </div>
                                </div>
                                <div style={{ width: "70%", display: "flex", flexDirection: "column", justifyContent: "space-between", marginLeft: "4px" }}>
                                    <h4 style={{ margin: "0" }}>Platform Introduction</h4>
                                    <p style={{ margin: "0" }}>18/02/2025 09:52:09</p>
                                </div>
                                <div style={{ width: "15%", display: "flex", justifyContent: "right" }}>
                                    <HiArrowSmallRight />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <div className="box11" id="box116" style={{ height: "220px",display: "flex", justifyContent: "center",marginTop:"18px" }}>
                <div style={{ width: "95%", background: "white", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.08),0 1px 3px rgba(0, 0, 0, 0.05)" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", height: "25%", alignItems: "center" }}>
                        <div style={{ marginLeft: "10px" }}><h3 >Policies</h3></div>
                        <div style={{ backgroundColor: "black", display: "flex", alignItems: "center", justifyContent: "center", height: "30px", width: '70px', marginRight: "10px", border: "1px solid black", borderRadius: "10px" }}><p style={{ color: "white" }}>MORE</p></div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "center", height: "75%" }}>
                        <div style={{ width: "95%", height: "100%" }}>
                            <div style={{ marginBottom: "3px", display: "flex", justifyContent: "space-around", height: "50%" }}>
                                <div style={{ width: "15%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <div style={{ width: "60px", height: "60px" }}>
                                        <img src={images[2]} alt="" srcset="" style={{ height: "100%", width: "100%" }} />
                                    </div>
                                </div>
                                <div style={{ width: "70%", display: "flex", flexDirection: "column", justifyContent: "space-between", marginLeft: "4px" }}>
                                    <h4 style={{ margin: "0" }}>Invite friend to earn extra rewards</h4>
                                    <p style={{ margin: "0" }}>18/02/2025 09:52:09</p>
                                </div>
                                <div style={{ width: "15%", display: "flex", justifyContent: "right" }}>
                                    <HiArrowSmallRight />
                                </div>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-around", height: "50%" }}>
                                <div style={{ width: "15%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <div style={{ width: "60px", height: "60px" }}>
                                        <img src={images[3]} alt="" srcset="" style={{ height: "100%", width: "100%" }} />
                                    </div>
                                </div>
                                <div style={{ width: "70%", display: "flex", flexDirection: "column", justifyContent: "space-between", marginLeft: "4px" }}>
                                    <h4 style={{ margin: "0" }}>Important Guidelines</h4>
                                    <p style={{ margin: "0" }}>18/02/2025 09:52:09</p>
                                </div>
                                <div style={{ width: "15%", display: "flex", justifyContent: "right" }}>
                                    <HiArrowSmallRight />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <MenuBottom />

        </div>
    );

}
const styles = {
    box1: {
        width: "100vw",
    }
};
export default Home;

