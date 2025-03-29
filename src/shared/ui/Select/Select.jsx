import styles from "./Select.module.css";

const Select = ({ value, onChange, options = [], placeholder, disabled, loading, error }) => {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)} disabled={disabled} className={styles.select}>
      <option value="">{placeholder}</option>
      {loading && <option disabled>Загрузка...</option>}
      {error && <option disabled>Ошибка загрузки</option>}
      {!loading &&
        !error &&
        options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
    </select>
  );
};

export default Select;
