import BottomNav from '../../components/BottomNav'
import styles from '../../styles/Home.module.css'
import TopNav from '../../components/TopNav'
import Category from '../../components/support/Category'

export default function Support() {
  //TODO: fetch from backend
  const dummy_category_data = [
    { type: 'career', count: 400 },
    { type: 'healthcare', count: 200 },
    { type: 'financial', count: 100 },
    { type: 'self', count: 1000 },
    { type: 'family', count: 50 },
    { type: 'children', count: 22 },
    { type: 'legal', count: 70 }
  ]
  return (
    <div className={styles.container}>
      {}
      <TopNav pageName={'Support'} displayBackButton={false} />

      <div className="flex-row">
        {dummy_category_data.map((category) => (
          <Category type={category.type} count={category.count} />
        ))}
      </div>

      <BottomNav name="support" />
    </div>
  )
}
