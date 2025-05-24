
export default function Button({ value, onClick }) {
  return (
    <button 
    onClick={() => onClick(value)}
      className="m-2 px-8 py-4 text-lg rounded-[10px] bg-black text-white border-none cursor-pointer"
      >
    {value}
    </button>
  );
}

/*
const styles = {
  button: {
    margin: '8px',
    padding: '16px 32px',
    fontSize: '18px',
    borderRadius: '20px',
    backgroundColor: 'black',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  }
};
*/
