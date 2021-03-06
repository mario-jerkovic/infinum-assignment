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

function getFavoritePokemons() {
    return JSON.parse(sessionStorage.getItem(storageKey)) || [];
}

export function getFavoritePokemonsWithSprite() {
    const favoritePokemons = getFavoritePokemons();

    if (!favoritePokemons.length) {
        return null;
    }

    return favoritePokemons.map(favoritePokemon => (
        Object.assign({}, favoritePokemon, {
            sprite: `${baseSpriteURL}${favoritePokemon.id}.png`,
        })
    ));
}

export function setFavoritePokemon(pokemon) {
    const favoritePokemons = JSON.parse(sessionStorage.getItem(storageKey)) || [];

    favoritePokemons.push(pokemon);

    sessionStorage.setItem(storageKey, JSON.stringify(favoritePokemons));
}

export function unsetFavoritePokemon(pokemonName) {
    const favoritePokemons = getFavoritePokemons();

    sessionStorage.setItem(storageKey, JSON.stringify(favoritePokemons.filter(favoritePokemon => (
        favoritePokemon.name !== pokemonName
    ))));
}

export function getPokemonsWithFavorites(pokemons) {
    const favorites = getFavoritePokemons();

    return pokemons.map(pokemon => ({
        ...pokemon,
        favorite: !!favorites.find(favoritePokemon => (
            favoritePokemon.name === pokemon.name
        )),
    }));
}

export function getPokemonByName(pokemonName) {
    return fetch(`${baseURL}${pokemonName}`)
        .then(res => res.json())
        .then(pokemon => ({
            ...pokemon,
            sprites: {
                ...pokemon.sprites,
                official_artwork: `${baseSpriteURL}${pokemon.id}.png`,
            },
        }));
}

export function capitalize(string) {
    return `${string[0].toUpperCase()}${string.slice(1)}`;
}
