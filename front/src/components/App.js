/*
First thing first, i really like the idea of this project. It is definitely cute and very pokemon-ly, and i am pretty sure it attracts a lof of users who are fans of pokemons.
I also like the design of the web, which impressed me a lot and reminds me of many scenes in the anime.
One nitpick, I think the font style could be changed to be more vivid and cute.
Nice job, it is amazing, i like this project.
*/
import React, { useState, useEffect } from "react";
import "./styles/App.css";
import Pokemon from "./Pokemon.js";
import Player from "./Player.js";
import Favorites from "./Favorites.js";
import SignUp from "./SignUp.js";
import SignIn from "./SignIn.js";
import Home from "./Home.js";
import Delete from "./Delete.js";
import EditProfile from "./EditProfile.js";
import EditTrainer from "./EditTrainer.js";
import TrainerProfile from "./TrainerProfile.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [player, setPlayer] = useState([]);
  const [trainer, setTrainer] = useState([]);
  const [user, setUser] = useState("");
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedUser = localStorage.getItem("username");
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  useEffect(() => {
    const getPlayer = async () => {
      console.log("getting player");
      try {
        const _player = await fetch("/player1").then((res) => res.json());
        setPlayer(_player);
      } catch (err) {
        console.log("error ", err);
      }
    };
    getPlayer();
  }, []); // Only run the first time; fetches user's team

  useEffect(() => {
    const getPokemon = async () => {
      console.log("getting Pokemon");
      try {
        const _pokemon = await fetch("/pokemon1").then((res) => res.json());
        let count = Object.keys(_pokemon).length;
        if (count === 0) {
          const _newDatabase = await fetch("/start").then((res) => res.json());
          setPokemon(_newDatabase);
        } else {
          setPokemon(_pokemon);
        }
      } catch (err) {
        console.log("error ", err);
      }
    };
    getPokemon();
  }, []); // Only run the first time; fetches list of pokemon

  useEffect(() => {
    const getTrainers = async () => {
      console.log("getting trainer profile info");
      try {
        const _trainer = await fetch("/trainers").then((res) => res.json());
        setTrainer(_trainer);
      } catch (err) {
        console.log("error ", err);
      }
    };
    getTrainers();
  }, []); // Only run the first time; fetches user's team

  useEffect(() => {
    const getFavorites = async () => {
      console.log("getting favorites");
      try {
        const _favorites = await fetch("/favorites1").then((res) => res.json());
        setFavorites(_favorites);
      } catch (err) {
        console.log("error ", err);
      }
    };
    getFavorites();
  }, []); // Only run the first time; fetches user's team

  // Only run the first time; gets username
  return (
    <div>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/signup" component={SignUp} />
            <Route path="/signin" component={SignIn} />
            <Route
              path="/trainerpage"
              render={(props) => (
                <TrainerProfile
                  {...props}
                  trainer={trainer}
                  player={player}
                  user={user}
                />
              )}
            />
            <Route path="/editprofile" component={EditProfile} />
            <Route path="/edittrainer" component={EditTrainer} />
            <Route path="/delete" component={Delete} />
            <Route
              path="/favorites"
              render={(props) => (
                <Favorites
                  {...props}
                  favorites={favorites}
                  user={user}
                  player={player}
                  pokemon={pokemon}
                />
              )}
            />
            <Route
              path="/player"
              render={(props) => (
                <Player
                  {...props}
                  player={player}
                  pokemon={pokemon}
                  user={user}
                />
              )}
            />
            <Route
              path="/pokemon"
              render={(props) => (
                <Pokemon
                  {...props}
                  player={player}
                  pokemon={pokemon}
                  user={user}
                />
              )}
            />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

// Image from https://www.freeiconspng.com/img/45343

export default App;
