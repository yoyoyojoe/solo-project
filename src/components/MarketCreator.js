// presentation component that takes user input for new market creation

import React from 'react';

const MarketCreator = function ({
  newLocation,
  updateLocation,
  addMarket,
}) {
  return (
    <div>
      <form onSubmit={addMarket}>
        <input
          id="new-location"
          value={newLocation}
          onChange={e => updateLocation(e.target.value)}
        />
        <button id="add-market" className="primary" type="submit">Add Market</button>
      </form>
    </div>
  );
};

export default MarketCreator;
