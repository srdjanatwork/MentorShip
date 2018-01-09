import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { increment } from 'actions/app';

@connect(state => ({
  counter: state.app.get('counter'),
}))
export default class Home extends Component {
  static propTypes = {
    counter: PropTypes.number,
    // from react-redux connect
    dispatch: PropTypes.func,
  }

  handleTestButtonClick = () => {
    const { dispatch } = this.props;

    dispatch(increment());
  }

  render() {
    const {
      counter,
    } = this.props;

    return (
      <div className='Home'>
        <div className='Example'>
          <p>Counter: { counter }</p>
          <button onClick={ this.handleTestButtonClick }>
            Increase
          </button>
        </div>
      </div>
    );
  }
}
