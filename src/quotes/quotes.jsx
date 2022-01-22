import React, { Component } from 'react';

import QuotesAutor from '../dashboards/quotesAutor';
import QuotesText from '../dashboards/quotesText';

import './quotes.css';

class Quotes extends Component {
  state = {
    quote: 'The Best Richness, is the Richness of the Soul',
    autor: 'Prophet Muhammad(Peace be upon him)',
    quotesData: [],
    color: 'rgb(243,156,18)',
  };

  render() {
    return (
      <div id="quote-box">
        <QuotesText quote={this.state.quote} color={this.state.color} />
        <QuotesAutor autor={this.state.autor} color={this.state.color} />
      </div>
    );
  }
}

export default Quotes;
