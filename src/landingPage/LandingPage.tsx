import React from 'react'
import ILandingPageProps from './ILandingPageProps'
import Header from '../headerMenu/Header'
import Footer from '../footer/Footer'

import landingpage from "../assets/landingpage.png"
import landingpage2 from '../assets/window.gif'
import girl from '../assets/girl.png'
import flow from '../assets/flow.gif'
import landingpage5 from '../assets/landingpage2.png'

import './LandingPage.css'

const LandingPage: React.FC<ILandingPageProps> = ({
    onPress
}) => {
    return (
        <div>
            <div className="landingpageContainerOne">
              <div className="leftContainer">
                <div></div>
                <div className="leftContainerText">
                <h1>
                    A Library for <br></br> React
                </h1>
                <h2>
                    Optimizing your <br/> coding experience
                </h2>
                <button onClick={onPress}>
                Start Free Trail
                </button>
                </div>
            </div>
            <div className="rightContainer">
                <div>
                    <img src={landingpage} />
                </div>
            </div>
        </div>
        <div className="landingpageContainerTwo">
                <div className="leftContainerTwo">
                    <img src={landingpage2}/>
                </div>
                <div className="rightContainerTwo">
                    <main>
                        <h1>A  Library <br/>to Code Faster</h1>
                    </main>
                </div>
            </div>
            <div className="landingpageContainerThree">
                <div className="leftContainerThree">
                    <img src={girl}/>
                </div>
                <div className="rightContainerThree">
                    <main>
                        <h1>Development <br/>Process</h1>
                    </main>
                    <section>
                        <ul>
                            <li><i className="fas fa-caret-right"></i><i className="fas fa-caret-right"></i><a href="">Download React UI kit</a></li>
                            <li><i className="fas fa-caret-right"></i><i className="fas fa-caret-right"></i><a href="">Show all posts</a></li>
                        </ul>
                    </section>
                </div>
            </div>
            <div className="landingpageContainerFour">
                <div className="leftContainerFour">
                    <h1>Your UI Kit <br />for React</h1>
                </div>
                <div className="rightContainerFour">
                    <div className="rightContainerFourImg"><img src={flow} /></div>
                    <div className="rightContainerFourDiv"></div>
                </div>
            </div>
           
            <div className="landingpageContainerFive">
                <h2>Trusted by the World’s Best Companies</h2>
                <div className="containerFiveGallery">
                    <img src={landingpage5} />
                <img src={landingpage5}/>
                <img src={landingpage5}/>
                <img src={landingpage5}/>
                <img src={landingpage5}/>
                <img src={landingpage5}/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}


export default LandingPage;
