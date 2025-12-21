import React from 'react'
import MenuBottom from './MenuBottom';
import img10 from '../Images/10.jpeg';

export default function Upi(){


    return(
        <div style={{height:"100vh"}}>
            <div style={{height:"8%",display:"flex",alignItems:"bottom"}}>
                <h2 style={{marginLeft:"20px"}}>UPI</h2>
            </div>
            <div style={{height:"8%",display:"flex"}}>
                <div style={{width:"22%",height:"100%",display:"flex",justifyContent:"center"}}>
                    <h3>Sell</h3>
                </div>
                <div style={{width:"78%",height:"100%"}}>
                    <h3>Buy</h3>
                </div>
            </div>
            <div style={{height:"67%",display:"flex",alignItems:"center",justifyContent:"center"}}>
                <div style={{height:"50%",width:"60%"}}>
                    <div style={{height:"50%",width:"100%"}}>
                        <img  style={{width:"100%",height:"100%" }} src={img10} alt="" />
                    </div>
                    <div style={{display:"flex",alignItems:"center",flexDirection:"column"}}>
                        <h3 style={{marginTop:"0"}}>No Data</h3>
                        <h3 style={{margin:"0",color:"#C7BAB9"}}>Please Add UPI Account</h3>
                    </div>
                </div>
            </div>
            <div style={{height:"11%",display:"flex",justifyContent:"center",alignItems:"center"}}>
                <div style={{height:"64%",width:"90%",display:"flex",justifyContent:"center",background:"black",borderRadius:"12px"}}>
                        <h3 style={{color:"white"}}>Add UPI Account</h3>
                </div>
            </div>

            <div style={{position:"sticky",bottom:"0"}}><MenuBottom/></div>
        </div>
    );
}