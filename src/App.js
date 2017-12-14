import React from "react";
import "./assets/sass/main.css";
import Main from "./Components/Main/Main";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title"> Welcome to React </h1>
                </header>
                <p className="App-intro">
					To get started, edit <code> src / App.js </code> and save to reload.
                </p>
                <Main/>
            </div>
        );
    }
}

export default App;
