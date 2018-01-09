import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Menu extends Component {
  render() {
    const MENU_ITEMS = [
      {
        id: 1,
        name: 'Home',
        path: '/',
      },
      {
        id: 2,
        name: 'Page1',
        path: 'Page1',
      },
    ];
    return (
      <div className='Menu'>
        <div className='Menu-links'>
          {MENU_ITEMS.map((item) => {
            return (
              <NavLink
                key={ `item-${ item.id }` }
                activeClassName='Menu-link--active'
                className='Menu-link'
                exact
                to={ item.path }
              >
                {item.name }
              </NavLink>
              );
          })}
        </div>
      </div>
    );
  }
}
