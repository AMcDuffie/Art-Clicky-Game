//imports dependencies and files
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import ArtCard from "./components/ArtCard";
import art from "./arts.json";
import "./App.css";

//sets state to 0 or empty
class App extends Component {
  state = {
    art,
    clickedArt: [],
    score: 0
  };

//when you click on a card ... the art is taken out of the array
  imageClick = event => {
    const currentArt = event.target.alt;
    const ArtAlreadyClicked =
      this.state.clickedArt.indexOf(currentArt) > -1;

//if you click on a art that has already been selected, the game is reset and cards reordered
    if (ArtAlreadyClicked) {
      this.setState({
        fish: this.state.art.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedArt: [],
        score: 0
      });
        alert("Sorry!, you did win. Play again?");

//if you click on an available art photos, your score is increased and cards reordered
    } else {
      this.setState(
        {
          art: this.state.art.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedArt: this.state.clickedArt.concat(
            currentArt
          ),
          score: this.state.score + 1
        },
//if you get all 12 art photos corrent you get a congrats message and the game resets        
        () => {
          if (this.state.score === 12) {
            alert("Winner!");
            this.setState({
              art: this.state.art.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedArt: [],
              score: 0
            });
          }
        }
      );
    }
  };

//the order of components to be rendered: navbar, jumbotron, artcard
  render() {
    return (
      <div>
        <Navbar 
          score={this.state.score}
        />
        <Jumbotron />
        <div className="wrapper">
          {this.state.art.map(art => (
            <ArtCard
              imageClick={this.imageClick}
              id={art.id}
              key={art.id}
              image={art.image}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default App;

