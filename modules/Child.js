import React from 'react';
// Repos.js
import NavLink from './NavLink';
// ...

export default class Child extends React.Component
{
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount(){
    require.ensure([], (require) => {
      let X = require('./'+this.props.params.appName).default;
      //this._myComponent = X;

      //console.log(' loading dynamic component X', X);

      this.setState({c: X});

    });
  }

  componentWillReceiveProps(p) {
    require.ensure([], (require) => {
      let X = require('./'+p.params.appName).default;
      //this._myComponent = X;
      //console.log(' loading dynamic component X', X);
      this.setState({c: X});

    });
  }


  render() {
    //console.log('^^^^', this.props.params.appName, '>>>>>>', this._myComponent)

    let MyX;


    if (this.state.c) {
      MyX = (<this.state.c />)
    }



      return (
        <div>
          <h2>Child - {this.props.params.appName}</h2>
          {MyX}
          {/* will render `Repo.js` when at /repos/:userName/:repoName */}
          {this.props.children}
        </div>
      )
    }
}
