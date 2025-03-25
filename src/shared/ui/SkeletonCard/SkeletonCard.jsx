import styles from './SkeletonCard.module.css';

const SkeletonCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.poster}></div>
      <div className={styles.title}></div>
      <div className={styles.year}></div>
      <div className={styles.rating}></div>
    </div>
  );
};

export default SkeletonCard;