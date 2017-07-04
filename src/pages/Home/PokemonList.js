import React from 'react';
import PropTypes from 'prop-types';

import PokemonCard from './PokemonCard';

class PokemonList extends React.PureComponent {

    static propTypes = {
        data: PropTypes.arrayOf(PropTypes.object).isRequired,
        fetchPokemons: PropTypes.func.isRequired,
    };

    static contextTypes = {
        router: PropTypes.object.isRequired,
    };

    handlePokemonClick = (id) => {
        this.context.router.push(`pokemon/${id}`);
    };

    handleFavoriteClick = (favorite, name) => {
        if (favorite) {
            this.props.unsetFavoritePokemon(name);
        } else {
            this.props.setFavoritePokemon(name);
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
            <div className="row">
                <div className="col-xs-12 center-xs">
                    <div className="row">
                        {this.renderPokemonList()}
                    </div>
                </div>
                <div className="col-xs-12 center-xs">
                    <button onClick={fetchPokemons}>
                        Show more
                    </button>
                </div>
            </div>
        );
    }
}

PokemonList.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    fetchPokemons: PropTypes.func.isRequired,
    setFavoritePokemon: PropTypes.func.isRequired,
    unsetFavoritePokemon: PropTypes.func.isRequired,
};

export default PokemonList;
