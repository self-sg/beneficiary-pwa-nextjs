import BottomNav from '../../../components/BottomNav'
import styles from '../../../styles/Page.module.css'
import TopNav from '../../../components/TopNav'
import { useRouter } from 'next/router'

export default function SupportListing() {
  const router = useRouter()
  let category = router.asPath.split('/')[2]
  category = category.charAt(0).toUpperCase() + category.slice(1)

  return (
    <div className={styles.container}>
      {}
      <TopNav
        pageName={category}
        displayBackButton={true}
        displayFilter={true}
      />
      <BottomNav featureName="support" />
    </div>
  )
}
