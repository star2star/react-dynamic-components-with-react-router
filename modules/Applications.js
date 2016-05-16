import React from 'react';
// Repos.js
import NavLink from './NavLink';
// ...

export default class Applications extends React.Component
{
  constructor(props) {
    super(props);
    this._apps = {};
  }

  render() {
    //console.log('-----', this.props.params);
      return (
        <div>
          <h2>Applications</h2>
          <ul>
            <li><NavLink to="/apps/Fax">Fax</NavLink></li>
            <li><NavLink to="/apps/Video">Video</NavLink></li>
          </ul>
          {/* will render `Repo.js` when at /repos/:userName/:repoName */}
          {this.props.children}
        </div>
      )
    }
}
