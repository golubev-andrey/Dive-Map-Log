import { FETCH_LOG, CREATE_NEW_DIVE } from "./types";
import { createReducer } from "utils.js";

export default createReducer([], {
  [FETCH_LOG]: (state, { data }) => {
    return state.length === 0 ? data : state;
  },
  [CREATE_NEW_DIVE]: (state, { data }) => {
    return [
      ...state,
      {
        ["siteName"]: data.newSiteName,
        ["depth"]: data.MaxDepth,
        ["time"]: data.BottomTime,
        ["id"]: `${data.Latitude}${data.Longitude}`,
        ["pos"]: { lat: data.Latitude, lng: data.Longitude }
      }
    ];
  }
});
