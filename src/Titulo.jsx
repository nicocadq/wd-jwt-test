import React from 'react';
import PropTypes from 'prop-types';

const Titulo = ({ mensaje }) => <h1>{mensaje}</h1>;

Titulo.propTypes = {
  mensaje: PropTypes.string.isRequired,
};

export default Titulo;
