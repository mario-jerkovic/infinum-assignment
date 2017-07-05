import React from 'react';
import PropTypes from 'prop-types';

import PokemonCard from './PokemonCard';

class PokemonList extends React.PureComponent {

    static propTypes = {
        data: PropTypes.arrayOf(PropTypes.object).isRequired,
        fetchPokemons: PropTypes.func.isRequired,
        setFavoritePokemon: PropTypes.func.isRequired,
        unsetFavoritePokemon: PropTypes.func.isRequired,
    };

    handleFavoriteClick = (favorite, pokemonData) => {
        if (favorite) {
            this.props.unsetFavoritePokemon(pokemonData);
        } else {
            this.props.setFavoritePokemon(pokemonData);
        }
    };

    renderPokemonList() {
        const { data } = this.props;

        return data.map(({ id, name, sprite, favorite }) => (
            <div
                key={`pokemon-${id}`}
                className="col-xs-12 col-sm-4 col-md-4 col-lg-3"
            >
                <PokemonCard
                    id={id}
                    name={name}
                    sprite={sprite}
                    favorite={favorite}
                    handleFavoriteClick={this.handleFavoriteClick}
                />
            </div>
        ));
    }

    render() {
        const { fetchPokemons } = this.props;

        return (
            <div>
                <div className="row">
                    {this.renderPokemonList()}
                </div>
                <div className="center-xs">
                    <button onClick={fetchPokemons}>
                        Show more
                    </button>
                </div>
            </div>
        );
    }
}

export default PokemonList;
