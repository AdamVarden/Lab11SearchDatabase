import React from 'react';
import '../App.css';
import Axios from 'axios';
class Create extends React.Component {
  constructor(props) {

    super(props);
    this.state = { Title: '', Year: '' , Poster:'',Base64Image:''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleMovieTitleChange = this.handleMovieTitleChange.bind(this);
    this.handleMovieYearChange = this.handleMovieYearChange.bind(this);
    this.handleMoviePosterChange = this.handleMoviePosterChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);

  }

  getBase64(file, cb) {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
        cb(reader.result)
    };
    reader.onerror = function (error) {
        console.log('Error: ', error);
    };
}

  handleMoviePosterChange(e) {
    this.setState({ Poster: e.target.value });

  }
  handleMovieYearChange(e) {
    this.setState({ Year: e.target.value });
  }

  handleMovieTitleChange(e) {
    this.setState({ Title: e.target.value });
  }

  handleImageChange(e)
  {
    this.getBase64({Base64Image: e.target.value})
  }

  handleSubmit(e) {
    alert(this.state.Title + "   " + this.state.Year + "  " + this.state.Poster + "   " +this.state.Image);
    e.preventDefault();

    const movieObject = {
      title: this.state.Title,
      year: this.state.Year,
      poster: this.state.Poster,
      image:this.state.Base64Image
    }

    Axios.post('http://localhost:4000/api/movies', movieObject)
      .then()
      .catch();

    this.setState({
      Title: '',
      Year: '',
      Poster: ''
    });
  }

  render() {
    return (
      <div className="App">
        <h3 >Create component</h3>
        <div>
          <form onSubmit={this.handleSubmit}>


            <div className='form-group'>
              <label>Movie Title</label>
              <input
                type='text'
                className='form-control'
                value={this.state.Title}
                onChange={this.handleMovieTitleChange}
              ></input>

            </div>

          </form>

          <form onSubmit={this.handleSubmit}>


            <div className='form-group'>
              <label>Movie Year</label>
              <input
                type='text'
                className='form-control'
                value={this.state.Year}
                onChange={this.handleMovieYearChange}
              ></input>

            </div>
            <div>

            </div>
          </form>
        </div>


      <div>
        <label>Image Upload</label>
        <input
                type='file'
                className='form-control'
                onChange={this.handleImageChange}
              ></input>
      </div>


        <form onSubmit={this.handleSubmit}>


          <div className='form-group'>
            <label>Movie Poster URL</label>
            <input
              type='text'
              className='form-control'
              value={this.state.Poster}
              onChange={this.handleMoviePosterChange}
            ></input>

          </div>
          <div>
            <input
              type="submit"
              value="Add Movie"
            ></input>
          </div>
        </form>
      <image src= {this.state.Base64Image}></image>      
      </div>
    );
  }
}
export default Create;