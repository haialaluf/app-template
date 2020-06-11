import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Item = ({ text }) => (
  <div className="list-item">
    <div className="text">{ text }</div>
  </div>
);

Item.propTypes = {
  text: PropTypes.string,
};

export default Item;
