import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const tweetsSlice = createSlice({
  name: "tweets",
  initialState,
  reducers: {
    addTweets: (state, action) => {
      state.value.unshift(action.payload);
    },
    removeTweets: (state) => {
      state.value = state.value.filter(
        (tweet) => tweet.title !== action.payload.title
      );
    },
  },
});

export const { addTweets, removeTweets } = tweetsSlice.actions;
export default tweetsSlice.reducer;
