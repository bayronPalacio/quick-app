import React from "react";

const Footer = () => {
    return (
        <>
            <div className="d-flex bd-highlight">
                <div className="p-2 flex-fill bd-highlight">
                    <h5>Products</h5>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Web Application</li>
                        <li className="list-group-item">Mobile Application</li>
                    </ul>
                </div>
                <div className="p-2 flex-fill bd-highlight">
                    <h5>Features</h5>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Scan products with App</li>
                        <li className="list-group-item">Inventory Tracking</li>
                        <li className="list-group-item">Invoice and Reports</li>
                        <li className="list-group-item">Set Alarms and Notifications</li>
                        <li className="list-group-item">Upload Companay Logo</li>
                    </ul>
                </div>
                <div className="p-2 flex-fill bd-highlight">
                    <h5>Learn & Support</h5>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">How to get App</li>
                        <li className="list-group-item">Getting Started</li>
                        <li className="list-group-item">Account Settings</li>
                        <li className="list-group-item">FAQ</li>
                        <li className="list-group-item">About</li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Footer;