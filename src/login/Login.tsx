import React from 'react';

import ILoginProps from '../login/ILoginProps'
import logoXXL from '../assets/logoXXL.png'


import './Login.css'

const Login: React.FC<ILoginProps> = ({
    onPress
}) => {
    return (
        <div className="email">
        <div className="emailContainerLogin">
        <form className="emailFormLogin">
            <label htmlFor="search-text">Welcome Back! </label>
            <br/>
            <br/>
            <input type="text" placeholder="Name"/>
            <br/>
            <br/>
            <input type="text" placeholder="Email"/>
            <br/>
            <br/>
            <button >Submit</button>
        </form>
        </div>
        <hr />
        <div className="emailNavLogin">
        <nav>
          <ul>
              <li><i className="fab fa-facebook-square"></i></li>
              <li><i className="fab fa-instagram"></i></li>
              <li><i className="fab fa-twitter-square"></i></li>
              <li></li>
          </ul>
          </nav>
        </div>
        <div>
            <img src={logoXXL} className="blueLogo"/>
        </div>
    </div>

    )
}

export default Login;

