import React from 'react';
import $ from 'jquery';

import './App.css';

import PokemonViewer from './PokemonViewer.js';
import MyPokemon from './MyPokemon.js';

const MAX_POKEMON_INDEX = 151;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPokemon: null,
            myPokemon: [],
            pokemonLoading: false,
        }
        this.findPokemonClickHandler = this.findPokemonClickHandler.bind(this);
    }

    loadPokemon() {
        const randomIndex = Math.floor(Math.random()*MAX_POKEMON_INDEX) + 1;
        $.get(`http://pokeapi.co/api/v2/pokemon/${randomIndex}/`, (response) => {
            const currentPokemon = {
                id: randomIndex,
                name: response.name,
                imgURL: `https://raw.githubusercontent.com/PokeAPI/pokeapi/master/data/v2/sprites/pokemon/${randomIndex}.png`,
            };
            this.setState({ currentPokemon, pokemonLoading: false });
        });
    }

    findPokemonClickHandler() {
        this.setState({ pokemonLoading: true }, this.loadPokemon)
    }

    render() {
        return (
            <div className="container">
                <h1>hello world</h1>
                <button
                    onClick={this.findPokemonClickHandler}
                    disabled={this.state.pokemonLoading}
                >Find Pokemon</button>
                <div className="components">
                    <PokemonViewer
                        pokemon={this.state.currentPokemon}
                    />
                    <MyPokemon />
                </div>
            </div>
        );
    }
}

export default App;
