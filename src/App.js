import React, { Component } from "react";
import "./App.css";
import UserOutput from "./UserOutput/UserOutput.js";
import UserInput from "./UserInput/UserInput.js";

class App extends Component {
  state = {
    usernames: ["Saurabh", "Riddhi", "Gauri"],
  };

  eventHandler = () => {
    this.setState({
      usernames: ["Sau", "Riddhu", "Gauru"],
    });
  };

  changeHandler=(event)=>{
    this.setState({
      usernames: [event.target.value,"Riddhu","Gauru"]
    })
  }

  render() {
    const style={
      backgroundColor:'white',
      font:'inherit',
      border:'1px solid orange',
      cursor:'pointer',
      padding:'12px',
      marginRight:'30px'
    }
    
    return (
      <div className="App">
        <UserOutput username={this.state.usernames[0]} />
        <UserOutput username={this.state.usernames[1]} click={this.eventHandler} />
        <UserOutput username={this.state.usernames[2]} />
        <button onClick={this.eventHandler} style={style}>Click ME</button>
        <UserInput change={this.changeHandler} username={this.state.usernames[0]} />
      </div>
    );
  }
}

export default App;
