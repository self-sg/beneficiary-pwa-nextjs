import BottomNav from '../components/BottomNav'
import styles from '../styles/Home.module.css'
import TopNav from '../components/TopNav'
import Button from '../components/Button'
import { useRouter } from 'next/router'

export default function Support() {
  const router = useRouter()
  const goNextPage = () => {
    router.push('/supportsubcat')
  }
  return (
    <div className={styles.container}>
      {}
      <TopNav pageName={'Support'} displayBackButton={true} />
      <Button
        type="primary"
        text="View sub category"
        clickHandler={goNextPage}
      />
      <BottomNav name="support" />
    </div>
  )
}
