import React from 'react';

import IEmailSubmitProps from '../emailSubmit/IEmailSubmitProps'


import './EmailSubmit.css'

const EmailSubmit: React.FC<IEmailSubmitProps> = ({
    onPress
}) => {
    return (
        <div className="emailFooter">
        <div className="emailContainer">
        <form className="emailForm">
            <label htmlFor="search-text">Subscribe to our Newsletter</label>
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
        <div className="emailFooterNavTwo">
        <nav>
          <ul>
              <li><i className="fab fa-facebook-square"></i></li>
              <li><i className="fab fa-instagram"></i></li>
              <li><i className="fab fa-twitter-square"></i></li>
              <li></li>
          </ul>
          </nav>
        </div>

    </div>

    )
}

export default EmailSubmit;

