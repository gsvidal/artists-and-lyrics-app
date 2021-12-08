import React, { Fragment, useState, useEffect } from 'react';
import Form from './components/Form';
import Song from './components/Song';
import Artist from './components/Artist';
import axios from 'axios';

function App() {

  //State
  const [ searchLyrics, setSearchLyrics ] = useState({});
  const [ lyrics, setLyrics ] = useState("");
  const [ artist, setArtist ] = useState({});
  const [ lyricsError, setLyricsError ] = useState(false);

  useEffect(() => {
    if(Object.keys(searchLyrics).length === 0) return;
    
    const fetchLyricsAPI = async () => {
      const { artist, song } = searchLyrics;
      const url = `https://api.lyrics.ovh/v1/${artist}/${song}`;
      const url2 = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artist}`;
      try {
        const [ lyricsData, artistData ] = await Promise.all([
          axios.get(url),
          axios.get(url2)
        ]);
        setLyrics(lyricsData.data.lyrics);
        setArtist(artistData.data.artists[0]);
        setLyricsError(false);
      } catch(err) {
         setLyricsError(true);
      }
    }
    fetchLyricsAPI();

  }, [searchLyrics]); 

  return (
    <Fragment>
      <Form 
        setSearchLyrics={setSearchLyrics}
      />
      <div className="container">
        { lyricsError 
        ?
          <p className="alert alert-danger text-center error__info">Lyrics not found</p>
        :
          <div className="row">
            <div className="col-md-6">
              <Song
              lyrics={lyrics}
              />
            
            </div>
            <div className="col-md-6">
              <Artist
              artist={artist}
              />
            </div>
          </div>
        }
      </div>
    </Fragment>
  );
}

export default App;
