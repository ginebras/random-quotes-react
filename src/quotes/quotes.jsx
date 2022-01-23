import React, { Component, ComponentDidMount } from 'react';
import Axios from 'axios';

import QuotesAutor from '../dashboards/quotesAutor';
import QuotesText from '../dashboards/quotesText';
import Buttons from '../dashboards/buttons';

import './quotes.css';

class Quotes extends Component {
  state = {
    quote: 'The Best Richness, is the Richness of the Soul',
    autor: 'Prophet Muhammad(Peace be upon him)',
    quotesData: [
      {
        quote: 'We grow fearless when we do the things we fear.',
        autor: 'H. P. Lovecraft.',
      },
      {
        quote: 'From even the greatest of horrors irony is seldom absent',
        autor: 'H. P. Lovecraft.',
      },
      {
        quote:
          'That is not dead which can eternal lie, And with strange aeons even death may die',
        autor: 'H. P. Lovecraft',
      },
      {
        quote:
          'The most merciful thing in the world, I think, is the inability of the human mind to correlate all its contents. We live on a placid island of ignorance in the midst of black seas of the infinity, and it was not meant that we should voyage far.',
        autor: 'H. P. Lovecraft.',
      },
      {
        quote:
          'The most merciful thing in the world, I think, is the inability of the human mind to correlate all its contents... some day the piecing together of dissociated knowledge will open up such terrifying vistas of reality, and of our frightful position therein, that we shall either go mad from the revelation or flee from the light into the peace and safety of a new Dark Age',
        autor: 'H. P. Lovecraft.',
      },
      {
        quote:
          'It is good to be a cynic — it is better to be a contented cat — and it is best not to exist at all',
        autor: 'H. P. Lovecraft.',
      },
      {
        quote: 'Never Explain Anything.',
        autor: 'H. P. Lovecraft.',
      },
      {
        quote:
          'I know always that I am an outsider; a stranger in this century and among those who are still men.',
        autor: 'H. P. Lovecraft.',
      },
      {
        quote:
          'To be bitter is to attribute intent and personality to the formless, infinite, unchanging and unchangeable void. We drift on a chartless, resistless sea. Let us sing when we can, and forget the rest...',
        autor: 'H. P. Lovecraft',
      },
      {
        quote:
          'I have seen the dark universe yawning,Where the black planets roll without aim,Where they roll in their horror unheeded,Without knowledge, or lustre, or name.',
        autor: 'H. P. Lovecraft',
      },
      {
        quote: 'The world is indeed comic, but the joke is on mankind',
        autor: 'H. P. Lovecraft',
      },
      {
        quote:
          'The oldest and strongest emotion of mankind is fear, and the oldest and strongest kind of fear is fear of the unknown',
        autor: 'H. P. Lovecraft',
      },
      {
        quote:
          'Pleasure to me is wonder—the unexplored, the unexpected, the thing that is hidden and the changeless thing that lurks behind superficial mutability.',
        autor: 'H. P. Lovecraft',
      },
      {
        quote: 'Almost nobody dances sober, unless they happen to be insane',
        autor: 'H. P. Lovecraft',
      },
    ],
    color: 'rgb(243,156,18)',
  };

  componentDidMount() {
    this.fetchData();
  }

  randomColor = () => {
    let characters = '1234567890ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
      color += characters[Math.round(Math.random() * 16)];
    }
    console.log(color);
    return color;
  };

  fetchData = async () => {
    const color = this.randomColor();
    document.body.style.color = color;
    document.body.style.backgroundColor = color;

    this.setState({
      color: color,
    });
  };

  handleClicker = () => {
    let randomIndex = Math.round(
      Math.random() * (this.state.quotesData.length - 1)
    );
    const { quote, autor } = this.state.quotesData[randomIndex];

    const color = this.randomColor();
    document.body.style.color = color;
    document.body.style.backgroundColor = color;

    this.setState({
      quote: quote,
      autor: autor,
      color: color,
    });
  };

  render() {
    return (
      <div id="quote-box" className="mt-5">
        <QuotesText quote={this.state.quote} color={this.state.color} />
        <QuotesAutor autor={this.state.autor} color={this.state.color} />
        <Buttons
          handleClicker={this.handleClicker}
          color={this.state.color}
          quote={this.state.quote}
          autor={this.state.autor}
        />
      </div>
    );
  }
}

export default Quotes;
