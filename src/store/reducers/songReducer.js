export const songReducer = (state = { filteredSongs: [] }, action) => {
  switch (action.type) {
    case "SONG_FETCH_REQUEST":
      return { loading: true };
    case "SONG_FETCH_SUCCESS":
      return { loading: false, songs: action.payload};
    case "SONG_SEARCH_SUCCESS":
      const keyword = action.payload;
      const finalSongs = state.songs.songs.filter((song) => {
        return song.title.toLowerCase().indexOf(keyword) !== -1;
      });
      return { loading: false, filteredSongs: finalSongs , songs:state.songs};
    case "SONG_FETCH_FAIL":
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const musicPlayerReducer = (state = {}, action) => {
  switch (action.type) {
    case "SONG_PLAY_SUCCESS":
      return { currentSong: action.payload };

    default:
      return state;
  }
};
