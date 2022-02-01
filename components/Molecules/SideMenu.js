import React from 'react';

function Button({ button, filter }) {
  return (
    <div className="buttons">
      {button.map((cat, i) => {
        return (
          // eslint-disable-next-line react/jsx-key
          <ul>
            <li>
              <a type="button" onClick={() => filter(cat)} className="btn margin--bottom--xs">
                {cat}
              </a>
            </li>
          </ul>
        );
      })}
    </div>
  );
}

export default Button;
