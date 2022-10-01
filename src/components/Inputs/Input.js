const Input = ({
  type,
  value,
  name,
  id,
  placeholder,
  required,
  minLength,
  maxLength,
  onChange,
  styles,
}) => {
  return (
    <input
      type={type}
      value={value}
      name={name}
      id={id}
      required={true}
      minLength={minLength}
      maxLength={maxLength}
      placeholder={placeholder}
      onChange={onChange}
      className={styles}
    />
  );
};

export default Input;
