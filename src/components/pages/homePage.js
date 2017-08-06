import React, { Component } from 'react';

class HomePage extends Component {

  handleChange(e) {
    const title = e.target.value;
    this.props.changeTitle();
    console.log(title);
  }
  render() {
    return (
      <div className="container-fluid">

      <h1>
        Home page content
      </h1>

      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>

      <input onChange={this.handleChange.bind(this)} />
      </div>
    );
  }
}

export default HomePage;
