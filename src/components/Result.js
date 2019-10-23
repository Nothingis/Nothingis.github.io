import React from 'react';
import PropTypes from 'prop-types';

export default function Result(props) {
  return (
    <div className="result">
      You Prefer <strong>{props.quizResult}</strong>!
    </div>
  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired
};