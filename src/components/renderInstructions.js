import React from 'react';
import PropTypes from 'prop-types';

export default function RenderInstructions({ strInst, ytEmb }) {
  return (
    <div className="video">
      <p className="instruction-text" data-testid="instructions">{strInst}</p>
      { ytEmb && (
        <>
          {/* <h2>Video</h2> */}
          <iframe
            type="text/html"
            title="recipe"
            width="330"
            height="315"
            src={ `https://www.youtube.com/embed/${ytEmb}` }
            data-testid="video"
          />
        </>
      )}
    </div>
  );
}

RenderInstructions.propTypes = {
  strInst: PropTypes.string.isRequired,
  ytEmb: PropTypes.string,
};

RenderInstructions.defaultProps = {
  ytEmb: '',
};
