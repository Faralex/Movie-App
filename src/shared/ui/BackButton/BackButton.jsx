import { useNavigate } from "react-router-dom";
import styles from "./BackButton.module.css";

const BackButton = ({ label = "← Назад", to = -1, className = "" }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <button className={`${styles.backButton} ${className}`} onClick={handleClick}>
      {label}
    </button>
  );
};

export default BackButton;
