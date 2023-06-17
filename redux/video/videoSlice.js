const { createSlice } = require('@reduxjs/toolkit');
const fetchVideo = require('./thunk/fetchVideo');

const initialState = {
  isLoading: false,
  isError: '',
  video: {},
};

const videoSlice = createSlice({
  name: 'video',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideo.pending, (state, action) => {
        state.isLoading = true;
        state.isError = '';
      })
      .addCase(fetchVideo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = '';
        state.video = action.payload;
      })
      .addCase(fetchVideo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message;
        state.video = {};
      });
  },
});

module.exports = videoSlice.reducer;
