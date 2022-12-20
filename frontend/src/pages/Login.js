import './Login.css';
import React, { useState } from 'react';
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

import preview from '../static/signin_preview.png';

function Login() {

  const [justifyActive, setJustifyActive] = useState('tab1');;

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  return (
    <div className='flex-container'>
      <div className='flex-item'>
        <img src={preview} alt="Preview Art" class="signin-preview"></img>
      </div>
      <div className='flex-item'>
        <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
        <MDBTabs pills justify className='mb-2 d-flex flex-row justify-content-between'>
          <MDBTabsItem>
            <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
              Login
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
              Register
            </MDBTabsLink>
          </MDBTabsItem>
        </MDBTabs>

        <MDBTabsContent>

          <MDBTabsPane show={justifyActive === 'tab1'}>

            <div className="text-center mb-3 color-format">
              <p>Sign in</p>
            </div>

            <MDBInput wrapperClass='mb-4 color-format btn-danger' label='Email address' id='form1' type='email'/>
            <MDBInput wrapperClass='mb-4 color-format btn-danger' label='Password' id='form2' type='password'/>

            <div className="d-flex justify-content-between mx-4 mb-4 color-format">
              <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
              <a href="/" color='red'>Forgot password?</a>
            </div>

            <MDBBtn className="mb-4 w-100 color-format color-format btn btn-danger">Sign in</MDBBtn>
          </MDBTabsPane>

          <MDBTabsPane show={justifyActive === 'tab2'}>
            <div className="text-center mb-1 color-format">
              <p>Sign up:</p>
            </div>

            <MDBInput wrapperClass='mb-4 color-format' label='Username' id='form1' type='text'/>
            <MDBInput wrapperClass='mb-4 color-format' label='Email' id='form1' type='email'/>
            <MDBInput wrapperClass='mb-4 color-format' label='Password' id='form1' type='password'/>

            <div className='d-flex justify-content-center mb-4 color-format'>
              <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I have read and agree to the terms' />
            </div>

            <MDBBtn className="mb-4 w-100 color-format btn btn-danger">Sign up</MDBBtn>

          </MDBTabsPane>

        </MDBTabsContent>

      </MDBContainer>
      </div>
    </div>
  );
}

export default Login;