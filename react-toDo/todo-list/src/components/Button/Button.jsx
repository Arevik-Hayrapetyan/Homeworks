import PropTypes from "prop-types"

function Button({ className, onClick, value }) {
  return (
    <>
      <button onClick={onClick} className={className}>
        {value}
      </button>
    </>
  );
}

export default Button;

Button.propTypes = {
className: PropTypes.string,
onClick: PropTypes.func,
value: PropTypes.string
}
