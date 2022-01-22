import React from 'react';

import Buttons from './dashboards/buttons';
import Footer from './dashboards/footer';
import QuotesAutor from './dashboards/quotesAutor';
import QuotesTest from './dashboards/quotesTest';
import Quotes from './quotes/quotes';

import './style.css';

export default function App() {
  return (
    <div>
      <Buttons />
      <Footer />
      <QuotesAutor />
      <QuotesTest />
      <Quotes />
    </div>
  );
}
