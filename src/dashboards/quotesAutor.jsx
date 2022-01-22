import React from 'react';

export default function QuotesAutor({ autor, color }) {
  return (
    <div className="quote-author" style={{ color: color }}>
      <span id="author">{autor}</span>
    </div>
  );
}
