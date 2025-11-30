import React from "react";
const Button = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-accent px-5 py-2 rounded-lg font-semibold hover:bg-blue-600 transition ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
