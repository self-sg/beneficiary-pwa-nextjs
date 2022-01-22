import BottomNav from '../../components/BottomNav'
import pageStyles from '../../styles/Page.module.css'
import styles from '../../styles/Category.module.css'
import TopNav from '../../components/TopNav'
import FilterBar from '../../components/support/FilterBar'
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
    <div className={pageStyles.container}>
      {}
      <TopNav pageName={'Support'} displayBackButton={false} />
      <FilterBar />
      <div className={styles.container}>
        {dummy_category_data.map((category) => (
          <Category type={category.type} count={category.count} />
        ))}
      </div>

      <BottomNav featureName="support" />
    </div>
  )
}
