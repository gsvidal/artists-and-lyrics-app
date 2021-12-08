import React from 'react';
import PropTypes from 'prop-types';

const Song = ({lyrics}) => {
  if(!lyrics) return null;

  return(
    <div className="container__lyrics">
      <h2>Song Lyrics</h2>
      <p className="lyrics">{lyrics}</p>
    </div>
  );
}

Song.propTypes = {
  lyrics: PropTypes.string.isRequired
}

export default Song;