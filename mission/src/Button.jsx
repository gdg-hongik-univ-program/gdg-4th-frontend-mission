function Button({ value, onClick }) {
  return (
    <button
      className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
      onClick={onClick}
    >
      +{value}
    </button>
  );
}

export default Button;