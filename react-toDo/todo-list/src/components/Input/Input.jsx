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
