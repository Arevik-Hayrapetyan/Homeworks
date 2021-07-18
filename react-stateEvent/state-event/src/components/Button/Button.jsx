function Button({ onClick, disabled, id }) {
  if (id === "increase") {
    return (
      <div>
        <button onClick={onClick} disabled={disabled} id={id}>
          Increase
        </button>
      </div>
    );
  }
  if (id === "decrease") {
    return (
      <div>
        <button onClick={onClick} disabled={disabled}>
          Decrease
        </button>
      </div>
    );
  }
  if (id === "reset") {
    return (
      <div>
        <button onClick={onClick} disabled={disabled}>
          Reset
        </button>
      </div>
    );
  }
}

export default Button;
