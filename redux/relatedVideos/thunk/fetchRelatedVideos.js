const { createAsyncThunk } = require('@reduxjs/toolkit');
const fetch = require('node-fetch');
const { tagsToQueryString } = require('../../../utils');

const fetchRelatedVideos = createAsyncThunk(
  'relatedVideos/fetchRelatedVideos',
  async ({ tags }) => {
    const queryString = tagsToQueryString(tags);
    const response = await fetch(`http://localhost:9000/videos?${queryString}`);
    const videos = await response.json();

    return videos;
  }
);
module.exports = fetchRelatedVideos;
