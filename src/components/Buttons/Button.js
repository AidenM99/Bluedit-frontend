const Button = ({ text, type, onClick, styles }) => {
  return (
    <button type={type} onClick={onClick} className={styles}>
      {text}
    </button>
  );
};

export default Button;
