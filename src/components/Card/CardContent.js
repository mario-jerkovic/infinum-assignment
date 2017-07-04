import React from 'react';
import PropTypes from 'prop-types';

import styles from './style.scss';

function CardContent({ title, icon }) {
    return (
        <div className={styles.cardContent}>
            <div className={styles.contentTitle}>{title}</div>
            {icon}
        </div>
    );
}

CardContent.defaultProps = {
    title: '',
    icon: null,
};

CardContent.propTypes = {
    title: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node,
    ]),
    icon: PropTypes.node,
};

export default CardContent;
