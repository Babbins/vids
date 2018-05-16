import axios from 'axios';
import moment from 'moment';
import {
    API_KEY
} from './secrets.json'
const API_URL = `https://www.googleapis.com/youtube/v3/search`;

function getISOString(uploadDate) {
    const year = moment().year();
    const month = moment().month();
    const date = moment().date();
    const dayOfWeek = moment().day();
    switch (uploadDate) {
        case 'any':
            return null;
            break;
        case 'hour':
            return moment().subtract(1, 'hour').toISOString();
            break;
        case 'day':
            return moment([year, month, date]).toISOString();
            break;
        case 'week':
            return moment().subtract(dayOfWeek, 'days').toISOString();
        case 'month':
            return moment([year, month]).toISOString();
            break;
        case 'year':
            return moment([year]).toISOString();
            break;
    }
}

export function searchYoutube({
    q = ``,
    order,
    uploadDate,

}) {
    return axios.get(API_URL, {
            params: {
                q,
                key: API_KEY,
                part: `snippet`,
                order,
                type: `video`,
                publishedAfter: getISOString(uploadDate),
                maxResults: 20
            }
        })
        .then(function (response) {
            return response.data.items.map(video => {
                video.url = `https://youtube.com/watch?v=${video.id.videoId}`
                return video;
            });
        });
}