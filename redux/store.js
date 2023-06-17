const { configureStore } = require('@reduxjs/toolkit');
const videoReducer = require('./video/videoSlice');
const relatedVideosReducer = require('./relatedVideos/relatedVideosSlice');
const { createLogger } = require('redux-logger');

const logger = createLogger();

const store = configureStore({
  reducer: {
    video: videoReducer,
    relatedVideos: relatedVideosReducer,
  },
  middleware: (getDefaultMidleware) => getDefaultMidleware().concat(logger),
});

module.exports = store;
