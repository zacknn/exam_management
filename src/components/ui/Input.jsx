import React from "react";

function Input({
  type = "text",
  placeholder = "",
  value = "",
  onChange = () => {},
  ...props
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full px-4 py-2 rounded-lg bg-white/30 border border-white/40 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/60 transition-all"
      {...props}
    />
  );
}

export default Input;
