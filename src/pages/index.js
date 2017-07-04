/* eslint-disable import/extensions, import/no-unresolved, import/no-webpack-loader-syntax */
import '!style-loader!css-loader!normalize.css';
import '!style-loader!css-loader!flexboxgrid';
import '!style-loader!css-loader!./globals.scss';

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import AppBar from '../components/AppBar';
import styles from './style.scss';

function Root({ children }) {
    return (
        <div>
            <AppBar
                title={
                    <Link
                        to="/"
                        className={styles.link}
                    >
                        Pokédex
                    </Link>
                }
                rightElement={
                    <Link
                        to="/myPokemons"
                        className={styles.link}
                    >
                        Favorites
                    </Link>
                }
            />
            <div className={styles.container}>
                {children}
            </div>
        </div>
    );
}

Root.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Root;
