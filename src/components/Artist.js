import React from 'react';
import PropTypes from 'prop-types';

const Artist = ({artist}) => {

  const { strArtist: name, strArtistLogo: logo, strBiographyEN: bio, strFacebook: fb, strTwitter: twitter, strLastFMChart: lastFM } = artist;

  if(Object.keys(artist).length === 0) return null;

  const random = Math.floor(2+ 3*Math.random()) 

  return(
    <div className="container__artist">
      <div className="container__artist-title">
        <h2 className="artist">{name}</h2>
        <img src={logo} alt={name} width="100"/>
      </div>
      <img className="artist__pic" src={artist[`strArtistFanart${random}`]} alt={name} width="300" />
      <p className="artist__info">{bio}</p>
      <p className="card__text">
        <a href={`https://${fb}`} target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook icon"></i>
        </a>
        <a href={`https://${twitter}`} target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter icon"></i>
        </a>
        <a href={`${lastFM}`} target="_blank" rel="noopener noreferrer">
          <i className="fab fa-lastfm icon"></i>
        </a>
      </p>
    </div>
  );
}

Artist.propTypes = {
  artist: PropTypes.object.isRequired
}

export default Artist;