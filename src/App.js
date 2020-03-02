import React, { Component } from "react"
import TopBar from '../src/TopBar/TopBar'
import BottomBar from '../src/BottomBar/BottomBar'
import FrontPage from '../src/FrontPage/FrontPage'
import EducationPage from '../src/EducationPage/EducationPage'
import ExperiencePage from '../src/ExperiencePage/ExperiencePage'
import "./App.css"

class LambdaDemo extends Component {
  constructor(props) {
    super(props)
    this.state = { loading: false, msg: null }
  }

  handleClick = api => e => {
    e.preventDefault()

    this.setState({ loading: true })
    fetch("/.netlify/functions/" + api)
      .then(response => response.json())
      .then(json => this.setState({ loading: false, msg: json.msg }))
  }

  render() {
    const { loading, msg } = this.state

    return (
      <p>
        <button onClick={this.handleClick("hello")}>{loading ? "Loading..." : "Call Lambda"}</button>
        <button onClick={this.handleClick("async-dadjoke")}>{loading ? "Loading..." : "Call Async Lambda"}</button>
        <br />
        <span>{msg}</span>
      </p>
    )
  }
}

class App extends Component {
  render() {
    return (
        <div className="App">
          <TopBar/>
          <FrontPage/>
          <EducationPage/>
          <ExperiencePage/>
          <BottomBar/>
        </div>
      
    )
  }
}

export default App
