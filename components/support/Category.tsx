import Image from 'next/image'
import styles from '../../styles/Category.module.css'
import career from '../../public/assets/category/career.svg'
import healthcare from '../../public/assets/category/healthcare.svg'
import financial from '../../public/assets/category/financial.svg'
import self from '../../public/assets/category/selfdevelopment.svg'
import family from '../../public/assets/category/family.svg'
import children from '../../public/assets/category/childeducation.svg'
import legal from '../../public/assets/category/legal.svg'
import Link from 'next/link'

interface Props {
  type: string
  count: number
  clickHandler?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const category_dict = {
  career: [career, 'Career'],
  healthcare: [healthcare, 'Healthcare'],
  financial: [financial, 'Financial Assistance'],
  self: [self, 'Self Development'],
  family: [family, 'Family Services'],
  children: [children, 'Children Education'],
  legal: [legal, 'Legal']
}

export default function Category(props: Props) {
  const type = props.type
  const count = props.count
  const category_ref = category_dict[`${type}`]

  if (category_ref == null) {
    console.log(
      'error in Category.tsx: category_ref is undefined as category type does not exist.'
    )
    return null
  } else {
    return (
      <div>
        <Link href={`/support/${type}`}>
          <div className={styles.categoryContainer}>
            <Image src={category_ref[0]} />
            <p className="text-body-caption">{category_ref[1]}</p>
            <span className={styles.count}>{count}</span>
          </div>
        </Link>
      </div>
    )
  }
}
