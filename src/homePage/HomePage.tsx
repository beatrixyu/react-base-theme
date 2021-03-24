import React from 'react';

import IHomePageProps from '../homePage/IHomePageProps'
import girl from '../assets/girl.png'
import book from '../assets/book.gif'

import EmailSubmit from '../emailSubmit/EmailSubmit'

import logoXXL from '../assets/logoXXL.png'
import bluelogo2 from '../assets/bluelogo2.png'

import './HomePage.css'

const HomePage: React.FC<IHomePageProps> = ({
  onPress
}) => {
  return (
    <div>
        <div className="homepageContainerOne">
          <img src={bluelogo2} className="blueLogoS"/>
          <div className="upperContainer">
            <div className="upperContainerText">
            <h1>
                A Library for React
            </h1>
            <h5>
                Optimizing your coding experience
                 <br/>
                Super React Library For Developer
            </h5>
            <button onClick={onPress}>
            Start Free Trail
            </button>
            </div>
        </div>
        <div className="lowerContainer">
            <div className="lowerContainerImg">
            </div>
        </div>
         <img src={logoXXL} className="blueLogo"/>
    </div>
    <div className="homepageContainerTwo">
            <div className="leftContainerTwo">
                <img src={girl}/>
            </div>
            <div className="rightContainerTwo">
                <main>
                      <h1>Super React Library <br />for Developer </h1>
                      <h3>fast, Stable, Smart</h3>
                </main>
            </div>
    </div>
    <div className="homepageContainerThree">
              <div className="leftContainerThree">
                <div></div>
                <div className="leftContainerText">
                <h1>
                    REACT.BASE <br></br> UI Kit
                </h1>
                <button onClick={onPress}>
                Learn More
                </button>
                </div>
              </div>
              <div className="rightContainerThree">
                <div className="rightContainerThreeImg"><img src={book} /></div>
                <div className="rightContainerThreeDiv"></div>
            </div>

     </div>
        <div className="homepageContainerFour">
          <div className="homepageLeftContainerFour">
            <div className="homepageLeftContainerText">
                <h1>
                  REACT
                </h1>
                <h3>Level up your apps with our  <br/> 
                  React UI Kit</h3>
                <button onClick={onPress}>
                Find Out More
                </button>
            </div>
          </div>
        <div className="homepageRightContainerFour">
            <div className="homepageRightContainerText">
                <h1>
                  REACT NATIVE
                </h1>
                <h3>Level up your mobile with our  <br/> 
                  React UI Kit</h3>
                <button onClick={onPress}>
                Find Out More
                </button>
            </div>
        </div>
        </div>
       
        <div className="homepageContainerFive">
        <div className="homepageLeftContainerFive">
            <div className="homepageLeftContainerFiveText">
                <h1>
                  Ready?
                </h1>
                <h3>Sign up and begin...</h3>
                <button onClick={onPress}>
                START
                </button>
            </div>
          </div>
        <div className="homepageRightContainerFive">
            <div className="homepageRightContainerFiveText">
                <h1>
                  Questions?
                </h1>
                <h3>You can head to our FAQ page or... </h3>
                <button onClick={onPress}>
                Sign Up
                </button>
            </div>
        </div>
          </div>
          <EmailSubmit />
    </div>
)
}

export default HomePage;