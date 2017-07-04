import React from 'react';
import PropTypes from 'prop-types';

import styles from './style.scss';

function AppBar({ title, rightElement }) {
    return (
        <div className={styles.appBar}>
            <div className={styles.leftAlign}>
                {title}
            </div>
            <div className={styles.rightAlign}>
                {rightElement}
            </div>
        </div>
    );
}

AppBar.defaultProps = {
    title: '',
    rightElement: '',
};

AppBar.propTypes = {
    title: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node,
    ]),
    rightElement: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node,
    ]),
};

export default AppBar;
