import React from 'react';


const Button = ({color,changeQuote}) => {
    return (
      <div className="button-change">
        <button style={{ background: color }} onClick={changeQuote}>
          <b>
            <i class="fa-solid fa-greater-than"></i>
          </b>
        </button>
      </div>
    );
};

export default Button;