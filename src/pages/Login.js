import { render } from '@testing-library/react';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const ValidateUser = async() => {
    const result = await fetch(`/login`, {
      method: 'post',
      body: JSON.stringify({email, password : email, password}),
      headers: {
        'Content-Type': 'application/json',
      }
    });
    const response = await result.json();
    if(response['responseServer'] === "yes"){      
      history.push("/Registration");
                console.log('Successfully Login');
    }
    else{
    console.log("user no exist");
    }
    setEmail('');
    setPassword('');
  }
return(
    <>
    <main className="mainBack">
    <div className="mx-auto" >

      <h1 className="h1-title">Please sign in</h1>
      <div className="dropdown-menu-right">
        <form className="px-4 py-3">
          <div className="form-group">
            {/* <!-- <label for="exampleDropdownFormEmail1">Email address</label> --> */}
            <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} className="form-control" id="exampleDropdownFormEmail1" placeholder="email@service.com" />
          </div>
          <div className="form-group">
            {/* <!-- <label for="exampleDropdownFormPassword1">Password</label> --> */}
            <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} className="form-control" id="exampleDropdownFormPassword1" placeholder="Password" />
          </div>
          <div className="form-group h1-title">
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="dropdownCheck" />
              <label className="form-check-label" for="dropdownCheck">
                Remember me
              </label>
            </div>
          </div>
          <button type="submit"onClick={() => ValidateUser()} className="btn button-color btn-block">Sign in</button>
          <p className="text-center font-italic font-weight-light">By clicking Sign In, you agree to our Terms.</p>
        <div className="dropdown-divider">
          <a className="dropdown-item text-center font-italic btn-success" href="./signUp">No Acount? Sign up</a>
          <a className="dropdown-item text-center font-italic btn-success" href="#">Forgot password?</a>
        </div>
      </form>
    </div>
    </div>
  </main>
    </>
);

}

export default Login;