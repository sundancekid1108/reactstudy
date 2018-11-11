import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

/**
   희한하게 git 작업하다가 
   작업한거 다 날림....
   
  component안의 state바귈때 render발생 => new state..
  fetch, then catch
  async await
   */

class App extends Component {
  state = {}

  componentDidMount() {
    this._getMovies();
  }

  
  /**AJax로 데이터 불러옴.. 
   * AJax를 통해, 새로고침없이 데이터를 불러옴..
   * 
   * Javascript 비동기... 좋은점 여러 작업을 할 수있 다..
   * promise => 여러개의 scenario 관리 가능..
   */
  
  _renderMovies = () => {
    const movies = this.state.movies.map((movie) => {
      return <Movie
        title={movie.title_english}
        poster={movie.medium_cover_image}
        key={movie.id}
        genres={movie.genres}
        synopsis = {movie.synopsis}
       /> //prop추가 
    }) //컴포넌트의 key에 index 사용은 별로다 (느림)
    return movies
  }

  _getMovies = async() => {
    const movies = await this._callApi() //_callApi() 끝나고 나온 return value를 movies에 담음
    this.setState({
      movies
    })
  }

  _callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=like_count')
    .then(response => response.json())
    //Movie DATA를 JSON으로 예쁘게 불러옴...
    .then(json => json.data.movies) //arrow function(return이 내재됨.)..
    .catch(err => console.log(err))
    //에러처리.
  }

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'loading'}
      </div>
    );
  }
}

export default App;
