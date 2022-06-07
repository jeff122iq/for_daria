import React from 'react';
import "../styles/button.css";

export default function Button ({label, onClick}) {
  return (
    <div className="button" onClick={onClick}>
        {label}
    </div>
  );
};
