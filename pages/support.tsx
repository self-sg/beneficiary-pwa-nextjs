import BottomNav from '../components/BottomNav'
import styles from '../styles/Home.module.css'
import TopNav from '../components/TopNav'

export default function Support() {
  return (
    <div className={styles.container}>
      {}
      <TopNav pageName={'Support'} displayBackButton={true} />
      Support
      <BottomNav name="support" />
    </div>
  )
}
