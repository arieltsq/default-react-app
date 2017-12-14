import React from "react";
import "./Main.css";

class Main extends React.Component {
    render() {
        return (
            <div className="Main">
                <header className="Main-header">
                    <h1 className="Main-title"> Welcome to React </h1>
                </header>
                <p className="Main-intro">
					To get started, edit <code> src / Main.js </code> and save to reload.
                </p>
                <p className="Main-sass-test"> Test that SASS is working fine </p>
            </div>
        );
    }
}

export default Main;


