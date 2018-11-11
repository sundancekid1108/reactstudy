import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';


function Movie({title, poster, genres, synopsis}){
    return(
        <div className="Movie">
            <div className="Movie_Columns">
                <MoviePoster poster = {poster} alt={title}/>
            </div>
            <div className="Movie_Columns">
                <h1> {title} </h1>
                <div className="Movie_Genres">
                    {genres.map((genre, index) => <MovieGenre genre ={genre} key= {index}/>)}
                
                </div>

                <p className = "Movie_Synopsis">
                    {synopsis}
                </p>
            </div>
            
        </div>
    ) 
}

Movie.propTypes = {
    title : PropTypes.string.isRequired, 
    poster : PropTypes.string.isRequired,
    genres : PropTypes.array.isRequired,
    synopsis : PropTypes.string.isRequired
} //prop register..

function MoviePoster({poster, alt}){
    return(<img src = {poster} alt={alt} title = {alt} className = "Movie_Poster"/>)
    //alt로 title을 보여줄수있다. 이미지위에 커서 올리면 title나옴..
}

function MovieGenre({genre}){
    return(
        <span className="Movie_Genre">{genre}</span>
    )
}

MoviePoster.propTypes = {
    poster : PropTypes.string.isRequired, 
    alt : PropTypes.string.isRequired
}

MovieGenre.propTypes = {
    genre : PropTypes.string.isRequired
}

export default Movie;