const Input = ({ placeholder, value, onChange, className, type = "text" }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`w-full bg-card border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-accent ${className}`}
    />
  );
};

export default Input;
