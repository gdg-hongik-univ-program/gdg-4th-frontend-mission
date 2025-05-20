
export default function Button({ value, onClick }) {
  return (
    <button onClick={() => onClick(value)} style={styles.button}>
      {value}
    </button>
  );
}

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

