import BottomNav from '../components/BottomNav'
import styles from '../styles/Home.module.css'
import TopNav from '../components/TopNav'
import Button from '../components/Button'
import { useRouter } from 'next/router'

export default function Support() {
  const router = useRouter()
  const goNextPage = () => {
    router.push('/supportlisting')
  }
  return (
    <div className={styles.container}>
      {}
      <TopNav pageName={'Support Subcategory'} displayBackButton={true} />
      <Button type="primary" text="View listing" clickHandler={goNextPage} />
      <BottomNav name="supportsubcat" />
    </div>
  )
}
