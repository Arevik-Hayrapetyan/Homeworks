function Input({ type, value, onchange }) {
  return (
    <div>
      <input type={type} onchange={onchange} value={value} />
    </div>
  );
}

export default Input;
