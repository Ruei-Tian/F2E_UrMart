const API_HOST = 'https://www.googleapis.com/youtube/v3/search';
const API_KEY = process.env.YOUTUBE_API_KEY;
const MAX_RESULTS = 12;


const searchByKeyword = (str, nextPageToken) => fetch(`${API_HOST}?key=${API_KEY}&part=snippet&q=${str}&type=video&maxResults=${MAX_RESULTS}&pageToken=${nextPageToken}`);

export default searchByKeyword;
