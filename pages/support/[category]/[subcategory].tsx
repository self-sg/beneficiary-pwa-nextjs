import BottomNav from '../../../components/BottomNav'
import pageStyles from '../../../styles/Page.module.css'
import styles from '../../../styles/SupportListing.module.css'
import TopNav from '../../../components/TopNav'
import Card from '../../../components/support/Card'
import { useRouter } from 'next/router'

export default function SupportListing() {
  const router = useRouter()
  let category = router.asPath.split('/')[2]
  category = category.charAt(0).toUpperCase() + category.slice(1)
  let subcategory = router.asPath.split('/')[3].replace('-', ' ')
  const index = subcategory.search('-')
  if (index !== -1) {
    // handles Career Guidance & Coaching
    subcategory =
      subcategory.substring(0, index) + ' & ' + subcategory.substring(index + 1)
  }

  return (
    <div className={pageStyles.container24}>
      <TopNav
        pageName={category}
        displayBackButton={true}
        displayFilter={true}
      />
      <div className={styles.alignment}>
        <span className="text-body-main">{subcategory}</span>
      </div>
      <Card displayStar={true} />
      <BottomNav featureName="support" />
    </div>
  )
}
