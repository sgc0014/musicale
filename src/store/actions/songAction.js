import Axios from "axios";

export const fetchSongs = (keyword='') => async (dispatch) => {
  try {
    
    dispatch({ type: "SONG_FETCH_REQUEST" });
    const { data } = await Axios.get(
      "https://my-json-server.typicode.com/sgc0014/songMockData/db"
    );

    dispatch({
      type: "SONG_FETCH_SUCCESS",
      payload: data,
    });
    
      dispatch({
        type: "SONG_SEARCH_SUCCESS",
        payload: keyword,
      });
    
  } catch (error) {
    dispatch({ type: "SONG_FETCH_FAIL", payload: error });
  }
};

export const playFirstSong = (song) => async (dispatch) => {
  dispatch({
    type: "SONG_PLAY_SUCCESS",
    payload: song,
  });
};


