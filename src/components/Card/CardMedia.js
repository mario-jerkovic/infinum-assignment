import React from 'react';
import PropTypes from 'prop-types';

import styles from './style.scss';

function CardActions({ alt, src }) {
    return (
        <div className={`row middle-xs ${styles.cardMedia}`}>
            <div className="col-xs-12">
                <img
                    alt={alt}
                    src={src}
                />
            </div>
        </div>
    );
}

CardActions.propTypes = {
    alt: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
};

export default CardActions;
