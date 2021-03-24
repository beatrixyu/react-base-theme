import React from 'react'
import {Link} from 'react-router-dom'
import IHeaderProps from './IHeaderProps'

import './Header.css'
const HeaderMenu: React.FC<IHeaderProps> = ({
    onPress
}) => {
    return (
        <div>
            <header className="landingpageHeader">
                <div className="leftLandingpageHeader">
                    <Link to="/landingpage" className="headerLogo">
                        <h1>REACT.BASE</h1>
                    </Link>
                    <nav>
                      <ul>
                      <li><Link to="/LandingPage" className='headerLogo'>Home</Link></li>
                        <li>
                        <Link to="/posts" className='headerPosts'>Posts</Link>
                        </li>
                        <li><Link to="/post-detail" className='headerPostDetail'>Read More</Link></li>
                        <li><Link to="/homepage" className='headerHome'>About Us</Link></li>                       
                        <li><Link to="/login" className='headerLogin'>Login</Link></li>
                        <li className="signup">
                        <Link to="/signup" className="signupLink">Sign Up</Link></li>
                    </ul>
                </nav>
                </div>
                <div className="rightLandingpageHeader"></div>
            </header> 
            </div>
            )
        }
export default HeaderMenu