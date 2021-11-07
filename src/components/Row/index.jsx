import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import instance from '../../axios';
import './Row.css';
import { useQuery } from 'react-query';

const base_url = 'https://image.tmdb.org/t/p/original';

const Row = ({ title, fetchUrl, isLargeRow }) => {
    const [trailerUrl, setTrailerUrl] = useState('');

    const { isLoading, isError, data } = useQuery(fetchUrl.id, async () => {
        const res = await instance.get(fetchUrl.url);
        return res.data.results;
    });

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            autoplay: 1,
        },
    };

    const handleMovieClick = async (movie) => {
        if (trailerUrl) {
            setTrailerUrl('');
        } else {
            const trailer = await movieTrailer(
                movie.title || movie.original_title || movie.name
            );
            if (trailer) {
                const url = new URLSearchParams(new URL(trailer).search);

                if (url) {
                    const videoId = url.get('v');
                    setTrailerUrl(videoId);
                }
            }
        }
    };

    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row_posters">
                {/* row poster element */}
                {isLoading && <span>Loading...</span>}
                {!isLoading &&
                    !isError &&
                    data.map((movie) => (
                        <img
                            key={movie.id}
                            onClick={() => handleMovieClick(movie)}
                            className={`row_poster ${
                                isLargeRow && 'row_poster_large'
                            }`}
                            src={`${base_url}${
                                isLargeRow
                                    ? movie.poster_path
                                    : movie.backdrop_path
                            }`}
                            alt={movie.name}
                        />
                    ))}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    );
};

export default Row;
