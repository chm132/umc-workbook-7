import React, { Component } from 'react';
import Ad from './Ad';

class AdPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true,
    };
  }

  handleToggleClick = () => {
    this.setState((nowState) => ({
      display: !nowState.display
    }));
  };

  render() {
    return (
      <div className="ad-page">
        
        <Ad display={this.state.display} />
        <button onClick={this.handleToggleClick}>
          {this.state.display ? '광고 안 보기' : '광고 보기'}
        </button>
      </div>
    );
  }
}

export default AdPage;