import React from 'react';

import styles from './style.scss';

function Loading() {
    return (
        <div className={styles.loading}>
            <span className={styles.pokeposition}>
                <i className={styles.ball} />
                <p>Loading...</p>
            </span>
        </div>
    );
}

export default Loading;
