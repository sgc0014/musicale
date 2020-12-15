import Axios from "axios";

export const fetchSongs = () => async (dispatch) => {
  try {
   
    dispatch({ type: "SONG_FETCH_REQUEST" });
    const { data } = await Axios.get(
      "https://my-json-server.typicode.com/sgc0014/songMockData/db",
    );

    dispatch({
      type: "SONG_FETCH_SUCCESS",
      payload: data,
    });

  

  
  } catch (error) {
    dispatch({ type: "SONG_FETCH_FAIL",  payload:error});
  }
};

export const playFirstSong = (song) => async (dispatch) => {
  console.log(song)
    dispatch({
      type: "SONG_PLAY_SUCCESS",
      payload: song,
    });

};

