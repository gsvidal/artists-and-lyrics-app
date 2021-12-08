import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Form = ({setSearchLyrics}) => {

  const [search, setSearch ] = useState({
    artist: "",
    song: ""
  });
  const [ error, setError ] = useState(false);

  const  { artist , song } = search;

  // Funct for each input to read its content
  const handleChange = (event) => {
    setSearch({
      ...search,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    // Data Validation:
    if(artist.trim() === "" || song.trim() === "") {
      setError(true);
      return;
    }
    setError(false);
    // Send to App component
    setSearchLyrics(search);
  }

  return(
    <div className="bg-info">
      <div className="container">
        <div className="row">
          <form 
            onSubmit={handleSubmit}
            action=""
            className="col card text-white bg-transparent mb-5 pt-5 pb-2"
          >
            <fieldset>
              <legend className="text-center center-vert">
                Search your favourite Artists and Lyrics
              </legend>
              <div className="row">
                <div className="col-md-6">  
                  <div className="form-group">
                    <label htmlFor="">Song</label>
                    <input 
                      type="text"
                      className="form-control"
                      name="song"
                      placeholder="Song name"
                      onChange={handleChange}
                      value={song}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="">Artist</label>
                    <input 
                      type="text"
                      className="form-control"
                      name="artist"
                      placeholder="Artist name"
                      onChange={handleChange}
                      value={artist}
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-primary float-right button"
              >
                Search
              </button>
            </fieldset>
          </form>
        </div>
      </div>
      {error &&
        <p className="alert alert-danger text-center p-2">All field are required!</p> 
      }
    </div>
  );
}

Form.propTypes = {
  setSearchLyrics: PropTypes.func.isRequired
}

export default Form;