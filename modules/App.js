import React from 'react';
import { browserHistory } from 'react-router'
import NavLink from './NavLink';

class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleSubmit = this.handleSubmit.bind(this);
    //this._router = context.router;
    //console.log('rrrr: ', context.router);
  }

  handleSubmit(event) {
    event.preventDefault()
    const appName = event.target.elements[0].value
    const path =  `/apps/${appName}`;
    //console.log('+++++++++', path);
    //browserHistory.push(path);
    this.context.router.push(path)
  }

  render() {
    return (
      <div>
        <h1>Ghettohub Issues</h1>
        <ul role="nav">
          <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/apps">Applications</NavLink></li>
        </ul>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="appName"/>{' '}
          <button type="submit">Go</button>
        </form>
        {this.props.children}

      </div>
    )
  }
}

App.contextTypes = {
    router: React.PropTypes.object
};

export default App;
