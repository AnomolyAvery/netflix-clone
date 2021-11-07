import React, { useEffect, useState } from 'react';
import instance from '../../axios';
import requests from '../../requests';
import './Banner.css';

const Banner = () => {
    const [movie, setMovie] = useState();

    const limitText = (text, limit = 17) => {
        if (!text) return null;
        const newText = [];
        if (text.length > limit) {
            text.split(' ').reduce((acc, cur) => {
                if (acc + cur.length <= limit) {
                    newText.push(cur);
                }
                return acc + cur.length;
            }, 0);
            return `${newText.join(' ')}...`;
        }
        return text;
    };

    useEffect(() => {
        const fetchData = async () => {
            const request = await instance.get(
                requests.fetchNetflixOriginals.url
            );
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length)
                ]
            );
            return request;
        };

        fetchData();

        return () => setMovie(null);
    }, []);

    return (
        <header
            className="banner"
            style={{
                backgroundSize: 'cover',
                backgroundImage: `url(
                    "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
                )`,
                backgroundPosition: 'center center',
            }}
        >
            <div className="banner_contents">
                {/* Title */}
                <h1 className="banner_title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List</button>
                </div>
                <h1 className="banner_description">
                    {limitText(movie?.overview || movie?.description, 150)}
                </h1>
            </div>
            <div className="banner--fadeBottom"></div>
        </header>
    );
};

export default Banner;
