export const songReducer = (state = {}, action) => {
  switch (action.type) {
    case "SONG_FETCH_REQUEST":
      return { loading: true };
    case "SONG_FETCH_SUCCESS":
      return { loading: false, songs: action.payload };
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
