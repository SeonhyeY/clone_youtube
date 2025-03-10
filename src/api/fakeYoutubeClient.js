import axios from 'axios';

export default class FakeYoutubeClient {
  async search({ params }) {
    return params.channelId
      ? axios.get('/data/sameChannelVideos.json')
      : axios.get('/data/listByKeyword.json');
  }

  async popular() {
    return axios.get('/data/popularVideos.json');
  }

  async channel() {
    return axios.get('/data/channelDetails.json');
  }
}
