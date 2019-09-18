import React, { Component } from "react";
import "./App.css";
import Rating from "./Components/Rating/Rating";
import MovieList from "./Components/MovieList/MovieList";
import SearchBar from "./Components/SearchBar/SearchBar";
import AddMovie from "./Components/AddMovie/AddMovie";

let movies = [
  {
    name: "inception",
    image:
      "https://is5-ssl.mzstatic.com/image/thumb/Video128/v4/e8/01/39/e8013988-4dad-2282-8d04-3767b35879da/pr_source.lsr/268x0w.png",
    rating: 4,
    year: "2512"
  },
  {
    name: "harry potter",
    image: "",
    rating: 5,
    year: "2365"
  },
  {
    name: "insolate",
    image: "",
    rating: 3,
    year: "06636"
  },
  {
    name: "pirates of the caraibes",
    image: "",
    rating: 2,
    year: "2626548"
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: movies
    };
  }

  filterdname = k => {
    let x = movies.filter(
      (el, index) => el.name.toLowerCase().indexOf(k.trim()) > -1
    );
    this.setState({ tab: x });
  };

  filterByStars = n => {
    let x = this.state.tab.filter((el, index) => el.rating >= n);
    this.setState({ tab: x });
  };

  addNewMovie = movie => {
    let x = movies.concat(movie);
    this.setState({
      tab: x
    });
  };

  render() {
    return (
      <div className="App">
        <div className="topBar">
          <SearchBar searchname={s => this.filterdname(s)} />
          <Rating numberStars={n => this.filterByStars(n)} />
        </div>
        <div className="bodyBlock">
          <MovieList table={this.state.tab} />
          <AddMovie addMovie={newMovie => this.addNewMovie(newMovie)} />
        </div>
      </div>
    );
  }
}

export default App;
