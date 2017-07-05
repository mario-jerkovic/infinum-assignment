import React from 'react';
import PropTypes from 'prop-types';

import styles from './style.scss';

function Card({ children }) {
    return (
        <div className={styles.card}>
            <div className={styles.container}>
                {children}
            </div>
        </div>
    );
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Card;
