const { createSlice } = require('@reduxjs/toolkit');
const fetchRelatedVideos = require('./thunk/fetchRelatedVideos');

const initialState = {
  isLoading: false,
  isError: false,
  error: '',
  videos: [],
};

const relatedVideosSlice = createSlice({
  name: 'relatedVideos',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchRelatedVideos.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
        state.error = '';
      })
      .addCase(fetchRelatedVideos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = '';
        state.videos = action.payload;
      })
      .addCase(fetchRelatedVideos.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
        state.videos = [];
      });
  },
});

module.exports = relatedVideosSlice.reducer