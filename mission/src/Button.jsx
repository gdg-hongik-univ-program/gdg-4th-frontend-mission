function Button({ value, onClick }) {
  return (
    <button
      className="bg-blue-500 text-white rounded"
      onClick={onClick}
    >
      +{value}
    </button>
  );
}

export default Button;