import React from "react";

function Button({
  children = "Button",
  onClick = () => {},
  type = "button",
  ...props
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-full px-4 py-2 rounded-lg bg-white/30 hover:bg-white/40 border border-white/40 text-white font-semibold transition-all duration-200 active:scale-95"
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
