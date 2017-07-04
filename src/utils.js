const storageKey = 'favoritePokemons';
const baseURL = 'https://pokeapi.co/api/v2/pokemon/';
const baseSpriteURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other-sprites/official-artwork/';

export function getPokemons({ limit, offset, count }) {
    return fetch(`${baseURL}?limit=${limit}&offset=${offset}`)
        .then(res => res.json())
        .then(pokemons => ({
            ...pokemons,
            results: pokemons.results.map((pokemon, index) => {
                const key = index + (count + 1);

                return (
                    Object.assign({}, pokemon, {
                        id: key,
                        sprite: `${baseSpriteURL}${key}.png`,
                    })
                );
            }),
        }));
}

export function getFavoritePokemons() {
    return JSON.parse(sessionStorage.getItem(storageKey)) || [];
}

export function setFavoritePokemon(pokemonName) {
    const favoritePokemons = JSON.parse(sessionStorage.getItem(storageKey)) || [];

    favoritePokemons.push(pokemonName);

    sessionStorage.setItem(storageKey, JSON.stringify(favoritePokemons));
}

export function unsetFavoritePokemon(pokemonName) {
    const favoritePokemons = getFavoritePokemons();

    sessionStorage.setItem(storageKey, JSON.stringify(favoritePokemons.filter(item => item !== pokemonName))); // eslint-disable-line max-len
}

export function getPokemonsWithFavorites(pokemons) {
    const favorites = getFavoritePokemons();

    return pokemons.map(pokemon => ({
        ...pokemon,
        favorite: favorites.includes(pokemon.name),
    }));
}

export function getPokemonByName() {

}
