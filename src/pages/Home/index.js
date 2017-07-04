import React from 'react';

import PokemonList from './PokemonList';
import * as utils from '../../utils';

class Home extends React.PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            totalCount: 0,
        };
    }

    componentWillMount() {
        this.fetchPokemons();
    }

    setFavoritePokemon = (pokemonName) => {
        utils.setFavoritePokemon(pokemonName);

        this.assignCheckFavoritePokemon();
    };

    unsetFavoritePokemon = (pokemonName) => {
        utils.unsetFavoritePokemon(pokemonName);

        this.assignCheckFavoritePokemon();
    };

    assignCheckFavoritePokemon() {
        this.setState(prevState => ({
            ...prevState,
            data: utils.getPokemonsWithFavorites(prevState.data),
        }));
    }

    fetchPokemons = () => {
        const { data, totalCount } = this.state;

        const limit = 20;
        const count = data.length;
        const offset = totalCount ? count : 0;

        utils.getPokemons({ limit, offset, count })
            .then((response) => {
                this.setState(prevState => ({
                    data: utils.getPokemonsWithFavorites(prevState.data.concat(response.results)),
                    totalCount: response.count,
                }));
            });
    };

    render() {
        const { data, totalCount } = this.state;

        if (!totalCount) {
            return (
                <div>Loading...</div>
            );
        }

        return (
            <PokemonList
                data={data}
                totalCount={totalCount}
                fetchPokemons={this.fetchPokemons}
                setFavoritePokemon={this.setFavoritePokemon}
                unsetFavoritePokemon={this.unsetFavoritePokemon}
            />
        );
    }
}

export default Home;
