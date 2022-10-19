import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import { Link } from '@material-ui/core';

const Footer = () => {
    const linkList = [{
        text: "English(Australia)",
        link: "/home"
    },{
        text: "Sales And Refunds",
        link: "/home"
    },{
        text: "Site Maps",
        link: "/home"
    },{
        text: "About Us", 
        link:  "https://github.com/HoKwongHO/IT-Project"
    },{
        text: "Home 2022",
        link: "/home"
    }]
  return (
    <div className="footerWrapper">
        {/* <div className="footerBox">
            <div className="item">
                <div className="title">Shop Food</div>
                <p>Sandwich</p>
                <p>Salad & sushi</p>
                <p>Hot Food</p>
                <p>Sweet Food</p>
                <p>Comfort Food</p>
            </div>
            <div className="item">
                <div className="title">Shop Drink</div>
                <p>Coffee</p>
                <p>Soft Drink</p>
                <p>Water</p>
            </div>
        </div> */}
        <div className="footerLinks">
            <ul>
                { linkList.map((item,index) => {
                    return (
                        <li key={index}>
                            <Link to={item.link}>{item.text}</Link>
                        </li>
                    )
                }) }
            </ul>
            <div>
                <Link href="https://www.instagram.com/" target="_blank" >
                    <InstagramIcon/>
                </Link>
                <Link href="https://www.facebook.com/" target="_blank" >
                    <FacebookIcon/>
                </Link>
                <Link href="https://www.twitter.com/" target="_blank" >
                    <TwitterIcon/>
                </Link>
                
            </div>
        </div>
    </div>
  )
}

export default Footer