import axios from 'axios';
import { API_KEY } from './secrets.json'
const API_URL = `https://www.googleapis.com/youtube/v3/search`;

export function searchYoutube({
        q = ``,
        order = `relevance`,
        publishedAfter = null,
}) {
        return axios.get(API_URL, {
                params: {
                    q,
                    key: API_KEY,
                    part: `snippet`,
                    order,
                    type: `video`,
                    publishedAfter
                }
            })
            .then(function (response) {
                return response.data.items.map(video => {
                    video.url = `https://youtube.com/watch?v=${video.id.videoId}`
                    return video;
                });
            });
};
