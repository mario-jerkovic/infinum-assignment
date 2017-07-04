import React from 'react';
import PropTypes from 'prop-types';

import Divider from '../Divider';

import styles from './style.scss';

function PageHeader({ title }) {
    return (
        <div className={`row start-xs ${styles.pageHeader}`}>
            <div className={`col-xs-12 ${styles.pageHeaderColumn}`}>
                <h1>{title}</h1>
            </div>
            <Divider />
        </div>
    );
}

PageHeader.propTypes = {
    title: PropTypes.string.isRequired,
};

export default PageHeader;
