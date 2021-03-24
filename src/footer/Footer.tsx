import React from 'react'
import IFooterProps from './IFooterProps'

import footer1 from '../assets/footer1.png'
import footer2 from '../assets/footer2.png'

import './Footer.css'

const Footer: React.FC<IFooterProps> = ({
    onPress
}) => {
    return (
        <div>
            <footer className="landingpageFooter">
                <nav className="footerNavOne">
                <ul>
                    <li>Home</li>
                    <li>Posts</li>
                    <li className="footerLogo"><h1>React.Base</h1></li>
                    <li>About</li>
                    <li>Contact Us</li>
                </ul>
                </nav>
                <nav className="footerNavTwo">
                <ul>
                    <li><i className="fab fa-facebook-square"></i></li>
                    <li><i className="fab fa-instagram"></i></li>
                    <li><i className="fab fa-twitter-square"></i></li>
                    <li></li>
                </ul>
                </nav>
                <div className="footerIcon">
                    <img className="footer1" src={footer1} />
                    <img className="footer2" src={footer2} />
                </div>

            </footer>
            </div>
            )
        }
export default Footer