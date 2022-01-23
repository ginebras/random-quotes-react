import React from 'react';

import Footer from './dashboards/footer';
import Quotes from './quotes/quotes';

import './style.css';

export default function App() {
  return (
    <div className="mb-10">
      <Quotes />
      <Footer />
    </div>
  );
}
