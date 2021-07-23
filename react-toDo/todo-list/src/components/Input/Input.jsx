import PropTypes from "prop-types";

function Input({
  value,
  onChange,
  type,
  className,
  placeholder,
  defaultValue,
}) {
  return (
    <>
      <input
        value={value}
        onChange={onChange}
        type={type}
        className={className}
        placeholder={placeholder}
        defaultValue={defaultValue}
      />
    </>
  );
}

export default Input;
Input.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string,
};
