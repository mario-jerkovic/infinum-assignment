/* eslint-disable jsx-a11y/interactive-supports-focus*/
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import { capitalize } from '../../utils';
import {
    Card,
    CardMedia,
    CardContent,
} from '../../components/Card';

import styles from './style.scss';

function PokemonCard({ name, sprite, favorite, ...other }) {
    return (
        <Card>
            <Link to={`pokemon/${name}`}>
                <CardMedia
                    src={sprite}
                    alt="pokemon-image"
                />
            </Link>
            <CardContent
                title={capitalize(name)}
                icon={
                    <i
                        role="button"
                        className={`material-icons ${styles.favoriteIcon}`}
                        onClick={() => {
                            other.handleFavoriteClick(favorite, name);
                        }}
                    >
                        {favorite ? 'favorite' : 'favorite_border'}
                    </i>
                }
            />
        </Card>
    );
}

PokemonCard.propTypes = {
    name: PropTypes.string.isRequired,
    sprite: PropTypes.string.isRequired,
    favorite: PropTypes.bool.isRequired,
    handleFavoriteClick: PropTypes.func.isRequired,
};

export default PokemonCard;
