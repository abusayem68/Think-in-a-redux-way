const fetchRelatedVideos = require('./redux/relatedVideos/thunk/fetchRelatedVideos');
const store = require('./redux/store');
const fetchVideo = require('./redux/video/thunk/fetchVideo');

store.dispatch(fetchVideo()).then(() => {
  const { tags } = store.getState().video;
  store.dispatch(fetchRelatedVideos({ tags }));
});
