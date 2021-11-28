import BottomNav from '../components/BottomNav'
import styles from '../styles/Home.module.css'
import TopNav from '../components/TopNav'

export default function Profile() {
  return (
    <div className={styles.container}>
      {}
      <TopNav pageName={'My Profile'} displayBackButton={false} />
      Profile
      <BottomNav name="profile" />
    </div>
  )
}
