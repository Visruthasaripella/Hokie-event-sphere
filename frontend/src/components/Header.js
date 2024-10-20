import React from 'react';
import '../styles/Header.css';
import {Link, NavLink} from "react-router-dom";
import {SignedIn, UserButton, useUser} from "@clerk/clerk-react";

function Header() {
    const { isSignedIn, user } = useUser();

    return (
        <header className="header">
            <div className="header-left">
                <img src={require("../Images/logo.png")} alt="Website Logo" className="logo" />
            </div>

            <div className="header-center">
                <input type="text" placeholder="Search for events..." className="search-bar" />
            </div>
            <div>
                {isSignedIn?(<Link to={"/create-event"} className={"create-event-button"}>Create an event</Link >):(<></>)}
            </div>
            <div className="header-right">
                {
                    isSignedIn ? (
                        <SignedIn>
                            <span>Hello, {user.fullName}</span>
                            <UserButton userProfileMode="navigation" userProfileUrl="/profile"/>
                        </SignedIn>
                    ) : (
                        <div className="sign-in-sign-up-slot">
                            <Link to="/sign-in" className="sign-in-link">Log
                                in</Link>
                            <button className="btn btn-primary sign-up">Register</button>

                        </div>
                    )
                }
            </div>

        </header>
    );
}

export default Header;
