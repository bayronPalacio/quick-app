import React from "react";

const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-custom">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1">
                    <img src="./css/logo3.png" alt="" width="35" height="35" className="d-inline-block align-top" />
                    Quick Inventory
                </span>
                <form className="d-flex">
                    <a className="btn button-color btn-block" data-toggle="modal" data-target="#modalSignIn">Sign In</a>
                </form>
            </div>
            </nav>
        </>
    );
}

export default NavBar;