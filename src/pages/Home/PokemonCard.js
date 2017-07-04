/* eslint-disable jsx-a11y/interactive-supports-focus*/
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import {
    Card,
    CardMedia,
    CardContent,
} from '../../components/Card';

function PokemonCard({ name, sprite, favorite, ...other }) {
    return (
        <Card>
            <CardMedia
                src={sprite}
                alt="pokemon-image"
            />
            <CardContent
                title={
                    <Link to={`pokemon/${name}`}>
                        {`${name[0].toUpperCase()}${name.slice(1)}`}
                    </Link>
                }
                icon={
                    <i
                        role="button"
                        className="material-icons"
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
