import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

class Header extends Component {
  constructor(){
    super();
    this.state = {name: "Billy Joe"};
  }

  render() {
    // setTimeout(() => {
    //   this.setState({name: 'Bobby'});
    // }, 4000)

    return (
    <header>
      <div className="logo">
      {this.props.greeting} {this.state.name}
      </div>

      <nav>
        <ul>
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="/Products"> Products</Link>
          </li>

        </ul>
      </nav>
    </header>
    );
  }
}

export default Header;
