import styles from '../styles/TopNav.module.css'
import { IoIosArrowBack } from 'react-icons/io'
import { useRouter } from 'next/router'

interface Props {
  pageName: string
  displayBackButton: boolean
}

export default function TopNav(props: Props) {
  const router = useRouter()

  return (
    <div className={styles.topNav}>
      {props.displayBackButton ? (
        <IoIosArrowBack
          style={{ marginLeft: '14px' }}
          onClick={() => router.back()}
        />
      ) : undefined}
      <div
        className={
          props.displayBackButton
            ? styles.pageNameWrapperWithIcon
            : styles.pageNameWrapper
        }
      >
        <p className="text-caption">{props.pageName}</p>
      </div>
    </div>
  )
}
