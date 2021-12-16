import BottomNav from '../components/BottomNav'
import styles from '../styles/Page.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Home</h1>
      <BottomNav featureName="home" />
    </div>
  )
}
