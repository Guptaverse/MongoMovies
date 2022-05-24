import React from "react";
import Socials from "./Socials"
const Footer = ()=>{
    return (
        <div className="footer">
            <h3>Crafted by Shivam Gupta</h3>
            <Socials icon ="linkedin"/>
            <Socials icon ="leetcode"/>
            <Socials icon ="github"/>
            <Socials icon ="codechef"/>
        </div>
    )
}
export default Footer;
