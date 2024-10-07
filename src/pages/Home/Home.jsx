import React from "react";
import logo from "../../assets/images/logo.png";



const Home = () => {
    return(
        <>
            <div>
                <img src={logo}
                     alt="logo"
                     style={{
                         width: "100px",
                         height: "100px"
                }}/>
            </div>
        </>
    )
};

export default Home;