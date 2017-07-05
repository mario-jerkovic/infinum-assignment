/* eslint-disable jsx-a11y/interactive-supports-focus */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import { capitalize } from '../../utils';
import { Card } from '../../components/Card';
import {
    PokemonStats,
    PokemonStatsRow,
} from '../Details/PokemonStats';

import styles from './style.scss';

function InfoColumn({ name, sprite }) {
    return (
        <div className={styles.favoriteColumn}>
            <img
                alt={`favorite-${name}`}
                src={sprite}
                className={styles.pokemonImage}
            />
            <div>
                <Link to={`pokemon/${name}`}>
                    {capitalize(name)}
                </Link>
            </div>
        </div>
    );
}

InfoColumn.propTypes = {
    name: PropTypes.string.isRequired,
    sprite: PropTypes.string.isRequired,
};

function ActionColumn({ name, handleDeleteClick }) {
    return (
        <div
            role="button"
            className={styles.deleteIcon}
            onClick={() => {
                handleDeleteClick(name);
            }}
        >
            <i className="material-icons">delete_forever</i>
        </div>
    );
}

ActionColumn.propTypes = {
    name: PropTypes.string.isRequired,
    handleDeleteClick: PropTypes.func.isRequired,
};

function FavoritesList({ data, handleDeleteClick }) {
    return (
        <div className="row">
            <div className="col-xs-12 center-xs">
                <Card>
                    <PokemonStats>
                        {data.map(({ id, name, sprite }) => (
                            <PokemonStatsRow
                                key={`favorite-${id}`}
                                label={
                                    <InfoColumn
                                        name={name}
                                        sprite={sprite}
                                    />
                                }
                                value={
                                    <ActionColumn
                                        name={name}
                                        handleDeleteClick={handleDeleteClick}
                                    />
                                }
                            />
                        ))}
                    </PokemonStats>
                </Card>
            </div>
        </div>
    );
}

FavoritesList.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        sprite: PropTypes.string,
    })).isRequired,
    handleDeleteClick: PropTypes.func.isRequired,
};

export default FavoritesList;
