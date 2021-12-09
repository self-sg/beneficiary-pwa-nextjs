import Image from 'next/image'
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

const category_list = [
  { type: 'career', image: career, text: 'Career' },
  { type: 'healthcare', image: healthcare, text: 'Healthcare' },
  { type: 'financial', image: financial, text: 'Financial Assistance' },
  { type: 'self', image: self, text: 'Self Development' },
  { type: 'family', image: family, text: 'Family Services' },
  { type: 'children', image: children, text: 'Children Education' },
  { type: 'legal', image: legal, text: 'Legal' }
]

export default function Category(props: Props) {
  const type = props.type
  const category_ref = category_list.filter(
    (category) => category.type === type
  )[0]

  return (
    <div>
      <Link href={`/support/${category_ref.type}`}>
        <div>
          <Image src={category_ref.image} />
          <p className="text-body-main">{category_ref.text}</p>
        </div>
      </Link>
    </div>
  )
}
