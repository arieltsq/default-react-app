import React, { Component } from 'react'
import logo from './logo.svg'
import './assets/sass/main.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Welcome to React</h1>
        </header>
        <p className='App-intro'>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p className='App-sass-test'>
          Test that SASS is working fine
        </p>
      </div>
    )
  }
}

export default App
