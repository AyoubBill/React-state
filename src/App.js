import React from 'react';
import Profile from './profile/Profile';
import "./App.css"

class App extends React.Component {
   
  constructor(props) {
    super(props)
    this.state = {isToggleOn: false, n: 0}
    this.timer = null
  }

  toggle() {
    this.setState(() => ({isToggleOn: !this.state.isToggleOn}))
  }

  componentDidMount() {
    window.setInterval(this.tick.bind(this), 1000)
  }

  componentWillUnmount() {
    window.clearInterval(this.timer)
  }

  tick() {
    this.setState({n: this.state.n + 1})
  }

  render() {
    return <div className="app-content">

      <div>
        <a href="#" onClick={this.toggle.bind(this)}><strong>View Profile</strong></a>
      </div>
      
      <div className="profile">
        {this.state.isToggleOn ? <Profile /> : null}
      </div>

      <div className="time">
        <span>{this.state.isToggleOn ? this.state.n : 0} seconds</span>
      </div>

    </div>
  }
}

export default App


