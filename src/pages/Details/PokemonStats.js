import React from 'react';
import PropTypes from 'prop-types';

import styles from './style.scss';

export function PokemonStatsRow({ label, value }) {
    return (
        <li className={styles.pokemonStatItem}>
            <div>{label}</div>
            <div>{value}</div>
        </li>
    );
}

PokemonStatsRow.defaultProps = {
    label: '',
    value: '',
};

PokemonStatsRow.propTypes = {
    label: PropTypes.string,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
};

export function PokemonStats({ title, children }) {
    return (
        <div className={styles.pokemonStatsContainer}>
            <div className={styles.pokemonStatsHeader}>{title}</div>
            <ul className={styles.pokemonStats}>
                {children}
            </ul>
        </div>
    );
}

PokemonStats.defaultProps = {
    title: '',
};

PokemonStats.propTypes = {
    title: PropTypes.string,
    children: PropTypes.arrayOf(PokemonStatsRow).isRequired,
};
