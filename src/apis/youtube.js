import axios from 'axios';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/search',
    params: {
        part: 'snippet',
        key: 'AIzaSyDAiqQHJJc_wKi7qLIya2hb9fO8ImCC3pQ',
        maxResults: 30,
        type: "video"
    }
});