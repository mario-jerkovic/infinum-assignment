import React from 'react';

import * as utils from '../../utils';
import FavoritesList from './FavoritesList';
import PageHeader from '../../components/PageHeader';

class Details extends React.PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            data: null,
        };
    }

    componentWillMount() {
        this.fetchFavoritePokemons();
    }

    fetchFavoritePokemons() {
        this.setState({
            data: utils.getFavoritePokemonsWithSprite(),
        });
    }

    deletePokemonFromFavorites = (pokemonName) => {
        utils.unsetFavoritePokemon(pokemonName);

        this.fetchFavoritePokemons();
    };

    render() {
        const { data } = this.state;
        let title = 'No favorites';
        let favoritesListComponent = null;

        if (data) {
            title = 'Favorites';
            favoritesListComponent = (
                <FavoritesList
                    data={data}
                    handleDeleteClick={this.deletePokemonFromFavorites}
                />
            );
        }

        return (
            <div>
                <PageHeader
                    title={title}
                />
                {favoritesListComponent}
            </div>
        );
    }
}

export default Details;
