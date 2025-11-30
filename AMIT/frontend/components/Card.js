const Card = ({ children, className }) => {
  return (
    <div className={`bg-card p-5 rounded-xl shadow-lg ${className}`}>
      {children}
    </div>
  );
};

export default Card;
