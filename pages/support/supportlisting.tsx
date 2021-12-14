import BottomNav from '../../components/BottomNav'
import styles from '../../styles/Home.module.css'
import TopNav from '../../components/TopNav'

export default function SupportListing() {
  return (
    <div className={styles.container}>
      {}
      <TopNav pageName={'Support Listing'} displayBackButton={true} />
      <BottomNav name="support" />
    </div>
  )
}
