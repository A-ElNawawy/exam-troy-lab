import styles from "./SquareButton.module.css";

const SquareButton = ({ children, bgColor, color }) => {
  return (
    <button
      className={`${styles.squareButton} ${bgColor ? styles[bgColor] : ""} ${
        color ? styles[color] : ""
      }`}
    >
      {children}
    </button>
  );
};

export default SquareButton;
