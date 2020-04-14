import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import News from "./components/News/News";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      username: "",
      signedIn: false
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.username.length > 0) {
      this.setState({
        signedIn: true
      });
    }
  }

  handleChange = (event) => {
    this.setState({
      username: event.target.value
    })
    console.log(this.state)
  }

  componentDidMount() {
    fetch(
      "http://newsapi.org/v2/top-headlines?country=us&apiKey=a5172c5e1c324d9eb3c01da75e22416d"
    )
      .then(function (response) {
        return response.json();
      })
      .then((myJson) => {
        this.setState({
          articles: myJson.articles,
        });
      });
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <header className="App-header">
          <Nav handleChange={this.handleChange} handleSubmit={this.handleSubmit} signedIn={this.state.signedIn} username={this.state.username} />
        </header>

        <News articles={this.state.articles} />
      </div>
    );
  }
}

export default App;
