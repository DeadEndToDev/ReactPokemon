import React from 'react';

class PokemonViewer extends React.Component {
    render() {
        const foundPokemon = this.props.pokemon;
        let pokemonName = '';
        if (foundPokemon) {
            pokemonName = foundPokemon.name[0].toUpperCase() + foundPokemon.name.slice(1);
        }
        return (
            <div className="pokemon-viewer">
                <h3>You found {foundPokemon ? pokemonName : 'no pokemon'}!</h3>
                {foundPokemon &&
                    <div className="pokemon-display">
                        <img src={foundPokemon.imgURL} />
                    </div>
                }
            </div>
        )
    }
}

export default PokemonViewer;