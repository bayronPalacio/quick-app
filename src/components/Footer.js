import React from "react";

const Footer = () => {
    return (
        <>
            <div class="d-flex bd-highlight">
                <div class="p-2 flex-fill bd-highlight">
                    <h5>Products</h5>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Web Application</li>
                        <li class="list-group-item">Mobile Application</li>
                    </ul>
                </div>
                <div class="p-2 flex-fill bd-highlight">
                    <h5>Features</h5>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Scan products with App</li>
                        <li class="list-group-item">Inventory Tracking</li>
                        <li class="list-group-item">Invoice and Reports</li>
                        <li class="list-group-item">Set Alarms and Notifications</li>
                        <li class="list-group-item">Upload Companay Logo</li>
                    </ul>
                </div>
                <div class="p-2 flex-fill bd-highlight">
                    <h5>Learn & Support</h5>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">How to get App</li>
                        <li class="list-group-item">Getting Started</li>
                        <li class="list-group-item">Account Settings</li>
                        <li class="list-group-item">FAQ</li>
                        <li class="list-group-item">About</li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Footer;