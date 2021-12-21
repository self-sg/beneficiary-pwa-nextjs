import BottomNav from '../../components/BottomNav'
import styles from '../../styles/Page.module.css'
import TopNav from '../../components/TopNav'

export default function SupportListing() {
  return (
    <div className={styles.container}>
      {}
      <TopNav pageName={'Support Listing'} displayBackButton={true} />
      <BottomNav featureName="support" />
    </div>
  )
}
