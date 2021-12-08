import BottomNav from '../components/BottomNav'
import styles from '../styles/Home.module.css'
import TopNav from '../components/TopNav'
import { useRouter } from 'next/router'
import Image from 'next/image'
import career from '../public/assets/category/career.svg'
import SubCategory from '../components/SubCategory'

export default function Support() {
  const router = useRouter()
  const goNextPage = () => {
    router.push('/supportlisting')
  }
  return (
    <div className={styles.container}>
      {}
      <TopNav pageName={'Support Subcategory'} displayBackButton={true} />
      {/* <Button type="primary" text="View listing" clickHandler={goNextPage} /> */}
      <Image src={career} />
      <h4>Career</h4> {/*  TODO: change weight to semibold */}
      <SubCategory style={'career01'} text={'Work Programme'} />
      <SubCategory style={'career02'} text={'Career Guidance & Coaching'} />
      <SubCategory style={'healthcare01'} text={'Mental'} />
      <SubCategory style={'healthcare02'} text={'Physical'} />
      <SubCategory style={'healthcare03'} text={'Special Needs'} />
      <SubCategory style={'financial01'} text={'Education'} />
      <SubCategory style={'financial02'} text={'Food'} />
      <SubCategory style={'financial03'} text={'Healthcare'} />
      <SubCategory style={'financial04'} text={'COVID'} />
      <SubCategory style={'self01'} text={'Upskilling Course'} />
      <SubCategory style={'self02'} text={'Language Class'} />
      <SubCategory style={'family01'} text={'Marriage'} />
      <SubCategory style={'family02'} text={'Parenting'} />
      <SubCategory style={'children01'} text={'Education Class'} />
      <SubCategory style={'children02'} text={'Childcare'} />
      <SubCategory style={'children03'} text={'Enrichment Class'} />
      <SubCategory style={'children04'} text={'School Searching'} />
      <SubCategory style={'legal01'} text={'Free Legal Clinic'} />
      <SubCategory style={'legal02'} text={'Child Rights'} />
      <SubCategory style={'legal03'} text={'Employment Rights'} />
      <BottomNav name="supportsubcat" />
    </div>
  )
}
