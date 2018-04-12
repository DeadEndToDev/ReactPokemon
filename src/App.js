import React from 'react';
import $ from 'jquery';

import './App.css';

import Pokedex from './Pokedex.js';
import MyPokemon from './MyPokemon.js';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemonLoading: false,
            pokemonLoaded: false,
            pokemon: [],
        }
        this.loadPokemonHandler = this.loadPokemonHandler.bind(this);
    }

    static getPokemon() {
        const pokemon = [];
        for (let i = 1; i <= 151; i++) {
            $.get(`http://pokeapi.co/api/v2/pokemon/${i}/`, (response) => {
                pokemon.push({
                    id: i,
                    name: response.name,
                    imgURL: `http://pokeapi.co/media/img/${i}.png`,
                });
            });
        }
        return pokemon;
    }

    loadPokemon() {
        Promise.all([
            App.getPokemon(),
        ]).then((response) => {
            this.setState({ pokemon: response, pokemonLoading: false, pokemonLoaded: true });
        });
    }

    loadPokemonHandler() {
        this.setState({ pokemonLoading: true }, this.loadPokemon);
    }

    render() {
        const showLoadButton = !(this.state.pokemonLoading || this.state.pokemonLoaded);
        return (
            <div className="container">
                <h1>hello world</h1>
                {showLoadButton &&
                    <button onClick={this.loadPokemonHandler}>Load Pokemon</button>
                }
                <div className="components">
                    <Pokedex
                        pokemon={this.state.pokemon}
                    />
                    <MyPokemon />
                </div>
            </div>
        );
    }
}

export default App;
