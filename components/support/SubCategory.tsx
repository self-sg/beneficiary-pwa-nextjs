import styles from '../../styles/SubCategory.module.css'
import Image from 'next/image'
import careerguidance from '../../public/assets/images/career/careerguidance.png'
import workprogramme from '../../public/assets/images/career/workprogramme.png'
import mental from '../../public/assets/images/healthcare/mental.png'
import physical from '../../public/assets/images/healthcare/physical.png'
import specialneeds from '../../public/assets/images/healthcare/specialneeds.png'
import education from '../../public/assets/images/financial/education.png'
import food from '../../public/assets/images/financial/food.png'
import healthcare from '../../public/assets/images/financial/healthcare.png'
import covid from '../../public/assets/images/financial/covid.png'
import upskilling from '../../public/assets/images/self-development/upskilling.png'
import language from '../../public/assets/images/self-development/language.png'
import marriage from '../../public/assets/images/family/marriage.png'
import parenting from '../../public/assets/images/family/parenting.png'
import educationclass from '../../public/assets/images/children-education/educationclass.png'
import childcare from '../../public/assets/images/children-education/childcare.png'
import enrichmentclass from '../../public/assets/images/children-education/enrichmentclass.png'
import schoolsearching from '../../public/assets/images/children-education/schoolsearching.png'
import freelegalclinic from '../../public/assets/images/legal/freelegalclinic.png'
import childrights from '../../public/assets/images/legal/childrights.png'
import employmentrights from '../../public/assets/images/legal/employmentrights.png'
import Link from 'next/link'

interface Props {
  style: string
  text: string
  type: string
  clickHandler?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const image_dict = {
  career01: workprogramme,
  career02: careerguidance,
  healthcare01: mental,
  healthcare02: physical,
  healthcare03: specialneeds,
  financial01: education,
  financial02: food,
  financial03: healthcare,
  financial04: covid,
  self01: upskilling,
  self02: language,
  family01: marriage,
  family02: parenting,
  children01: educationclass,
  children02: childcare,
  children03: enrichmentclass,
  children04: schoolsearching,
  legal01: freelegalclinic,
  legal02: childrights,
  legal03: employmentrights
}

export default function SubCategory(props: Props) {
  const subcat_route = props.text
    .toLowerCase()
    .replace('& ', '') // handles 'Career Guidance & Coaching'
    .replace(/[^a-zA-Z]/g, '-')

  if (image_dict[`${props.style}`] == null) {
    console.log(
      'error in SubCategory.tsx: image_dict[`${props.style}`] is undefined as style prop does not exist as a key in image_dict.'
    )
    return null
  } else {
    return (
      <Link href={`/support/${props.type}/${subcat_route}`}>
        <div className={`${styles[props.style]}`}>
          <Image src={image_dict[`${props.style}`]} />
          <div className={styles.centered}>
            <p className="text-body-main">{props.text}</p>
          </div>
        </div>
      </Link>
    )
  }
}
