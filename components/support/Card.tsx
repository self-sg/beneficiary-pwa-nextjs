import styles from '../../styles/SupportCard.module.css'
import org from '../../public/assets/temp/org.svg'
import star_filled from '../../public/assets/icon/star-filled.svg'
import star_outlined from '../../public/assets/icon/star-outlined.svg'
import Image from 'next/image'
import { useState } from 'react'

interface Props {
  displayStar: boolean
  data: { [key: string]: string }
  clickHandler?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export default function Card(props: Props) {
  const [liked, setLiked] = useState(true)
  const data = props.data

  return (
    <div className={styles.card}>
      <div className={styles.headerContainer}>
        <div className={styles.titleContainer}>
          <span className="text-m-sb">{data.title}</span>
        </div>
        <div className={styles.starContainer}>
          {props.displayStar ? (
            liked ? (
              <Image src={star_filled} onClick={() => setLiked(false)} />
            ) : (
              <Image src={star_outlined} onClick={() => setLiked(true)} />
            )
          ) : undefined}
        </div>
      </div>

      <div className={styles.orgContainer}>
        <Image src={org} />
        <span className={`text-caption ${styles.orgText}`}>
          {data.organisation}
        </span>
      </div>

      <div className={styles.detailsContainer}>
        <div className={styles.detailsWrapper}>
          <span className={`text-s ${styles.detailsTitle}`}>Region</span>
          <span className={`text-caption ${styles.detailsDesc}`}>
            {data.region}
          </span>
        </div>
        <div className={styles.detailsWrapper}>
          <span className={`text-s ${styles.detailsTitle}`}>Type</span>
          <span className={`text-caption ${styles.detailsDesc}`}>
            {data.type}
          </span>
        </div>
      </div>
    </div>
  )
}
