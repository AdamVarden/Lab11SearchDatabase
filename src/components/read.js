import React from 'react';
import '../App.css';
import Movies from './movies';
import Axios from 'axios';


class Read extends React.Component {
 
    state = {
        movies : []
    };
    componentDidMount()
    {
      //Request
        Axios.get('http://localhost:4000/api/movies')
        //Response
        .then((response)=> {
          this.setState({movies: response.data.movies})
        })
        //If there is an error
        .catch((error)=>{
          console.log(error);
        });

    }
 
    render(){
    return (
      <div className="App">
      <h3 >Read component</h3>

        <Movies myMovies={this.state.movies}></Movies>
        
      </div>
    );
  }
}
export default Read;
