import React from 'react';
import PropTypes from 'prop-types';

import styles from './style.scss';

function PokemonImage({ src, alt }) {
    return (
        <div>
            <img
                src={src}
                alt={alt}
                className={styles.pokemonImage}
            />
        </div>
    );
}

PokemonImage.propTypes = {
    alt: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
};

export default PokemonImage;

