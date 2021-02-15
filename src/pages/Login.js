import React from 'react';

const Login = () => {
return(
    <>
    <main class="mainBack">
    <div class="mx-auto" >

      <h1 class="h1-title">Please sign in</h1>
      <div class="dropdown-menu-right">
        <form class="px-4 py-3">
          <div class="form-group">
            {/* <!-- <label for="exampleDropdownFormEmail1">Email address</label> --> */}
            <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@service.com" />
          </div>
          <div class="form-group">
            {/* <!-- <label for="exampleDropdownFormPassword1">Password</label> --> */}
            <input type="password" class="form-control" id="exampleDropdownFormPassword1" placeholder="Password" />
          </div>
          <div class="form-group h1-title">
            <div class="form-check">
              <input type="checkbox" class="form-check-input" id="dropdownCheck" />
              <label class="form-check-label" for="dropdownCheck">
                Remember me
              </label>
            </div>
          </div>
          <button type="submit" class="btn button-color btn-block">Sign in</button>
          <p class="text-center font-italic font-weight-light">By clicking Sign In, you agree to our Terms.</p>
        <div class="dropdown-divider">
          <a class="dropdown-item text-center font-italic btn-success" href="./signUp">No Acount? Sign up</a>
          <a class="dropdown-item text-center font-italic btn-success" href="#">Forgot password?</a>
        </div>
      </form>
    </div>
    </div>
  </main>
    </>
);

}

export default Login;