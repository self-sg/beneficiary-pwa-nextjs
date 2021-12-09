import BottomNav from '../../components/BottomNav'
import styles from '../../styles/Home.module.css'
import TopNav from '../../components/TopNav'
import { useRouter } from 'next/router'
import Image from 'next/image'
import career from '../../public/assets/category/career.svg'
import healthcare from '../../public/assets/category/healthcare.svg'
import financial from '../../public/assets/category/financial.svg'
import self from '../../public/assets/category/selfdevelopment.svg'
import family from '../../public/assets/category/family.svg'
import children from '../../public/assets/category/childeducation.svg'
import legal from '../../public/assets/category/legal.svg'
import SubCategory from '../../components/support/SubCategory'

export default function Support() {
  const router = useRouter()
  console.log(router)
  const type = router.asPath.split('/')[2]

  // const goNextPage = () => {
  //   router.push('/supportlisting')
  // }

  const subcat_list = [
    { type: 'career', style: 'career01', text: 'Work Programme' },
    { type: 'career', style: 'career02', text: 'Career Guidance & Coaching' },
    { type: 'healthcare', style: 'healthcare01', text: 'Mental' },
    { type: 'healthcare', style: 'healthcare02', text: 'Physical' },
    { type: 'healthcare', style: 'healthcare03', text: 'Special Needs' },
    { type: 'financial', style: 'financial01', text: 'Education' },
    { type: 'financial', style: 'financial02', text: 'Food' },
    { type: 'financial', style: 'financial03', text: 'Healthcare' },
    { type: 'financial', style: 'financial04', text: 'COVID' },
    { type: 'self', style: 'self01', text: 'Upskilling Course' },
    { type: 'self', style: 'self02', text: 'Language Class' },
    { type: 'family', style: 'family01', text: 'Marriage' },
    { type: 'family', style: 'family02', text: 'Parenting' },
    { type: 'children', style: 'children01', text: 'Education Class' },
    { type: 'children', style: 'children02', text: 'Childcare' },
    { type: 'children', style: 'children03', text: 'Enrichment Class' },
    { type: 'children', style: 'children04', text: 'School Searching' },
    { type: 'legal', style: 'legal01', text: 'Free Legal Clinic' },
    { type: 'legal', style: 'legal02', text: 'Child Rights' },
    { type: 'legal', style: 'legal03', text: 'Employment Rights' }
  ]

  const category_list = [
    { type: 'career', image: career, text: 'Career' },
    { type: 'healthcare', image: healthcare, text: 'Healthcare' },
    { type: 'financial', image: financial, text: 'Financial Assistance' },
    { type: 'self', image: self, text: 'Self Development' },
    { type: 'family', image: family, text: 'Family Services' },
    { type: 'children', image: children, text: 'Children Education' },
    { type: 'legal', image: legal, text: 'Legal' }
  ]

  const filtered_subcat_list = subcat_list.filter(
    (subcat) => subcat.type === type
  )

  const category_ref = category_list.filter((cat) => cat.type === type)[0]

  return (
    <div className={styles.container}>
      {}
      <TopNav pageName={'Support Subcategory'} displayBackButton={true} />
      <Image src={category_ref.image} />
      <h4>{category_ref.text}</h4> {/*  TODO: change weight to semibold */}
      {filtered_subcat_list.map((subcat) => (
        <SubCategory style={subcat.style} text={subcat.text} />
      ))}
      <BottomNav name="support" />
    </div>
  )
}
