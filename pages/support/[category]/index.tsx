import BottomNav from '../../../components/BottomNav'
import styles from '../../../styles/Page.module.css'
import TopNav from '../../../components/TopNav'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import career from '../../../public/assets/category/career.svg'
import healthcare from '../../../public/assets/category/healthcare.svg'
import financial from '../../../public/assets/category/financial.svg'
import self from '../../../public/assets/category/selfdevelopment.svg'
import family from '../../../public/assets/category/family.svg'
import children from '../../../public/assets/category/childeducation.svg'
import legal from '../../../public/assets/category/legal.svg'
import SubCategory from '../../../components/support/SubCategory'

export default function Support() {
  const [category_ref, set_category_ref] = useState([career, 'Career']) // set default values for prerendering

  const [filtered_subcat_list, set_filtered_subcat_list] = useState([])

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

  const category_dict = {
    career: [career, 'Career'],
    healthcare: [healthcare, 'Healthcare'],
    financial: [financial, 'Financial Assistance'],
    self: [self, 'Self Development'],
    family: [family, 'Family Services'],
    children: [children, 'Children Education'],
    legal: [legal, 'Legal']
  }

  const router = useRouter()
  let type

  useEffect(() => {
    if (router.isReady) type = router.asPath.split('/')[2]
    set_category_ref(category_dict[`${type}`])

    set_filtered_subcat_list(
      subcat_list.filter((subcat) => subcat.type === type)
    )
  }, [router.isReady])

  if (category_ref == null) {
    console.log(
      'error in [subcategory].tsx: category_ref is undefined as category type does not exist.'
    )
    return null
  } else {
    return (
      <div className={styles.container24}>
        {}
        <TopNav
          pageName={'Support'}
          displayBackButton={true}
          displayFilter={true}
        />
        <Image src={category_ref[0]} />
        <h4>{category_ref[1]}</h4> {/*  TODO: change weight to semibold */}
        {filtered_subcat_list.map((subcat) => (
          <SubCategory
            type={subcat.type}
            style={subcat.style}
            text={subcat.text}
          />
        ))}
        <BottomNav featureName="support" />
      </div>
    )
  }
}
