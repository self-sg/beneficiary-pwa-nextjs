import styles from '../../styles/SupportCard.module.css'

interface Props {
  displayStar: boolean
  clickHandler?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export default function Card(props: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.detailsContainer}>
        <div className={styles.detailsWrapper}>
          <span className={`text-s ${styles.detailsTitle}`}>Region</span>
          <span className={`text-caption ${styles.detailsDesc}`}>
            Central, West, East
          </span>
        </div>
        <div className={styles.detailsWrapper}>
          <span className={`text-s ${styles.detailsTitle}`}>Type</span>
          <span className={`text-caption ${styles.detailsDesc}`}>
            Childcare
          </span>
        </div>
      </div>
    </div>
  )
}
