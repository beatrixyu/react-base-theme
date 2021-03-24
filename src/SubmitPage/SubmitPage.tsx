import React from 'react';
import EmailSubmit from '../emailSubmit/EmailSubmit';
import ISumbitPageProps from './ISubmitPageProps'

import '../login/Login.css'

const SumbitPage: React.FC<ISumbitPageProps> = ({onPress}) => {
  return (
    <div>
      <div className="submitHeader">
            <div className="leftSubmitText">
                <h1>
                  Submit
                </h1>
                <h3>Optimizing your coding experience</h3>
            </div>
      </div>
      <div className="submitContainer">
        <div className="leftContainerSubmit">
          <form action="">
            <div>FIRST NAME *</div>
            <input type="text" />
            <div>LAST NAME *</div>
            <input type="text" />
            <div>ADDRESS *</div>
            <input type="text" />
            <div>TEL NUMBER *</div>
            <input type="text" />
            <div>JOB TITLE *</div>
            <input type="text" />
            <div>COMPANY NAME *</div>
            <input type="text" />
            <div>COMPANY TEL NUMBER *</div>
            <input type="text" />
            <br/>
            <br/>
            <button onClick={onPress}>
                Submit
                </button>
            
          </form>
        </div>
        <div className="rightContainerSubmit">
        <div className="rightSubmitText">
                <h1>
                A library for React <br/>
                starts here
                </h1>
                <h3>Once you’e submmited your application, <br/> we’ll send you an email</h3>
            </div>

        </div>
        
      </div>
      <EmailSubmit />
    </div>
  );
}

export default SumbitPage;