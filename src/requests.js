const API_KEY="";

const requests = {
    fetchTrending: {
        id: 'trending',
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`
    },
    fetchNetflixOriginals: {
        id: 'netflix-originals',
        url: `/discover/tv?api_key=${API_KEY}&with_networks=213`
    },
    fetchTopRated: {
        id: 'top-rated',
        url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`
    },
    fetchActionMovies: {
        id: 'action',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=28`
    },
    fetchComedyMovies: {
        id: 'comedy',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=35`
    },
    fetchHorrorMovies: {
        id: 'horror',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=27`
    },
    fetchRomanceMovies: {
        id: 'romance',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`
    },
    fetchDocumentaries: {
        id: 'documentaries',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=99`
    },
};

export default requests;