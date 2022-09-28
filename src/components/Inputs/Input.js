const Input = ({ type, value, name, placeholder, onChange, styles }) => {
  return (
    <input
      type={type}
      value={value}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      className={styles}
    />
  );
};

export default Input;
