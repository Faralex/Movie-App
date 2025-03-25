import styles from "./PaginationButtons.module.css";

const PaginationButtons = ({ page, totalPages, onFirst, onPrev, onNext, onLast }) => {
  return (
    <div className={styles.pagination}>
      <button className={styles.pageButton} onClick={onFirst} disabled={page === 1}>
        ⏮ Первая
      </button>

      <button className={styles.pageButton} onClick={onPrev} disabled={page === 1}>
        ← Назад
      </button>

      <span className={styles.pageInfo}>
        Страница {page} из {totalPages || "?"}
      </span>

      <button className={styles.pageButton} onClick={onNext} disabled={page === totalPages}>
        Вперёд →
      </button>

      <button className={styles.pageButton} onClick={onLast} disabled={page === totalPages}>
        Последняя ⏭
      </button>
    </div>
  );
};

export default PaginationButtons;
