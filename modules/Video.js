import React from 'react';
// Repos.js
import NavLink from './NavLink';
// ...

export default class Video extends React.Component
{
  constructor(props) {
    super(props);

  }

  render() {
      //console.log(this.props.params);
      return (
        <div>
          <h2>this is Video</h2>
        </div>
      )
    }
}
